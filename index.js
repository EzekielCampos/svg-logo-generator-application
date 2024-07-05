

const inquirer = require("inquirer");

const {writeToFile} = require("./lib/content-generator/create-file");



const init = () =>{

    inquirer.prompt([
        {
            type:"input",
            message:"Enter three letters that you would like for your logo",
            name:"logo",
        },
        {
            type:"input",
            message:"Enter a color or hexadecimal value that you would like for the text color",
            name:"textColor",
        },
    
        {
            type:"list",
            message:"Enter the shape you would like to have for the logo",
            name:"shape",
            choices:["Circle", "Square", "Triangle"],
        },
        {
            type:"input",
            message:"Enter a color or hexadecimal value that you would like for the shape",
            name:"shapeColor",
        },
        
    ]).then(response =>{
    
    writeToFile(response);
    
    })
    

}


init();


