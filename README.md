
# SVG Logo Maker Application

[![License: MIT](https://cdn.prod.website-files.com/5e0f1144930a8bc8aace526c/65dd9eb5aaca434fac4f1c34_License-MIT-blue.svg)](/LICENSE)


## Table of Contents
-[Description](#description)
<br/>
-[Installation](#installation)
<br/>
-[Usage](#usage)
<br/>
-[Contributing](#contributing)
<br/>
-[License](#license)
<br/>
-[Tests](#tests)
<br/>
-[Questions](#questions)
<br/>

## Description

This application helps a user to create as simple logo using their responses from the CLI prompt.  The responses are used to create a shape class and use that information from the class to dynamically create a svg file to render the logo.  In this project the motivation was to practice using the different features of classes such as inheritance and polymorphism.  The classes were used to create different variations of shapes that a user might select.  This data type helped me write cleaner and much more condensed code that made accessing information for particular variables simple.  In addition to using classes I was able to perform unit testing to see if those classes were functioning the way they were designed to.  Unit testing helped me find bugs early on in the coding process that I might have missed.

## Installation

To install this repo in your local environment just clone it using the GitHub url.  Once that’s done, this application requires two main packages to be installed along with its dependencies: inquirer and jest.  In order to run these packages you must have node installed in your computer.  Since the dependencies are already inside the package.json file, just run the command “npm i” to install the modules on your local environment.

## Usage

This application can be used create a simple shape logo by just using the CLI.  In order to invoke the application, open the terminal where the application is located and type the command “node index.js”.  Once there a series of prompts will be presented to you that will help generate the logo.  After all the questions are answered a message will appear in the terminal will let you know whether or not the file was generated.  If it was successful then a file called “logo.svg” will be placed inside the repository.
### Application Demo 
[Video Link](https://drive.google.com/file/d/14FC2NeoUWHobW8ZxUpGtB23ykuc1o6x_/view)
## Contributing

N/A
## License

This repository is covered under the MIT license

## Tests

In the repo there are test to verify whether instances of a class were successful created.  In order to test this each class has a method called render that will return a string that has the element tags to create the shape specified.  Using the jest module, you can test whether the string that is returned from the render method matches the string that is expected.


## Questions

* GitHub Profile: [EzekielCampos](https://github.com/EzekielCampos)

If you have any additional questions contact me by email at ezcampos603@gmail.com

