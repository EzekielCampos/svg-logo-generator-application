

const classShape = require("./shapes");


const svgContent = ({shape, logo, textColor, shapeColor}) => {


    let test = new classShape[shape](logo, textColor, shapeColor);


    return console.log(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${test.type}
  <text x="150" y="105" dominant-baseline="middle" text-anchor="middle" font-size="45" fill="${test.textColor}">${test.text}</text>
</svg>`)


    // console.log(test);


}

module.exports = {svgContent};


