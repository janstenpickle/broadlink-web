all: run

clean:
	cd python/broadlinkweb && make clean && cd -

build:
	cd python/broadlinkweb && make venv && cd - \
	&& cd js && npm build && cd - \
	&& cp -r js/build/* python/broadlinkweb/broadlinkweb/static/ \
	&& mv python/broadlinkweb/broadlinkweb/static/static/* python/broadlinkweb/broadlinkweb/static/

run: build
	cd python/broadlinkweb && make run
