// Main Odoo Class
const Car = Class.extend({
    speed: 0,
    accelerate() {
        this.speed += 5;
        console.log('accelerating... Current speed: ' + this.speed);
    },
    stop() {
        this.speed = 0;
        console.log('stopped');
    },
});

// First Class extended
const car = new Car();
car.accelerate();
car.stop();

// Second Class extended
const FancyCar = Car.extend({
    honk() {
        console.log('honk honk')
    },
    accelerate() {
        console.log('vroom');
        this._super();
    },
});
const myCar = new FancyCar();
myCar.honk();

// Third Class extended
const ColoredCar = FancyCar.extend({
    init(color) {
        this.color = color;
        console.log('creating a ' + color + ' car');
    }
});
const redCar = new ColoredCar('red');