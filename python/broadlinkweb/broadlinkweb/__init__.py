import os
import broadlink
import yaml
from flask import Flask, g
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config.from_object('broadlinkweb.default_settings')
app.config.from_envvar('BROADLINKWEB_SETTINGS')

if not app.debug:
    import logging
    from logging.handlers import TimedRotatingFileHandler
    # https://docs.python.org/3.6/library/logging.handlers.html#timedrotatingfilehandler
    file_handler = TimedRotatingFileHandler(os.path.join(app.config['LOG_DIR'], 'broadlinkweb.log'), 'midnight')
    file_handler.setLevel(logging.WARNING)
    file_handler.setFormatter(logging.Formatter('<%(asctime)s> <%(levelname)s> %(message)s'))
    app.logger.addHandler(file_handler)

def configure_device():
    host = (app.config['DEVICE_HOST'], 80)
    mac = bytearray.fromhex(app.config['DEVICE_MAC'].replace(':', ''))
    device = broadlink.rm(host=host, mac=mac)
    device.auth()
    return device

def get_device():
    if not hasattr(g, 'device'):
        g.device = configure_device()
    return g.device

def get_data_dir():
    return app.config['DATA_DIR']

def get_commands_dir():
    return os.path.join(get_data_dir(), 'commands')

def get_macros_dir():
    return os.path.join(get_data_dir(), 'macros')

def get_config_file(name):
    return os.path.join(get_data_dir(), name + '.yaml')

def get_config(name):
    config = open(get_config_file(name), 'r')
    return yaml.load(config)

def write_config(name, config):
    with open(get_config_file(name), 'w') as config_file:
        yaml.dump(data, config)

import broadlinkweb.views
