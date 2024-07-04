

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

        this.type = `<circle cx="150" cy="100" r="95" fill="${this.shapeColor}" stroke="black" stroke-width="2"/>`;

    }

    render(){
        return this.type;
    }

}

class Triangle extends Shape{
    constructor(text, textColor, shapeColor){

        super(text,textColor,shapeColor);
        this.type = `<polygon points="150,0 0,200 300,200" fill="${shapeColor}"/>`

    }
    render(){
        return this.type;
    }


}

class Square extends Shape{
    constructor(text, textColor, shapeColor,){

        super(text,textColor,shapeColor);

        this.type = `<rect x="50" y="0" width="200" height="200" fill="${shapeColor}" stroke="black" stroke-width="2"/>`

    }
    render(){
        return this.type;
    }


}


module.exports={Circle, Square, Triangle,};