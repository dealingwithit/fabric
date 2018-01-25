var assert = require('assert');
var expect = require('chai').expect;

var Peer = require('../lib/peer');

var key = '/test';
var data = require('../data/message');

describe('Peer', function () {
  it('should expose a constructor', function () {
    assert.equal(typeof Peer, 'function');
  });
  
  it('should be able to identify itself', async function () {
    var me = new Peer();
    
    me.compute();
    
    assert.equal(me['@id'], '44136fa355b3678a1146ad16f7e8649e94fb4fc21fe77e8310c060f61caaff8a');
  });
  
  it('can connect to a peer', function () {
    var me = new Peer();
    var them = new Peer();
    
    assert.equal(0, 1);
  });
});
