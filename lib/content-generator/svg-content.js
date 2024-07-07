

const classShape = require("../shapes");

//This function takes an object that holds the users responses from the CLI promptes and uses deconstructing syntax for it's parameters
const svgContent = ({shape, logo, textColor, shapeColor}) => {
// This variable creates a new instance of a class depending on the users responses
  let usersChoice = new classShape[shape](logo, textColor, shapeColor);
// Once the class is initialized it returns a string that holds the necessary tags to output a logo to the svg file
  return usersChoice.elementTags


}
// Exports the function to be used in different files
module.exports = {svgContent};


