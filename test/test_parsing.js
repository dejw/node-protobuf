
var util = require('util');
var assert = require('assert');
var fs = require('fs');

// Load schema
var Schema = require('../protobuf').Schema;
var TestSchema = new Schema(fs.readFileSync('./test/test.desc'));
var TestMessage = TestSchema['node_protobuf.TestMessage'];

/* hack to make the tests pass with node v0.3.0's new Buffer model */
/* copied from http://github.com/bnoordhuis/node-iconv/blob/master/test.js */
bufferEqual = function(test, a, b) {
	test.equal(
		a.inspect().replace(/^<SlowBuffer/, '<Buffer'),
		b.inspect().replace(/^<SlowBuffer/, '<Buffer'));
};


/* Generic roundtrip serialization test */
var shouldSerialize = function(test, message){
	// given
	var message = message;

	// when
	var serialzied = TestMessage.serialize(message);

	// then
	test.equal(util.inspect(TestMessage.parse(serialzied)), util.inspect(message));
}

exports.shouldSerializeAndParseMessage = function(test){
	shouldSerialize(test, {test : 123});
	test.done();
}

exports.shouldSkipUnknownAttributes = function(test){
	// given
	var message = {test : 123, unknown : 'hello'};

	// when
	var serialzied = TestMessage.serialize(message);
	var parsed = TestMessage.parse(serialzied);

	// then
	test.ok(!parsed.unknown);
	test.ok(!!parsed.test);
	test.done();
}

exports.shouldSerializeDifferentTypes = function(test){
	shouldSerialize(test, {string : 'Hello'});
	shouldSerialize(test, {int32 : 123});
	shouldSerialize(test, {repeated: [{test : 123}]});
	shouldSerialize(test, {camelCase: 'Foo'});

	test.done();
}

exports.shouldSerializeBytes = function(test){
	var message =  {buffer: TestMessage.serialize({string:'Hello', int32:0})};
	var serialized = TestMessage.serialize(message);
	var parsed = TestMessage.parse(serialized);
	bufferEqual(test, message.buffer, new Buffer(parsed.buffer, 'binary'));

	test.done();
}