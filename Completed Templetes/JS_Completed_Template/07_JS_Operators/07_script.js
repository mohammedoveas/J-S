// Assignment operator =
var num1 = 10;
console.log("num1 : " + num1);

// Arithmetic operators + - * /
var a = 10;
var b = 20;
var sum = a + b;
console.log("Sum of a , b is : " + sum);

// Short hand math += , -= , *= , /=
var p = 10;
var q = 20;
var add = 0;
add = add + (p + q); // 0 + 10 + 20 = 30
add += (p + q); // 30 + 10 + 20 = 60
console.log(add); // 60

// Conditional operators < , > , <= , >= , !=
var age = 25;
if(age < 18){
    console.log('You are Minor');
}
else{
    console.log('You are Major');
}

// Unary Operator ++ , -- (pre , post)
var x = 10;
x = x + 1; // 11
x += 1; // 12
x++; // 13
console.log(x); // 13

// Logical operators AND , OR
var inRelation = true;
var parentsAgreed = false;
if(inRelation && parentsAgreed){
    console.log('Get Marry Soon');
}
else{
    console.log('Wait Until the parents Agree');
}

// String Concatenation Operator (+)
var test = 1 + 2 + "2" + 1 + 3 + "2";
console.log(test); // 32132

// Ternary operator (? :)
age = 25;
(age < 18) ? console.log('You Are Minor') : console.log('You Are Major');

// Typeof operator
var abc = 10;
console.log('value : ' + abc + " Data Type : " + typeof abc);

// == operator
a = 10;
b = "10";
if(a == b){
    console.log("Both are Equal");
}
else{
    console.log("Both are NOT Equal");
}

// === operator
a = 10;
b = "10";
if(a === b){
    console.log("Both are Equal");
}
else{
    console.log("Both are NOT Equal");
}