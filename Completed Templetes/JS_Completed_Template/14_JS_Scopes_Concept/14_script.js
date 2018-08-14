// Block scoping for FOR loop
for(var i=0; i<=10; i++){

}
console.log(i); // 11

//Block scoping for if Block
var course = 'MPC';
if(course === 'MPC'){
    var dept = 'Engineering';
}
console.log(dept); // Engineering

// Function Scoping
function allocateDept() {
    if(course === 'MPC'){
        var dept1 = 'Medical';
    }
}
allocateDept();
//console.log(dept1); // cannot access

// coding exercises

// 1) output ?

var top = 20;
function something() {
    var inner = 30;
    console.log(inner);
}

// 2) output ?
var top = 20;
function something() {
    var inner = 30;
    console.log(inner);
}
something();

// 3) output ?
var top = 20;
var inner = 50;
function something() {
    var inner = 30;
    console.log(inner);
}
something();

// 4) output ?

var top = 20;
var inner = 50;
function something() {
    var inner = 30;
}
something();
console.log(inner);

// 6) output ?
var name = "Naveen";
function greet(name) {
    console.log("Hello " + name);
}

greet("John");

//  IIFE example
(function() {
    var greeting = "Good Morning";
    console.log(greeting);
})();


// Read and Write Operations for variables


// Read and Write Operations for Functions


// Implications of Read and Write Operations

