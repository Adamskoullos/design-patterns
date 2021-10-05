// Creator class

class Car {
    constructor(model, doors, engine, color){
        this.model = model;
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Classes with Single Factory Methods

class SportsCarFactory {
    createCar(model) {
        if (model === "Supra") {
            return new Car(model, 2, "3L", "white");
        }
        if (model === "GT86") {
            return new Car(model, 2, "2L", "black");
        }
        if (model === "RX7") {
            return new Car(model, 2, "1.2L", "red");
        }
    }
}

const sportsCarFactory = new SportsCarFactory();
const toyotaGT86 = sportsCarFactory.createCar("GT86");

console.log(toyotaGT86);

// ----------------------------------------

class SuvFactory {
    createCar(model) {
        if (model === "X5") {
            return new Car(model, 5, "3L", "white");
        }
        if (model === "Tiguan") {
            return new Car(model, 5, "2L", "black");
        }
        if (model === "Ateca") {
            return new Car(model, 5, "1.4L", "red");
        }
    }
}

const suvFactory = new SuvFactory();
const bmwX5 = suvFactory.createCar("X5");

console.log(bmwX5);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Abstract Factory

const autoFactory = (type, model) => {

    if(type === 'sports'){
        const sportsCarFactory = new SportsCarFactory();
        return sportsCarFactory.createCar(model);
    }

    if(type === 'suv'){
        const suvFactory = new SuvFactory();
        return suvFactory.createCar(model);
    }
}

const seatAteca = autoFactory('suv', 'Ateca');

console.log(seatAteca);