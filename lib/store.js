'use strict';
// TODO: note that generally, requirements are loosely ordered by
// their relative importance to the file in question
const fs = require('fs');
const util = require('util');
const level = require('level');
const mkdirp = require('mkdirp');

const _ = require('./functions');

function Store (vector) {
  let template = {
    path: './data/store',
    get: this.get,
    set: this.set,
    del: this.del,
    transform: this.transform,
    createReadStream: this.createReadStream,
  };

  this['@data'] = _.merge({}, template, vector || {});

  this.clock = 0;
  this.stack = [];
  this.known = {};

  this.init();
}

util.inherits(Store, require('./vector'));

Store.prototype.get = async function GET (key) {
  let self = this;
  var test = null;

  console.debug('getting:', key);

  try {
    let value = await self.db.get(key);
    test = value;
  } catch (E) {
    console.debug(E);
  }

  console.debug('raw output:', test);

  try {
    if (typeof test === 'string') {
      test = JSON.parse(test);
    }
  } catch (E) {
    console.debug('[PARSER]', E);
  }

  console.debug('after import:', test);

  return test;
};

/**
 * Set a `key` to a specific `value`.
 * @param       {String} key   Address of the information.
 * @param       {Mixed} value Content to store at `key`.
 */
Store.prototype.set = async function PUT (key, value) {
  let self = this;
  var test = null;

  console.debug('[STORE]', 'setting:', key, value);

  try {
    if (typeof value !== 'string') {
      value = JSON.stringify(value);
    }
  } catch (E) {
    console.debug(E);
  }

  console.debug('[STORE]', 'value:', value);

  try {
    let result = await self.db.put(key, value);
    console.debug('result of set:', result);
    test = await self.db.get(key);
  } catch (E) {
    console.debug(E);
  }

  console.debug('set returning:', test);

  return test;
};

Store.prototype.del = async function DEL (key) {
  return await this.db.del(key);
};

Store.prototype.transform = function TRANSFORM (transaction, done) {
  this.db.del(batch, done);
};

Store.prototype.createReadStream = function createReadStream () {
  return this.db.createReadStream();
};

Store.prototype.open = function load () {
  console.debug('[STORE]', 'opening store:', this['@data'].path);
  if (!fs.existsSync(this['@data']['path'])) {
    mkdirp.sync(this['@data']['path']);
  }

  try {
    this.db = level(this['@data']['path']);
  } catch (E) {
    console.error('[STORE]', e);
  }

  return this;
}

Store.prototype.close = async function close () {
  console.debug('[STORE]', 'closing store:', this['@data'].path);
  if (this.db) {
    try {
      await this.db.close();
    } catch (E) {
      console.error('[STORE]', 'closing store:', this['@data'].path, E);
    }
  }

};

module.exports = Store;
