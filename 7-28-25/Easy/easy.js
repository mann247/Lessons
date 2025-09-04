//Nia Manning
//8-3-2025
//General Inquiry Week 8

//Easy
function exerciseOfTheDay(){
    return function(exerciseName){
        return `Today's exercise: ${exerciseName}`;
    };
}
const exercise = exerciseOfTheDay();

console.log(exercise("Running"));
console.log(exercise("Swimming"));
console.log(exercise("Dancing"));
console.log(exercise("Fencing"));



//closure template
for (var i =0; i < 3; i++){
    const log = () => {
        console.log(i);
    }
    setTimeout(log,100);
}



//Medium
function sharePizza(slices, people){
    const slicesPerPerson = (slices / people).toFixed(2);
    return `Each person gets ${slicesPerPerson} slices of pizza; from our ${slices} slice pizza`;
}
console.log(sharePizza(8,2));
console.log(sharePizza(21,20));




//Hard **
function createPii(){
    return (function(){

        const privateName = name;
        const privateSSN = ssn;
        return{
            getName(){
                return privateName;
            },
            getSSN(){
                return privateSSN;
            },
        };
    })();
}
const patient2 = createPii("Jenine", "123-45-6789");
console.log(patient2.name);
console.log(patient2.ssn);
console.log(patient2.getName());
console.log(patient2.getSSN());





//Very Hard**
class Person{
    constructor(name, job, age){
        this.name = name;
        this.job = job;
        this.age = age;
    }
    exercise(){
        console.log("Running is fun!")
    };
    fetchJob(){
        console.log(`${this.name} is a ${this.job}`)
    };

}
class Programmer extends Person{ 
    constructor(languages){
        this.languages = language;
    }

}



Person.prototype.exercise = function(){
    console.log("Running is fun! - said no one ever.");
};
Person.prototype.fetchJob = function(){
    console.log(`${this.name} is a ${this.job}`);
};


Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.constructor = Programmer;

Programmer.prototype.completeTask = function(){
    this.busy = false;
}
Programmer.prototype.acceptNewTask = function(){
    this.busy = true;
}

Programmer.prototype.offerNewTask = function(){
    if (this.busy) {
        console.log(`${this.name} can't accept any new tasks right now.`);
    } else {
        console.lof(`${this.name} would love to take on a new responsibility.`)
    }
};

Programmer.prototype.learnLanguage = function(language){
    this.languages.push(language);
}
Programmer.prototype.listLanguage = function(){
    console.log(`${this.name} know: ${this.languages.join(', ')}`);
}

const person1 = new Person("Harold", "Backend Engineer", 20);
const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS”, ”Ruby"]);
const c3 = new Programmer("Manny", "SysOps", 31,[("HTML", "CSS", "JS", "R")]);
c1.learnLanguage("CSS");
c2.learnLanguage("C++");
c3.learnLanguage("JAVA");
console.log(c1.listLanguage());
console.log(c2.listLanguage());
console.log(c3.listLanguage());
console.log(person1);
console.log(c1);
console.log(c2);
console.log(c3);
person1.exercise();
person1.fetchJob();

