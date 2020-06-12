'use strict';
const car = {
    "brand": { "v1": "toyota2","v2":'premio'},
    "model": "Range",
    output(){
        return Object.getOwnPropertyDescriptor(car,"brand");
    }
}
Object.defineProperty(car,"brand",{ writable: false })
Object.freeze(car.brand)
car.brand.v1 = "isuzu" ;
console.log(car.brand)
console.log(car.output())