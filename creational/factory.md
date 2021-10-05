# Overview

Sometimes a class is built not knowing exactly what object or objects will be instantiated from it, also depending on the object there may be different arguments that need to be passed in on instantiation. The `Factory Method` can be used within a creator class to create different types of objects of a similar type and the `Abstract Factory` can be used in a similar way but to create families of related objects.

For both of the below examples we will use the same `creator class` => **Car**:

```js
class Car {
    constructor(model, doors, engine, color) {
        this.model = model;
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}
```

To use the above creator class we will first look at classes with a single `Factory Method`:

# Factory Method

```js
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
// -------------------------------
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
```

Create a factory and use it to create a car:

```js
const factory = new SportsCarFactory();
const toyotaGT86 = factory.createCar("GT86");
```

# Abstract Factory

We can create a function `autoFactory()` that combines the two above classes extracting the logic but able to create any one of the 6 vehicle objects:

```js
const autoFactory = (type, model) => {
    if (type === "sports") {
        const sportsCarFactory = new SportsCarFactory();
        return sportsCarFactory.createCar(model);
    }

    if (type === "suv") {
        const suvFactory = new SuvFactory();
        return suvFactory.createCar(model);
    }
};

const seatAteca = autoFactory("suv", "Ateca");

console.log(seatAteca);
```
