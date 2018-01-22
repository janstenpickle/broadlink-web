all: run

clean:
	rm -rf venv && rm -rf *.egg-info && rm -rf dist && rm -rf *.log* && rm -rf broadlinkweb/static/*

venv:
	python3.6 -m venv venv && venv/bin/python setup.py develop

run: venv
	FLASK_APP=broadlinkweb BROADLINKWEB_SETTINGS=../settings.cfg venv/bin/flask run --host=0.0.0.0 --port 8000

test: venv
	BROADLINKWEB_SETTINGS=../settings.cfg venv/bin/python -m unittest discover -s tests

sdist: venv test
	venv/bin/python setup.py sdist
