
const {Circle, Triangle, Square} = require("./shapes");



// Passing test to see if the string that makes the shape matches
describe("Shapes", () =>{

    describe("Circle", () =>{
        it("should return element tags for a circle", ()=>{
            const circleTest = new Circle("hi", "Red", "Blue");
            expect(circleTest.render()).toBe(`<circle cx="150" cy="100" r="95" fill="Blue"/>`);
        });

    });

    describe("Triangle", () =>{

        it("should return a elements tags for a triangle", () =>{

            const testTriangle = new Triangle("Test", "Magenta", "Purple")
            expect(testTriangle.render()).toBe(`<polygon points="150,0 0,200 300,200" fill="Purple"/>`);

        });
    });

    describe("Square", () =>{

        it("should return a string containing element tags for a square", () =>{


            const testSquare = new Square("Square", "Orange", "Gold");
            expect(testSquare.render()).toBe(`<rect x="50" y="0" width="200" height="200" fill="Gold"/>`);

        });

    });

});

