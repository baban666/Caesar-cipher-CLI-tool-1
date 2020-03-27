// Import
const {dataTransformation} = require('./modules/data_transformation.js');
const {getOutputFile, getInputFile, validateArgs} = require('./modules/console_arguments.js');

validateArgs(); // Validate the console arguments
dataTransformation(getInputFile(), getOutputFile()); // Transform data
