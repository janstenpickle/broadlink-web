import os
import sys
import time
import binascii

from flask import render_template, jsonify

from broadlinkweb import *

@app.route('/')
def index():
    app.logger.warning('sample message')
    return render_template('index.html')

@app.route('/config/<type>')
def config(type):
    config = get_config(type)
    return jsonify(config)

@app.route('/send/<path:command>')
def send(command):
    device = get_device()
    file = os.path.join(get_commands_dir(), command)
    app.logger.debug("Replaying command from file " + file)
    with open(file, 'rb') as f:
        ir_packet = f.read()
    device.send_data(binascii.unhexlify(ir_packet))
    return '%s' % command

@app.route('/macro/<path:command>')
def macro(command):
    file = os.path.join(get_macros_dir(), command)
    app.logger.debug("Replaying macro from file " + file)
    with open(file, 'rb') as f:
        for l in f:
            line = l.decode('utf-8').strip(' \n\r\t')
            if len(line) == 0 or line.startswith("#"):
                continue
            if line.startswith("pause "):
                pause = int(line[6:].strip())
                app.logger.debug("Pause for " + str(pause) + " milliseconds")
                time.sleep(pause / 1000.0)
            else:
                send(line)
    return '%s' % command

@app.route('/learn/<path:command>')
def learn(command):
    app.logger.debug("Recording command to file " + command)
    device = get_device()
    # receive packet
    device.enter_learning()
    ir_packet = None
    attempt = 0
    while ir_packet is None and attempt < 6:
        time.sleep(5)
        ir_packet = device.check_data()
        attempt = attempt + 1
    if ir_packet is not None:
        # write to file
        file = os.path.join(get_commands_dir(), command)
        app.logger.debug('Writing file to %s' % file)
        directory = os.path.dirname(file)
        if not os.path.exists(directory):
            os.makedirs(directory)
        with open(file, 'wb') as f:
            f.write(binascii.hexlify(ir_packet))
        app.logger.debug("Done")
        return 'OK'
    else:
        app.logger.warn("No command received")
        return 'No command received', 500
