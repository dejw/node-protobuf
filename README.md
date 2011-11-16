# `protobuf-for-node`

This is fork of [protobuf-for-node](http://code.google.com/p/protobuf-for-node/) library, fixed to work with latest node version (at the time of writing - 0.5.5).

## Requirements

Make sure you have installed following libraries:

* libprotobuf-dev (>= 2.4.0a)
* libprotobuf7 (>= 2.4.0a)
* protobuf-compiler (>= 2.4.0a)

## Installation

### 1. Latest node.js
`protobuf-for-node` requires latest version of node (0.6.1).

#### Ubuntu and deb-based distributions

Installation of latest node is fairly straightforward, and can be done from precompiled deb packages.

Since in main Ubuntu repository contains only stable version of node, you have to add `chris-lea/node.js-devel` PPA (https://launchpad.net/~chris-lea/+archive/node.js-devel) to `/etc/apt/sources.list`. For example for Ubuntu 11.10:

    deb http://ppa.launchpad.net/chris-lea/node.js-devel/ubuntu oneiric main 
    deb-src http://ppa.launchpad.net/chris-lea/node.js-devel/ubuntu oneiric main 

Now execute following:

    sudo apt-get update
    sudo apt-get install nodejs nodejs-dev
 
Installation of the protobuf tools needed is also quite easy as long as you have Ubuntu 11.10.
Previous versions didn't have a new enough version of protobuf in the repository.

Just execute:

    sudo apt-get install protobuf-compiler libprotobuf-dev


#### Other distributions

For other distributions, following https://github.com/joyent/node/wiki/Installation is recommended. 

### 2. `protobuf`

Since this version of `protobuf-for-node` is not available yet in `npm` repository, cloning sources is required:

    git clone git://github.com/dejw/node-protobuf.git
    cd node-protobuf
    sudo npm link

Now type:

    npm link protobuf

inside project's base directory to load module.

## Usage

Usage examples are described here: http://code.google.com/p/protobuf-for-node/

## Changes

### Version 0.1.3

1. Removed compilation errors against node 0.5.5
2. Fixed makefile script
3. Fixed tests to require `protobuf` instead of `protobuf_for_node`

### Version 0.1.2

1. Fixed a bug which corrupts field names in proto files.
2. Library compiles in single node module.

## Credits

Author: Matthias Ernst  
Contributors: Igor Gumenyuk, Dawid Fatyga
