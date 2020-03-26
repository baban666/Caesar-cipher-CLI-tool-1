const {getAction, getShift} = require('./console_arguments.js');

// Import an encryption/decryption function
const {cryptoSystem} = require('./caesar_cypher.js');

const stream = require('stream');
const coder = new stream.Transform({objectMode: true});


coder._transform = function (chunk, encoding, done) {
  done(null, cryptoSystem(chunk.toString(),getShift(),getAction()));
};

module.exports = {coder};
