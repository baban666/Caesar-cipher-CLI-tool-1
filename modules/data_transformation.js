const fs = require('fs');
const {pipeline} = require('stream');


const {coder} = require('./stream.js');

function dataTransformation(inputFile, outputFile) {
    pipeline(
        fs.createReadStream(inputFile), coder, fs.createWriteStream(outputFile), err => {
            if (err) {
                process.stderr.write(err.message + '\n');
                process.exit(1);
            }
        }
    );
}

module.exports = {
    dataTransformation
};
