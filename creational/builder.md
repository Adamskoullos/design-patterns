# Builder Pattern

In the example below the builders will be used to build a `user` object from multiple classes.

The classes used for the example:

```js
class User {
    name;
    email;
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class Address {
    number;
    street;
    town;
    constructor(number, street, town) {
        this.number = number;
        this.street = street;
        this.town = town;
    }
}
```

A `user` is to be built up from the address class above as well as the mandatory arguments passed into the User class. At the point of build further optional items can be added as the user is built. Below are the two patterns to do this:

## Traditional Builder Pattern

```js
class userBuilder {
    user;
    constructor(name, email) {
        this.user = new User(name, email);
    }
    build() {
        return this.user;
    }
    setAge(age) {
        this.user.age = age;
        return this;
    }
    setAddress(address) {
        this.user.address = address;
        return this;
    }
    setPhone(phone) {
        this.user.phone = phone;
        return this;
    }
}

const user = new userBuilder("Ben", "ben@gmail.com")
    .setAge(10)
    .setAddress(new Address(50, "Oxford", "London"))
    .setPhone(1234567890)
    .build();

console.log(user);
```

## Modern Pattern

The below example builds a `user` directly from the `ModernUser` class which in this case acts as a builder class itself, meaning we do not need a separate builder class.
The first arguments are the mandatory fields and the last argument is the `options` object.

```js
class ModernUser {
    name;
    email;
    constructor(name, email, { age, phone, address } = {}) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }
}

const modernUser = new ModernUser("Dave", "dave@gmail.com", {
    age: 20,
    phone: 0987654321,
    address: new Address(100, "Regent", "London"),
});

console.log(modernUser);
```
