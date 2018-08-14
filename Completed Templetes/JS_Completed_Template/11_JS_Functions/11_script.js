//creation of a simple function with no args and execute a function
function greet() { // function definition
    console.log("Good Morning");
}
greet(); // function call or function execution

//creation of a simple function with args
function greetArgs(name) {
    console.log(" Hello " + name + " Good Morning");
}
greetArgs("John");

// executing a function with less number of params
function greetLessArgs(name,age) {
    console.log("Hello " + name + " You are " + age + " Years of Old !!");
}
greetLessArgs('John');

//executing a function with more number of params
function greetMoreArgs(name,age) {
    console.log("Hello " + name + " You are " + age + " Years of Old !!");
}
greetMoreArgs("Williams",40,'Manager');

//function overloading is not possible here


// functions with return values
function greetReturn(name) {
    var greeting = "Good Morning " + name;
    return greeting;
}
var greetMsg = greetReturn("John");
console.log(greetMsg);

//function with empty return /no return
function greetEmptyReturn(name) {
    var greeting = "Good Morning " + name;
}
var emptyMsg = greetEmptyReturn("Williams");
console.log(emptyMsg); // undefined

// function Expressions with name and execution
var greetFn = function() {
    console.log('Iam from function expression');
};
greetFn();

// Functions as arguments without args
function greet1(name) {
    console.log('Iam from Greet 1 ' + name);
}
function greet2(name) {
    console.log('Iam from Greet 2 ' + name);
}
function greetEngine(fName,name) {
    fName(name);
}
greetEngine(greet1,'John');
greetEngine(greet2,'Williams');

// Functions in Objects and Execution
var student = {
    firstName : 'Arjun',
    lastName : 'Reddy',
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(student.fullName());

// Coding Exercise 1
/*
Create an employee obj and address object in it. add a property called
isFromState() to return true if a person from that state.
 */
var employee = {
    name : 'Rajan',
    age : 22,
    course : 'Engineering',
    address : {
        city : 'Hyderabad',
        state : 'Telangana',
        country : 'India'
    },
    isFromState : function(state) {
        return (this.address.state === state);
    }
};
console.log('Is From Telangana ? ' + employee.isFromState('Telangana'));


// Default Function Arguments (arguments)

function defaultArgs() {
    console.log(arguments);
}
defaultArgs('John',40);
