class Car {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.currentSpeed = 0;
    }

    drive() {
        this.currentSpeed+= 30;
        console.log(`driving at speed ${this.currentSpeed} kmph`);
    }

    stop() {
        this.currentSpeed = 0;
        console.log(`car stopped and current speed is ${this.currentSpeed}`);
    }
}

const bmw = new Car('x5', 'White');
console.log(`My car's name is ${bmw.name}. It is ${bmw.color} in color.`);
bmw.drive();
bmw.stop();

// PROTOTYPE OF A CLASS

// making our custom method in Array class
Array.prototype.myPush = function(item) {
    // this = array
    this[3] = item;
    return this;
}

const fruits = ['apple', 'banana', 'strawberry'];
console.log(fruits.myPush('mango')); 

// 10:50:12