
const fs = require("fs");
const {svgContent} = require("./svg-content");


function writeToFile(data){

    fs.writeFile("logo.svg", svgContent(data), error => error ? console.error(error): console.log("Generated logo.svg"))

}

module.exports = {writeToFile};
