////////// PROBLEM 1 //////////
function CarFactory(make, model)
{
  return {make,model}
}
////////// PROBLEM 2 //////////
function Employee(name, email, hireDate) {
  this.name = name;
  this.email = email;
  this.hireDate = hireDate;
}
var bob = new Employee('Bob','bob@gmail.com','01-02-98')
////////// PROBLEM 4 //////////
var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);
prius.moveCar(); // Increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); // Increments mustang' move property by 10. Returns the new move property.
// Do not edit the code above.
let move = 0;
function Car()
{return {
    moveCar()
  {return move += 10;}
  }
}

