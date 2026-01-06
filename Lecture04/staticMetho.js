class Dog {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log(`Woof! My name is ${this.name}.`);
    }

    static bark() {
        console.log("Woof! Woof!");
    }
}

const dog1 = new Dog("Buddy");
dog1.introduce();
Dog.bark();