// Write a function named getAreaOfCircle. 
// It takes a radius parameter. 
// It calculates and returns the area of a circle with that radius.

// let radius = prompt("Enter Radius");

let radius = 5;

function getAreaOfCircle(radius){
    return (radius * radius * Math.PI);
}

console.log(getAreaOfCircle(radius));

// Write a function named getCircumferenceOfCircle. 
// It takes a radius parameter. It calculates and 
// returns the circumference of a circle with that radius.

function getCircumferenceOfCircle(radius){
    return (radius * 2 * Math.PI);
}

console.log(getCircumferenceOfCircle(radius));

// Write a function named getAreaOfSquare. 
// It takes a side parameter. It calculates and 
// returns the area of a square with that side length.

let side = 5;

function getAreaOfSquare(side){
    return (side * side);
}

console.log(getAreaOfSquare(side));

// Write a function named getAreaOfTriangle. 
// It takes two parameters: base and height. 
// It calculates and returns the area of a triangle 
// with that base and height.

let base = 7;
let height = 13;

function getAreaOfTriangle(base, height){
    return (0.5 * base * height);
}

console.log(getAreaOfTriangle(base, height));
