
// This is to include the inquirer package to be used for the CLI prompts
const inquirer = require("inquirer");

// This function will be used to write the content for the logo and generate a svg file for the logo
const {writeToFile} = require("./lib/content-generator/create-file");


// This function will begin the CLI prompting
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
    // An object will be returned with all the responses from the user and with  that data a new file will be created for the new logo
    writeToFile(response);
    
    })
    

}

// Calling the init function will begin the CLI prompting
init();


