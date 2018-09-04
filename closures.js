////////// PROBLEM 1 //////////
function outer() {
  var name = 'Tyler';
  return function() {
    return 'The original name was ' + name;
  };
}  
var inner = outer();
inner;
////////// PROBLEM 2 //////////
function callFriend(name) {
  function dial(number) {
    return 'Calling ' + name + ' at ' + number
  }
  return dial;
}
var callJake = callFriend("Jake", (435-555-9248));
////////// PROBLEM 3 //////////
function makeCounter(){
return function count(){
count()++}};
var count = makeCounter();
count(); 
count(); 
count(); 
count(); 
console.log(count());
////////// PROBLEM 4 //////////
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
/////////// PROBLEM 5 //////////
function motivation( firstname, lastname ) {

  var welcomeText = "You're doing awesome, keep it up";

  function message(){
  return  welcomeText + " "  + firstname + " " + lastname + ".";
    } return message();
  }
var greeting = motivation('Billy', 'Bob'); console.log(greeting);
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
    return privateMethod();}}})();
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
function timeOutCounter() {
  for (var i = 0; i <= 5; i++) {
  setTimeout (function() {
    function thing (){
      console.log(i);}
    }, i * 1000);
  }
}
timeOutCounter();