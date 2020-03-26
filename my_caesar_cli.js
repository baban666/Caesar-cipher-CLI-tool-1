// Import an encryption/decryption module
const cryptoSystem = require('./src/caesar_cypher.js');

// Obtaining the console arguments
const argv = require('minimist')(process.argv.slice(2));


console.log(argv);
