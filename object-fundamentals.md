# Object Fundamentals

The below shows some nice patterns when working with Factory functions then Constructor functions and finally the progression onto Classes.

# Immutable Factory Function

Using ES6 syntax here is a basic pattern to create objects where their properties are immutable unless when using the interface methods:

The below example shows an `items` array that is initially frozen, then each method within the new object creates a new and immutable object before reassigning this object as the new value of the `items` property.

```js
const createCart = (items = []) => ({
    items: Object.freeze(items),
    add(item) {
        const state = [...this.items, item];
        this.items = Object.freeze(state);
    },
    remove(id) {
        const state = this.items.filter((item) => item.id !== id);
        this.items = Object.freeze(state);
    },
});
```

Moving on from Factory functions to Constructor functions we can now pull methods out of each new instance of the object and add them to the `prototype`, sharing the code with all new instances instead of copying the code on each new object created.

# Constructor Function

```js
const Cart = (items = []) => {

    this.items = Object.freeze(items),
};
```

In order to use the `this` keyword outside of the constructor we change the arrow functions into anonymous functions. We can still use arrow functions within:

```js
Cart.prototype.add = function (item) {
    const state = [...this.items, item];
    this.items = Object.freeze(state);
};

Cart.prototype.remove = function (id) {
    const state = this.items.filter((item) => item.id !== id);
    this.items = Object.freeze(state);
};
```

We can then use the `new` keyword to create a new instance of the object and then access its prototypes as below:

```js
const cart = new Cart();

cart.add(newItem);
```

# Classes

The evolution from Constructors to Classes allows us to create prototypes within the class itself providing a cleaner way to keep methods and properties together.
Another major change is that by using the `#` prefix to properties we can make them private.
The below example also uses `get` and `set` syntax for read and write methods which allows for `Object.freeze` to be used here as data is passed in and out

```js
class Cart = {
    // Properties go here
    #items;

    // Data to initialize the object is passed in through the constructor
    constructor(items = []){
        this.value = items;
    }
    // Prototype methods go here

    // get method directly accessed
    get value(){
        return Object.freeze(this.#items); // Freeze the object on the way out
    }
    // set method only accessed by the add/remove methods below
    set value(items){
        this.#items = Object.freeze(items); // Freeze object on the way in and set the value of #items
    }
    // ==============================================================
    add(item) {
        this.value = [...this.#items, item]; // Invokes the `set value` method
    }

    remove(id) {
        this.value = this.#items.filter((item) => item.id !== id); // Invokes the `set value` method
    }
}


const cart = new Cart(items);

cart.value;

cart.add(item);

cart.remove(id);
```

Here is the class pattern above without the comments:

```js
class Cart = {
    #items;
    constructor(items = []){
        this.value = items;
    }
    // ===================================
    set value(items){
        this.#items = Object.freeze(items);
    }
    get value(){
        return Object.freeze(this.#items);
    }
    // ====================================
    add(item) {
        this.value = [...this.#items, item];
    }
    remove(id) {
        this.value = this.#items.filter((item) => item.id !== id);
    }
}

```

# Extending Classes

**Base Class**:

```js
class Product {
    id;
    name;
    price;
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    get displayName() {
        return `${this.id} ${this.name}`;
    }
}
```

**New Derived Class from Base Class**:

```js
class Drink extends Product {
    size;
    constructor(id, name, price, size) {
        super(id, name, price);
        this.size = size;
    }
    get displayName() {
        return `${this.id} ${this.name}`;
    }
}
```

**Create new drink**:

```js
const smallDrink = new Drink("1", "orange", 100, "small");
```
