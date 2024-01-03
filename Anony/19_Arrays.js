/*
El siguiente es una muestra de codigo que se usa en entrevistas de empresas:

// Functions in JavaScript
// Q2 - What is Function Expression ?

const  square = function (num) {
  return num * num;
};
console.log(square(5)); // 25

// Q3 - What are First Class Functions ?
function displaySquare(fn) {
  console.log("Square is " + fn(5));
}
displaySquare(square); // 25

// Q4 - What is IIFE ? 
(function (x){
  return (function (y){
    console.log( x); //1
  })(5);
})(1)

// Q8 - Function Hoisting

//functionName()
function functionName() {
  console.log(x);
  var x = 5;

  console.log("Roadside coder");
}

functionName()

// Q10 - Params vs Arguments
function multiply(...nums){
  console.log(nums[0] * nums[1]);
}
var arr = [5,6];
multiply(...arr);

// Clousures in JavaScript
// Clousures scope chain

function makeFunc() {
  var name = "Mozilla";
  function displayName(num) {
    console.log(name, num);
  }
  return displayName;
}
makeFunc()(5);// Asi hace que se ejecuta la funcion dentro de makeFunc

// Q2: Write a function that would allow you to do this

function createBase(num) {
  return function(innerNum){
    console.log(innerNum + num);
  };
}
var addSix = createBase(6); // Creamos  un alcance local
addSix(10); // innerNum
addSix(21);

// Q6 - What is Module Pattern

var Module = (function () {
  function privateMethod() {
    // do something
    console.log('private');
  }
  // Por ejemplo para el llamada de apis
  return {
    publicMethod: function () {
      // can call privateMethod
      console.log('public');
    },
  };
})();

Module.publicMethod()
//Module.privateMethod()

//Q7 - Make this run only once
let view = 0;
function likeTheVideo(){
  let called = 0;
  return function () {
    if(called > 0){
      console.log('Already suscribed to Roadsider coder');
    } else {
      view = "Roadside coder"
      console.log("Suscribe to ", view);
      called++;
    }
  }
};

let isSubscribed = likeTheVideo()
isSubscribed()
isSubscribed()
isSubscribed()

function ver(callback){
  if(callback){
    console.log("es positivo");
  }else {
    console.log("Es negativo");
  }
}

ver(callback)

function callback(){
  console.log("Callback"); 
}

//Curryng in javascript
// Q1 - Sum(2)(6)(1)

function sum(a){
  return function(b){
    return function(c){
      return a + b + c;
    }
  }
}

console.log(sum(2)(6)(1));

// Q5 - Infinite Currying
function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log(add(5)(2)(4)(8)());

// Q4 - Currying vs Partial Application
function suma(a) {
  return function (b, c){
    return a + b + c;
  };
}

const x = suma(10);
console.log(x(5,6));
console.log(x(3,2));
//or
console.log(suma(20)(1,2));
*/
