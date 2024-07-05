

const classShape = require("../shapes");


const svgContent = ({shape, logo, textColor, shapeColor}) => {

  let usersChoice = new classShape[shape](logo, textColor, shapeColor);

  return usersChoice.elementTags


}

module.exports = {svgContent};


