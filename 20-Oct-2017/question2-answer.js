// 2. Correct this code, so that the greet function returns the expected value.

//   function Person(name){ this.name = name; }

// Person.prototype.greet = function(otherName){ return "Hi " + otherName + ", my name is " + name; }


function Person(name){ this.name = name; }

Person.prototype.greet = function(otherName){ return "Hi " + otherName + ", my name is " + this.name; }


var theo = new Person("Theo");
var sabelo = new Person("Sabelo");

console.log("theo", theo);
console.log("theo is of type", typeof theo);

console.log(theo.greet("Mary"));
console.log(sabelo.greet("Mercy"));
