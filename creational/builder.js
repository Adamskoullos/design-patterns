// Set up classes >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
class User{
    name;
    email;
    constructor(name, email){
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
// Traditional Builder Pattern >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
class UserBuilder {
    user;
    email;
    constructor(name, email){
        this.user = new User(name, email);
    }
    build(){
        return this.user;
    }
    setAge(age){
        this.user.age = age;
        return this;
    }
    setAddress(address){
        this.user.address = address;
        return this;
    }
    setPhone(phone){
        this.user.phone = phone;
        return this;
    }
}

const user = new UserBuilder('Ben', 'ben@gmail.com')
.setAge(10)
.setAddress(new Address(50, 'Oxford', 'London'))
.setPhone(1234567890)
.build();

console.log(user);

// Modern Take on the Builder Pattern >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

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