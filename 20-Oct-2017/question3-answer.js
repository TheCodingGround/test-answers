// 3. Write a function named numbers that returns true if all the parameters it is passed are of the Number type. Otherwise, the function should return false. The function should accept any number of parameters.

//   Example usage:

// numbers(1, 4, 3, 2, 5); // true

// numbers(1, "a", 3); // false

// numbers(1, 3, NaN); // true

//1 write a function named numbers


//there can be any number of arguments passed in, and that is why we use the javascript variable called arguments instead of defining them in the function declaration


//using for loop
function numbers(){
  var argumentsArray = Array.from(arguments);
  for (var argument of argumentsArray){
    if (typeof argument != 'number'){
      return false;
    }
  }
  return true;
}

//using reduce
//I prefer this one, although not sure how easy to understand it is and if I am unsure, I would rather go for a more understandable version.

// function numbers(){
//   return Array
//     .from(arguments)
//     .reduce((seed,inc) => typeof inc == 'number' && seed, true);
// }

//using filter with length check
// function numbers(){
//   var args = Array.from(arguments);
//   var numbersInArray = args.filter(val => typeof val == 'number').length;
//   return numbersInArray == args.length;
// }

// //using filter with length check, Mark version
// function numbers(){
//   var removeNotNum = function(val){
//     return typeof val == 'number';
//   };

//   var args = Array.from(arguments);
//   var filtered = args.filter(removeNotNum);
//   if (args.length != filtered.length){
//     return false;
//   }else{
//     return true;
//   }
// }

// true
console.log(numbers(10,110,0.2, 50));
console.log(numbers(0.1, 0.1));
console.log(numbers(1, 4, 3, 2, 5) );
console.log(numbers(1, 3, NaN));


//false
console.log(numbers(true, 4, 3, 2, 5) );
console.log(numbers(1, "a", "b", 1));
console.log(numbers("a", "b", 1));
console.log(numbers(1, "a", 3) );
console.log(numbers([1,2,3]));
