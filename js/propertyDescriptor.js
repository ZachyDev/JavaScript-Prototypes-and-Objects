'use strict';
const car = {
    "brand": "Toyota",
    "model": "Range",
    output(){
        return Object.getOwnPropertyDescriptor(car,"brand");
    }
}
console.log(car.output())