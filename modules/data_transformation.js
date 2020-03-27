const fs = require('fs');
const {pipeline} = require('stream');
const {coder} = require('./stream.js');

/**
 * Transform a text from <source> to <target> with coding/decoding by <coder>,
 * where <source> is a file, if <inputFile> is defined and process.stdin, otherwise;
 * <target> is a file, if <outputFile> is defined and process.stdout, otherwise.
 *
 * @param inputFile - A path to a file, from which we read a text data.
 * @param outputFile - A path to a file; we push the transformed text data in this file.
 */
function dataTransformation(inputFile, outputFile) {
    let source;
    if(inputFile) {
        source = fs.createReadStream(inputFile);
    } else {
        source = process.stdin;
    }
    let target;
    if (outputFile) {
        target = fs.createWriteStream(outputFile, {flags: 'a'});
    } else {
        target = process.stdout;
    }
    pipeline(source, coder, target, err => {
        if (err) {
            process.stderr.write(err.message + '\n');
            process.exit(1);
        }
    });
}

module.exports = {
    dataTransformation
};
