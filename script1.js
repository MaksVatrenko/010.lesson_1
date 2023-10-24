class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Apartment {
    constructor() {
        this.residents = []
    }

    addResident(person) {
        this.residents.push(person);
    }
}

class House {
    constructor(maxApartments) {
        this.apartments = [];
        this.maxApartments = maxApartments;
    }

    addApartment(apartment) {
        if (this.apartments.length < this.maxApartments) {
            this.apartments.push(apartment);
        } else {
            console.log("House is full");
        }
    }
}

let person1 = new Person('John', 20)
let person2 = new Person('Ben', 18)
let person3 = new Person('Peter', 50)

let apartment1 = new Apartment()
let apartment2 = new Apartment()
let apartment3 = new Apartment()

apartment1.addResident(person1)
apartment2.addResident(person2)
apartment3.addResident(person3)

let house = new House(4)

house.addApartment(apartment1)
house.addApartment(apartment2)
house.addApartment(apartment3)

console.log(house)