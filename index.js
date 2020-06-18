// declare an object that's a small car and has an engine size
// attribute and value

let smallCar = {
    engineSize: 8
};

let rating = 0;

// provide a rating of 5 for eng size 8

switch (smallCar.engineSize) {
    case 1:
    case 2:
    case 3:
    case 4:
        rating = 7;
        break;
    case 8:
        rating = 5;
        break;
    default:
}

console.log({ rating });