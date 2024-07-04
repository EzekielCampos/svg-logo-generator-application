

class Shape
{
    constructor(text, textColor, shapeColor, type){

        this.textColor = textColor;
        this.text = text;
        this.shapeColor = shapeColor;
        this.type = type;

    }
}


class Circle extends Shape{
    constructor(text, textColor, shapeColor, type){

        super(text,textColor,shapeColor,type);

    }

}

class Triangle extends Shape{
    constructor(text, textColor, shapeColor, type){

        super(text,textColor,shapeColor,type);
    }

}

class Square extends Shape{
    constructor(text, textColor, shapeColor, type){

        super(text,textColor,shapeColor,type);

    }

}


module.exports={Circle, Square, Triangle};