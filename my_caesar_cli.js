// Validate the console arguments
const {getOutputFile, getInputFile, validateArgs} = require('./modules/console_arguments.js');
validateArgs();

const {dataTransformation} = require('./modules/data_transformation.js');
dataTransformation(getInputFile(), getOutputFile());
