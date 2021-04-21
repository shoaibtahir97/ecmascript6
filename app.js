/*
TEMPLATE LITERALS
In vanilla JS we used '+' sign to concatenate variables.
In ES6 we have template literals to concatenate variables. 
They are created using backticks(``) and $ sign followed by curly braces and inside of it we place variable name
*/ 

let firstName = "Shoaib";
let lastName = "Tahir";

console.log(`${firstName} ${lastName} `)


/*
OBJECT/ARRAY DESTRUCTURING
You can destructure an object and get the values using the keys.
You can also destructure an array by the same method instead of curly brackets use square brackets.
Each variable that you use in array destructure refers to the index of array.
*/ 

//OBJECT DESTRUCTURING
let student = {
    name: "Shoaib",
    no: 122,
    year: "final",
}

let {name, no, year} = student;

console.log(name);

//ARRAY DESTRUCTURING
let arr = ["Shoaib", "Ramsha"];

let [name1, name2] = arr;

console.log(name1);

/*
SPREAD OPERATOR
It consist of three dots followed by variable/array name. Basically
it copies the data stored inside these varaibles/arrays. You can use it
in other variables or function
*/ 

let arr1 = [1, 2, 3];

let arr2 = [4, 5, 6];

let sum = [...arr1, ...arr2, 7, 8, 9];

console.log(sum);


/*
TERNARY OPERATOR
It is used in place of if else statement. You seperate the two statements
using a colon. In the first value you provide a condition and its result and in the 
second condition only provide the result dont provide condition
*/ 

let age = 23;

let checkAge = age < 23 ? "23 se chota hai" : "happy birthday";

console.log(checkAge);


/*
PROMISES AND ASYNCHROMOUS JAVASCRIPT
A promise is a function that is used when you are getting data from database,
The way to create a promise is using keyword 'new' followed by 'Promise' which has a function 
that takes two parameters first is resolved and second is reject. Resolved is used when we get our data 
and reject is used when we dont get our data because of internet connection or any other issue.
Ater creating the promise you have to get the data, for that you use two functions .then and .catch 
Both of these functions take function with parameter of data which is obtained from the resolve parameter
and .catch takes the parameter of error 
*/ 

var promise = new Promise(function (resolve, reject){
    let zinger = "Available";
    if (zinger === "Available") {
        resolve ("Han basit ne zinger khilaya");
    }else{
        reject("nahi khilaya");
    }
}) 

promise.then(function(data){
    console.log("resolve =>",data);
})
.catch(function(err){
    console.log("reject =>",err);
})


/* In this example we get the data from firebase database
In this example we also have used setTimeout to check the pending 
state of the promise. 

*/


var oath = new Promise(function(resolve, reject){
    frebase.database().ref().on("child_added", function(data){
        if (data.val()) {
            setTimeout(() => {
                resolve("Promise is fulfilled")
            }, 300);
        } 
        else{
            reject("Something went wrong");
        }
    })
    
}) 
 
console.log(oath); //returns pending

oath.then(function(data){
    console.log(data);
} )

.catch(function(err) {
    console.log(err);
})


/*
FUNCTION EXPRESSION
In function expression you assign a variable to a funciton and the 
function dosent have any name. If we want to call the function
then we have to use the variable name
*/ 

let foo = function() {
    console.log("This is a function expression");
}

foo();

/*
ARROW FUNCTION
Instead of function keyword we use arrow. Another difference is
that arrow is placed after parenthesis. 
Arrow function is only used with a variable 
*/

let bar = () => {
    console.log("Hello I'm  function");
}

bar();

/*
If you have only one parameter than you can use the name of parameter
inplace of parenthesis. To use the parameter value use backtick and $ sign 
just like template literals.

*/ 

let hello = (name1, name5) => {
    console.log(`Hello ${name1} and ${name5}`);
}
hello("Shoaib", "Ramsha");

//You can directly return function values inside the function without creating the curly brackets. 

let film = () => "Chain kuli ki main kuli"

console.log(film());

// 