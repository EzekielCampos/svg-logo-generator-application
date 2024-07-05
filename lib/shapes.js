

class Shape
{
    constructor(text, textColor, shapeColor,){

        this.textColor = textColor;
        this.text = text;
        this.shapeColor = shapeColor;

    }
}


class Circle extends Shape{
    constructor(text, textColor, shapeColor){

        super(text,textColor,shapeColor);
        this.type = `<circle cx="150" cy="100" r="95" fill="${this.shapeColor}"/>`;

        this.elementTags = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${this.type}
            <text x="150" y="105" dominant-baseline="middle" text-anchor="middle" font-size="45" font-family="Courier" fill="${this.textColor}">${this.text}</text>
            </svg>`


    }

    render(){
        return this.type;
    }

}

class Triangle extends Shape{
    constructor(text, textColor, shapeColor){

        super(text,textColor,shapeColor);
        this.type = `<polygon points="150,0 0,200 300,200" fill="${this.shapeColor}"/>`

        this.elementTags = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${this.type}
            <text x="150" y="120" dominant-baseline="middle" text-anchor="middle" font-size="45" font-family="Courier" fill="${this.textColor}">${this.text}</text>
            </svg>`


    }
    render(){
        return this.type;
    }


}

class Square extends Shape{
    constructor(text, textColor, shapeColor,){

        super(text,textColor,shapeColor);
        this.type = `<rect x="50" y="0" width="200" height="200" fill="${this.shapeColor}"/>`;

        this.elementTags =`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${this.type}
            <text x="150" y="105" dominant-baseline="middle" text-anchor="middle" font-size="45" font-family="Courier" fill="${this.textColor}">${this.text}</text>
            </svg>`;


        
    }
    render(){
        return this.type;
    }


}


module.exports={Circle, Square, Triangle,};