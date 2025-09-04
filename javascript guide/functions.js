//named function

function add(a,b){
    return a+b;
}
add(10,10);
console.log(add)

//function expression
const multiply = function(a,b){
    return a*b;
}
multiply(10,10)

//Arrow functions
const divide = (a, b) => {
    return a/b;
}
divide(10,10)

//immediately invoked
(function(){
    console.log("This is an IIFE");
})();


