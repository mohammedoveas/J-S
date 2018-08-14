// creation of arrays
var array = [10,20,30,40,50];

// Accessing an array and its properties
console.log(array); // complete array
console.log(array[0]); // 10

// Access not existed property from an array
console.log(array[100]); // undefined

// adding properties to an array
array[5] = 60;

// Accessing length of an Array
console.log('Length : '+ array.length); // 6

// reverse the array using reverse()
array.reverse();
console.log(array); // 60,50,40,30,20,10

// Remove the first value of the array: shift()
array = [10,20,30,40,50];
array.shift();
console.log(array);

// Add value to front of the array:unshift()
array = [10,20,30,40,50];
array.unshift(60);
console.log(array);

// Remove the last value of the array: pop()
array = [10,20,30,40,50];
array.pop();
console.log(array);

// Add value the end of the array: push()
array = [10,20,30,40,50];
array.push(60);
console.log(array);

// Remove an element from an Array , Arguments: colors.splice(pos,n):
array = [10,20,30,40,50];
array.splice(1,2); // removes 20 , 30
console.log(array);

// Create a copy of an array. Typically assigned to a new variable:slice();
var arr1 = [10,20,30,40,50];
var arr2 = arr1.slice(); // create a separate copy
arr1.splice(1,2); // removes 20,30 from arr1
console.log(arr2); // 10,20,30,40,50

// indexOf()
arr1 = [10,20,30,40,50];
var elem = 30;
if(arr1.indexOf(elem) === -1){
    // Not Exists
    console.log(elem + " Not exists in the array");
}
else{
    // exists
    console.log("The value exists at the index : "
                                        + arr1.indexOf(elem));
}

// Join()
arr1 = [10,20,30,40,50];
var strArr1 = arr1.join(" - ");
console.log(strArr1);
console.log(typeof strArr1);

// Loop through the Array
arr1 = [10,20,30,40,50];
arr1.forEach(function (elem) {
   console.log(elem);
});


// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


/* Grocery List Example */
var groceryList = [];
function addItem() {
    var item = document.querySelector('#item').value;
    groceryList.push(item);
    document.querySelector('#display').textContent = groceryList.join(' , ');
    document.querySelector('#item').value = '';
}
function deleteItem() {
    var item = document.querySelector('#item').value;
    var index = groceryList.indexOf(item);
    groceryList.splice(index,1);
    document.querySelector('#display').textContent = groceryList.join(' , ');
    document.querySelector('#item').value = '';
}




