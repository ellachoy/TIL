console.log('about:JS')
// wer ist Js? : script sprache basiert object./ interpreter sprache mit No type(bedeutet, don´t need compile process wie bei C )

// was kann JS?: 1. HTML-inhalt ändern (zb.document.getElementById("demo").innerHTML = "Hello JavaScript";)
//               2.HTML-Attributwerte ändern(zb.Wert des src(source)-Attributs eines <img>Tags:)
//               3.HTML-style ändern (CSS)(zb.document.getElementById("demo").style.fontSize = "35px";)

// besonderheit JS: camelCase, underscore_case,***keyword : var firstVar = 10;// var schlüsselwort/keyword zum variable declarieren  var  myFirstFunc {  // function ist keyword zum variable declarieren

// was beinhaltet JS?  

// 1.variable: Variablen sind Container zum Speichern von Daten (Werten). ->> wie excel zeile***
// var variable name;
// var variable name = Wert zuzuweisen;
// var sum; // variable  sum declarieren.-> undifined
// var a = 3; // variable  a declarieren. 3zuweisen
// var b, c, d;
// var e = 1,
//     f = 2,
//     g = 3; // mehrere variable declarieren.

// 2. operation :+, -, *, /, % ,   ++, --
// a = a + 1 (x),  a += 1 (o)

// 3.comparison operator==b,a!=b,a==b && a==c, a==b || a==c, a > b(a ist grösser als b)

// 4.Funktion 
// 1-1. funktion deklarieren. 
function notify(message) {
    console.log(message);
}
notify('say something');
// 1-2.
let notify2= function(message) {
    console.log(message);
}
notify2('say something');
// 1-3. arrow
// let notify3=()=>{
//     console.log(message);
// }
// notify3('say something');

// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello() {
    console.log('Hello');
  }
  printHello(); // nur für 'Hello' aufzurufen

  // mit parameter
  function log(message) {
    console.log(message);
  }
  log('Hello@');
  log(1234);
  
  // 2. Parameters
  // primitive parameters: passed by value
  // object parameters: passed by reference
  function createGreetingMessage(name){
    const message='Hallo,${name}';
    return message;
  }
  const greetingMessage=createGreetingMessage('chris');
  console.log(greetingMessage);

  function changeName(object) { //passed object
    object.name = 'coder';
  }
  const ellie = { name: 'ellie' };
  changeName(ellie);
  console.log(ellie);
  
  // 3. Default parameters (added in ES6)
  function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
  }
  showMessage('Hi!');
  
  // 4. Rest parameters (added in ES6)
  function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
      console.log(args[i]);
    }
  
    for (const arg of args) {
      console.log(arg);
    }
  
    args.forEach((arg) => console.log(arg));
  }
  printAll('dream', 'coding', 'ellie');
  
  // 5. Local scope
  let globalMessage = 'global'; // global variable
  function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother() {
      console.log(message);
      let childMessage = 'hello';
    }
    // console.log(childMessage); //error
  }
  printMessage();
  
  // 6. Return a value
  function sum(a, b) {
    return a + b;
  }
  const result = sum(1, 2); // 3
  console.log(`sum: ${sum(1, 2)}`);
  
  // 7. Early return, early exit
  // bad
  function upgradeUser(user) {
    if (user.point > 10) {
      // long upgrade logic...
    }
  }
  
  // good
  function upgradeUser(user) {
    if (user.point <= 10) {
      return;
    }
    // long upgrade logic...
  }
  
  // First-class function
  // functions are treated like any other variable
  // can be assigned as a value to variable
  // can be passed as an argument to other functions.
  // can be returned by another function
  
  // 1. Function expression
  // a function declaration can be called earlier than it is defined. (hoisted)
  // a function expression is created when the execution reaches it.
  const print = function () {
    // anonymous function
    console.log('print');
  };
  print();
  const printAgain = print;
  printAgain();
  const sumAgain = sum;
  console.log(sumAgain(1, 3));
  
  // 2. Callback function using function expression
  function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
      printYes();
    } else {
      printNo();
    }
  }
  // anonymous function
  const printYes = function () {
    console.log('yes!');
  };
  
  // named function
  // better debugging in debugger's stack traces
  // recursions
  const printNo = function print() {
    console.log('no!');
  };
  randomQuiz('wrong', printYes, printNo);
  randomQuiz('love you', printYes, printNo);
  
  // Arrow function
  // always anonymous
  // const simplePrint = function () {
  //   console.log('simplePrint!');
  // };
  
  const simplePrint = () => console.log('simplePrint!');
  
  const add = (a, b) => a + b;
  const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
  };
  
  // IIFE: Immediately Invoked Function Expression
  (function hello() {
    console.log('IIFE');
  })();
  
  // Fun quiz time❤️
  // function calculate(command, a, b)
  // command: add, substract, divide, multiply, remainder
  
  function calculate(command, a, b) {
    switch (command) {
      case 'add':
        return a + b;
      case 'substract':
        return a - b;
      case 'divide':
        return a / b;
      case 'multiply':
        return a * b;
      case 'remainder':
        return a % b;
      default:
        throw Error('unknown command');
    }
  }
  console.log(calculate('add', 2, 3));