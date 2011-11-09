build:
	@node-waf configure build

install:
	@mkdir -p ~/.node_libraries && cp ./build/Release/protobuf.node ./
  
all: build install

clean:
	@rm -rf ./build

test: 
	@nodeunit test

.PHONY: all test
