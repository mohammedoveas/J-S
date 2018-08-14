//BOM Operations

// width of the browser
var width = window.innerWidth;
console.log('width of the browser is : ' + width + 'px');

var height = window.innerHeight;
console.log('Height if the browser is : ' + height + 'px');

// Open a new Tab
//window.open("http://www.google.co.in");

// Print the Current Doc
//window.print();

// DOM Properties to get body , title , URL
var body = document.body;
console.log(body);

var title = document.title;
console.log(title);

var url = document.URL;
console.log(url);

//DOM Methods
//document.getElementById();
//document.getElementsByClassName();
//document.getElementsByTagName();
//document.querySelector();
//document.querySelectorAll();

// Access and Change the Elements

// DOM Events

function reverseStr(str) {
    var tempStr = '';
    for(var i=str.length-1; i>=0 ; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
}

var h1Element = document.querySelector('#display');
h1Element.textContent = reverseStr("Good Morning");
h1Element.style.color = 'red';
h1Element.style.fontSize = '50px';

var h2Element = document.querySelector('h2');
h2Element.style.backgroundColor = 'orangered';
h2Element.style.color = 'white';
h2Element.style.boxShadow = '0 0 15px black';

var inputElement = document.querySelector('#username');
inputElement.style.border = '2px solid gray';
inputElement.style.outline = 'none';
inputElement.style.fontSize = '18px';
var submitButton = document.querySelector('#submit');
submitButton.style.backgroundColor = 'forestgreen';
submitButton.style.fontSize = '18px';
submitButton.style.color = 'white';

function getUser() {
    var userText = inputElement.value;
    var userError = document.querySelector('#user-error');
    if(userText === 'naveen'){
        inputElement.style.borderColor = 'green';
        userError.textContent = "Valid User Name";
        userError.style.color = 'green';
    }
    else{
        inputElement.style.borderColor = 'red';
        userError.textContent = "Invalid User Name";
        userError.style.color = 'red';
    }
}

// JS EVENT LISTENERS


// 1. Get the element
// 2. Add an event listener
// 3. write the login inside the function

submitButton = document.querySelector('#submit');
submitButton.addEventListener('click',getUserData);
function getUserData() {
    var userText = inputElement.value;
    var userError = document.querySelector('#user-error');
    if(userText === 'naveen'){
        inputElement.style.borderColor = 'green';
        userError.textContent = "Valid User Name";
        userError.style.color = 'green';
    }
    else{
        inputElement.style.borderColor = 'red';
        userError.textContent = "Invalid User Name";
        userError.style.color = 'red';
    }
}

// Event Listener for TextBox
inputElement = document.querySelector('#username');
inputElement.addEventListener('keyup',validate);
function validate() {
    var userText = inputElement.value;
    var userError = document.querySelector('#user-error');
    if(userText === 'naveen'){
        inputElement.style.borderColor = 'green';
        inputElement.style.backgroundColor = 'lightgreen';
        userError.textContent = "Valid User Name";
        userError.style.color = 'green';
    }
    else{
        inputElement.style.borderColor = 'red';
        inputElement.style.backgroundColor = 'lightsalmon';
        userError.textContent = "Invalid User Name";
        userError.style.color = 'red';
    }
}










