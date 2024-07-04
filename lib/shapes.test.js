

const {Circle, Triangle, Square} = require("./shapes");



describe("Shapes", () =>{

    describe("Circle", () =>{
        it("should return a string element tags for a circle", ()=>{
            const circleTest = new Circle("red", "Hi", "blue");
            expect(circleTest.shapeColor).toBe(`<circle cx="150" cy="100" r="95" fill="blue" stroke="black" stroke-width="2"/>`);
        });

    });


});

