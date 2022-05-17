const xxx = (x, y) => x * y;
const xx = (x, y) => { return x * y };

// Create Objects
const apples = {name: 'Apples'};
// Create a new Map
const fruits = new Map();
// Add new Elements to the Map
fruits.set(apples, 500);

class Car {
    constructor(brand) {
        this._carname = brand;
    }
    get carname() {
        return this._carname;
    }
    set carname(x) {
        this._carname = x;
    }
    present() {
        return 'I have a ' + this.carname;
    }
    static hello() {
        return "Hello!!";
    }
}

class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model;
    }
}

let myCar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = myCar.show();
