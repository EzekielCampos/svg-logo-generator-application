
// Base class that the other shapes will derive from
class Shape
{
    // The constructor will hold the different responses from the user
    constructor(text, textColor, shapeColor,){

        this.textColor = textColor;
        this.text = text;
        this.shapeColor = shapeColor;

    }
}


// Circle inherits from the base class Shape
class Circle extends Shape{
    constructor(text, textColor, shapeColor){

        super(text,textColor,shapeColor);
        // This attribute holds specific tag that is needed to render a circle for an svg
        this.type = `<circle cx="150" cy="100" r="95" fill="${this.shapeColor}"/>`;

        // This string will hold everything necessary to render the shape and the text for the log inside the svg file
        this.elementTags = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${this.type}
            <text x="150" y="105" dominant-baseline="middle" text-anchor="middle" font-size="45" font-family="Courier" fill="${this.textColor}">${this.text}</text>
            </svg>`;


    }
    // This method will be used for the unit testing to verify that the element tags to make the shape are the correct one for the specfied class
    render(){
        return this.type;
    }

}
// Triangle inherits from the base class Shape
class Triangle extends Shape{
    constructor(text, textColor, shapeColor){

        super(text,textColor,shapeColor);
        
        // This attribute holds specific tag that is needed to render a circle for an svg
        this.type = `<polygon points="150,0 0,200 300,200" fill="${this.shapeColor}"/>`;
        // This string will hold everything necessary to render the shape and the text for the log inside the svg file
        this.elementTags = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${this.type}
            <text x="150" y="120" dominant-baseline="middle" text-anchor="middle" font-size="45" font-family="Courier" fill="${this.textColor}">${this.text}</text>
            </svg>`;


    }
    // This method will be used for the unit testing to verify that the element tags to make the shape are the correct one for the specfied class
    render(){
        return this.type;
    }


}
// Square inherits from the base class Shape
class Square extends Shape{
    constructor(text, textColor, shapeColor,){

        super(text,textColor,shapeColor);
        // This attribute holds specific tag that is needed to render a triangle for an svg
        this.type = `<rect x="50" y="0" width="200" height="200" fill="${this.shapeColor}"/>`;
        // This string will hold everything necessary to render the shape and the text for the log inside the svg file
        this.elementTags =`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${this.type}
            <text x="150" y="105" dominant-baseline="middle" text-anchor="middle" font-size="45" font-family="Courier" fill="${this.textColor}">${this.text}</text>
            </svg>`;


        
    }
    // This method will be used for the unit testing to verify that the element tags to make the shape are the correct one for the specfied class
    render(){
        return this.type;
    }


}

// Export the functions to be used in other files
module.exports={Circle, Square, Triangle};