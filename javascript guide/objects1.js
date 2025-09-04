//document.body.innerHTML = "sus";


//Encapsulation
class Animal{ //classes are always capital
    constructor(name, species){
        this.name = name;
        this.species = species;
    }
    eat(){
        console.log(`${this.name} is eating.`);
    }
}

const lion = new Animal("Simba", "Lion");
lion.eat();
console.log("Here is the lion", lion);

//Inheritance
class Bird extends Animal{
    fly(){
        console.log(`${this.name} is flying`);
    }
}
const eagle = new Bird('Ringo', 'Eagle');
eagle.fly();
eagle.eat();

//Polymorphism : same interface but different implementation
class Animal{
    constructor(name){
        this.name = name;
    }
    makeSound(){
        console.log("hahaha");
    }
}

class Dog extends Animal{
    makeSound(){
        console.log("bark bark bark");
    };
}

class Cat extends Animal{
    makeSound(){
        console.log("meow.");
    }
}

const animals = [new Dog("Buddy"), new Cat("Whiskers")]; //instantiate a new object
animals.forEach((animals) => {
    animals.makeSound();
});
