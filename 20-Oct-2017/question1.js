// 1. Find the last element of a list.

//   Example:

// last( [1,2,3,4] ) // => 4

// last( "xyz" ) // => z

// last( 1,2,3,4 ) // => 4


//1. create a function called last (parameters?)

//2. find and return the last element of an array

//3. If it is a string, find the last character in the string and return it

//4. If there are multiple arguments, return the last argument passed in.


function findLastElement(arr) {
  var argumentsList = Array.from(arguments);

  if(arr.length != undefined  && argumentsList.length == 1){
    return arr[arr.length - 1];
  }
  else{
    return argumentsList[argumentsList.length - 1];
  }
}

console.log(findLastElement(1, 2, 3, 4));
console.log(findLastElement([1, 2, 3, 4]));
console.log(findLastElement("xyz"));
console.log(findLastElement(1));
console.log(findLastElement("a"));
console.log(findLastElement("a", "b"));



// function last(inputList){
//   var argumentsArray = Array.from(arguments);

//   var lengthOfArgumentsArray = argumentsArray.length;

//   if (lengthOfArgumentsArray === 1){
//     return argumentsArray[lengthOfArgumentsArray - 1];
//   }

//   return inputList[inputList.length - 1];
// }

// var firstResult = last( [1,2,3,4] );
// console.log("First Example", firstResult);

// var secondResult = last( "xyz" );
// console.log("Second Example", secondResult);

// var thirdResult = last(1,2,3,4);
// console.log("Third Example", thirdResult);
