

const classShape = require("../shapes");


const svgContent = ({shape, logo, textColor, shapeColor}) => {

  if (shape === "Triangle"){

    let usersChoice = new classShape[shape](logo, textColor, shapeColor);

    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${usersChoice.type}
  <text x="150" y="120" dominant-baseline="middle" text-anchor="middle" font-size="45" font-family="Courier" fill="${usersChoice.textColor}">${usersChoice.text}</text>
</svg>`


  }

  else{

    let usersChoice = new classShape[shape](logo, textColor, shapeColor);

    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${usersChoice.type}
  <text x="150" y="105" dominant-baseline="middle" text-anchor="middle" font-size="45" font-family="Courier" fill="${usersChoice.textColor}">${usersChoice.text}</text>
</svg>`

  }


}

module.exports = {svgContent};


