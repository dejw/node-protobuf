build:
	@node-waf configure build

install:
	@mkdir -p ~/.node_libraries && cp ./build/Release/protobuf.node ./
  
all: build install

clean:
	@rm -rf ./build
