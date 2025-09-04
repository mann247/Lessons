//Nia Manning
//8-3-2025
//General Inquiry Week 8


//Easy **
function exerciseOfTheDayUpdate(){
    let currentExercise = " ";

    function updateDisplay(exerciseName){
        currentExercise = exerciseName;
        console.log(`Today's exercise: ${currentExercise}`);
    }
    return updateDisplay;
}
const setExerciseOfTheDay = exerciseOfTheDayUpdate();
setExerciseOfTheDay("Running");
setExerciseOfTheDay("Swimming");
setExerciseOfTheDay("Dancing");
setExerciseOfTheDay("Fencing");


//Medium **edge case: a rare input that comes up ( example: < 0).
function pizzaSlices(slices, people){
    if (people <= 0){
        alert("Number of people must be greater than zero.");
    }else {
        const slicesPerPerson = slices / people;
    return `Each person gets ${slicesPerPerson.toFixed(2)} slices of pizza; from our ${slices} slice pizza.`
    }

}
console.log(pizzaSlices(8,2));
console.log(pizzaSlices(21,20));
//console.log(pizzaSlices(4,0));



//Hard
function createPII(name, ssn) {
  // Private variables, accessible only within the closure
  const pii = {
    name: name,
    ssn: ssn
  };

  // Public function to access the name
  return {
    getName: function() {
      return pii.name;
    }
  };
}

// Create an instance of the PII object
const sensitiveData = createPII("Jane Doe", "123-45-678");

// Access the name through the public function
console.log(sensitiveData.getName()); // Output: Jane Doe

// Attempting to directly access the SSN will result in undefined or an error
console.log(sensitiveData.ssn); // Output: undefined
// console.log(sensitiveData.pii.ssn); // Output: Error: Cannot read properties of undefined (reading 'ssn')
console.log(sensitiveData.name);


//Very Hard**
class Person {
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }

    exercise() {
        console.log("Running is fun! - said no one ever");
    }

    fetchJob() {
        console.log(`${this.name} is a ${this.job}`);
    }
}

class Programmer extends Person {
    constructor(name, job, age, languages) {
        super(name, job, age); // Call the parent constructor
        this.languages = languages;
        this.busy = true; // Default to busy
    }

    completeTask() {
        this.busy = false; // Updates the busy property
    }

    acceptTask() {
        this.busy = true; // Updates the busy property
    }

    offerTask() {
        if (this.busy) {
            console.log(`${this.name} can't accept any new tasks right now.`);
        } else {
            console.log(`${this.name} would love to take on a new responsibility.`);
        }
    }

    learnLanguage(newLanguage) {
        this.languages.push(newLanguage);
    }

    listLanguages() {
        console.log(`${this.name} knows the following languages: ${this.languages.join(', ')}.`);
    }
}
// Create Person instances
const person1 = new Person("Alice", "Designer", 30);
const person2 = new Person("Bob", "Marketing Manager", 45);

// Create Programmer instances
const programmer1 = new Programmer("Charlie", "Full Stack Developer", 28, ["JavaScript", "Python"]);
const programmer2 = new Programmer("Diana", "Mobile App Developer", 32, ["Swift", "Kotlin"]);

// Test Person methods
person1.exercise(); // Output: Running is fun! - said no one ever
person1.fetchJob(); // Output: Alice is a Designer

person2.exercise(); // Output: Running is fun! - said no one ever
person2.fetchJob(); // Output: Bob is a Marketing Manager

// Test Programmer methods
console.log(programmer1.busy); // Output: true
programmer1.offerTask(); // Output: Charlie can't accept any new tasks right now.
programmer1.completeTask();
console.log(programmer1.busy); // Output: false
programmer1.offerTask(); // Output: Charlie would love to take on a new responsibility.
programmer1.acceptTask();
console.log(programmer1.busy); // Output: true

programmer1.listLanguages(); // Output: Charlie knows the following languages: JavaScript, Python.
programmer1.learnLanguage("Go");
programmer1.listLanguages(); // Output: Charlie knows the following languages: JavaScript, Python, Go.

programmer2.fetchJob(); // Inherited from Person - Output: Diana is a Mobile App Developer
programmer2.listLanguages(); // Output: Diana knows the following languages: Swift, Kotlin.

// Each programmer maintains their own properties independently
console.log(programmer1.name); // Output: Charlie
console.log(programmer2.name); // Output: Diana
