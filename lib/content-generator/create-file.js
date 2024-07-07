
const fs = require("fs");
const {svgContent} = require("./svg-content");

// This function will take the data from the prompts and insert it into a new file
function writeToFile(data){
// If the file is succesfully written then the "Generated logo.svg" message will appear, if it fails it will return an error
    fs.writeFile("logo.svg", svgContent(data), error => error ? console.error(error): console.log("Generated logo.svg"))

}

// Export the function to be used in other files
module.exports = {writeToFile};
