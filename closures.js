// ////////// PROBLEM 1 //////////
// function outer() {
//   var name = 'Tyler';
//   return function() {
//     return 'The original name was ' + name;
//   };
// }  
// var inner = outer();
// inner;
// ////////// PROBLEM 2 //////////
// function callFriend(name) {
//   function dial(number) {
//     return 'Calling ' + name + ' at ' + number
//   }
//   return dial;
// }
// var callJake = callFriend("Jake", (435-555-9248));
// ////////// PROBLEM 3 //////////
// /*
//   Write a function called makeCounter that makes the following code work properly.
// */
// function makeCounter(){
// return function count(){
// count()++}};
// var count = makeCounter();
// count(); 
// count(); 
// count(); 
// count(); 
// console.log(count());
////////// PROBLEM 4 //////////
/*
  Inside the function called counterFactory return two functions that implement up/down counter.
  The first function is called inc, this function is responsible for incrementing the value once and returning the updated value.
  The second function is called dec, this function is responsible for decrementing the value by one and returning the updated value.
  You will need to use the module pattern to achieve this.
  Information on the module pattern available here: 
  http://stackoverflow.com/questions/17776940/javascript-module-pattern-with-example?answertab=votes#tab-top
*/

function counterFactory(value) {
  return {
  inc(){
  return ++value
  },
  dec(){
  return --value
      }
  }
}

counter = counterFactory(10);
 counter.inc()
 counter.inc()
 counter.inc()
 counter.dec()

// ////////// PROBLEM 5 //////////
function motivation( firstname, lastname ) {

  var welcomeText = "You're doing awesome, keep it up";

  function message(){
  return  welcomeText + " "  + firstname + " " + lastname + ".";
    } return message();
  }
var greeting = motivation('Billy', 'Bob'); // 'You're doing awesome keep it up Billy Bob.
console.log(greeting);
////////// PROBLEM 6 //////////

var module = (function() {
  var person = {
    name: "phillip",
    age: 29,
    location: "Utah"
  };

  function privateMethod(){
    return "Hi, I'm " + person.name + ", age " + person.age + " from " + person.location;
  }
 return{ 
    publicMethod(){
    return privateMethod();}
}})();

module.publicMethod();
////////// PROBLEM 7 //////////
function secretNumber() {
  var secret = 143;
  return {
    addToSecret(addnum){
      return secret += addnum
    },
    takeAwayFromSecret(subnum){
      return secret -= subnum
    }}}

console.log(secretNumber().addToSecret(150))

////////// PROBLEM 8 //////////
  
/*
  Here we have a for loop that will iterate as long as i is less than or equal to 5.
  What we need to do is console.log(i) so that it logs like so:
    0 second after call - log 0
    1 seconds after call - log 1
    2 seconds after call - log 2
    3 seconds after call - log 3
    4 seconds after call - log 4
    5 seconds after call - log 5

  However, because each call to console.log occurs after the loop has finished, the value of i has changed before the console.log executes.
  We'll need to use a closure to preserve a reference to i at the time of execution.
  
  Fix the code below to log the desired output.
*/

function timeOutCounter() {
  for (var i = 0; i <= 5; i++) {
    setTimeout(function() {
      console.log(i);
    }, i * 1000);
  }
}
timeOutCounter();
