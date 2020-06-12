const car = {
    name: 'range',
    msg: function() {
        return `Buy this ${ this.name }`
    }
}
console.log(car.msg());