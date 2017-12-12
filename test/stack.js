var assert = require('assert');
var expect = require('chai').expect;

var Fabric = require('../');
var functions = require('../lib/functions');

describe('Stack', function () {
  it('should correctly compute a known instruction', function () {
    var fabric = new Fabric();

    fabric.use('OP_TEST', function (state) {
      return true;
    });

    fabric.stack.push('OP_TEST');

    fabric.compute();

    assert.equal(fabric['@data'], true);
    assert.equal(fabric.clock, 1);
  });

  it('can add two numbers', function () {
    var fabric = new Fabric();

    fabric.use('ADD', functions.OP_ADD);

    fabric.stack.push('1');
    fabric.stack.push('1');
    fabric.stack.push('ADD');

    fabric.compute();

    assert.equal(fabric['@data'], 2);
    assert.equal(fabric.clock, 1);
  });

  it('can add two other numbers', function () {
    var fabric = new Fabric();

    fabric.use('ADD', functions.OP_ADD);

    fabric.stack.push('123');
    fabric.stack.push('456');
    fabric.stack.push('ADD');

    fabric.compute();

    assert.equal(fabric['@data'], 579);
    assert.equal(fabric.clock, 1);
  });
});
