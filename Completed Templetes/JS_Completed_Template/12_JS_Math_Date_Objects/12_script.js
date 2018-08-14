/*
        Math Object Examples

     */

// Math PI and Sqrt
var piValue = Math.PI;
console.log('PI Value : ' + piValue);

// Sqrt
var sqrt = Math.sqrt(144);
console.log('sqrt of 144 : ' + sqrt);

// find the min of 4 numbers
var min = Math.min(45,78,7,87,894,654);
console.log('Min : ' + min);

// find the Max of 4 numbers
var max = Math.max(45,78,7,87,894,654);
console.log('Max : ' + max);

// find the 'x' to the power of 'y' value, ex: 2^4
var pow = Math.pow(2,4);
console.log('2 ^ 4 : ' + pow);

// generate the random numbers from 0 to 100000
var random = Math.round(Math.random() * 10);
document.querySelector('#display').textContent = random.toString();

/* For more details about Math Object, please have a look at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

// String Methods

var str = "Good Morning";

var length = str.length;
console.log('str Length : ' + length); // 12

var lowercase = str.toLowerCase();
console.log('Lowercase : ' + lowercase); // good morning

var uppercase = str.toUpperCase();
console.log('UpperCase : ' + uppercase); // GOOD MORNING

var partialStr = str.substring(0,4);
console.log('partialStr : ' + partialStr); // Good

var remStr = str.substring(5);
console.log('remString : ' + remStr); // Morning

str = "Good Morning";

function countChar(str) {
    var count = 0;
    for(var i=0; i<str.length; i++){
        if(str.charAt(i) === 'o'){
            count++;
        }
    }
    return count;
}
console.log('count : ' + countChar(str));

function reverseString(str) {
    var revStr = '';
    for(var i=str.length-1; i>=0 ; i--){
        revStr += str.charAt(i);
    }
    return revStr;
}
console.log('Reverse : ' + reverseString(str));

var myStr = "012545";

function strNumber(str) {
    var array = ['ZERO', 'ONE' , 'TWO' , 'THREE' , 'FOUR' , 'FIVE' , 'SIX' , 'SEVEN' , 'EIGHT' , 'NINE'];
    var output = '';
    for(var i=0; i<str.length; i++){
       output += array[str.charAt(i)] + ' ';
    }
    return output;
}
console.log('StrNumber : ' + strNumber(myStr));


/*
    Date Object Examples

 */

// get today's date
var today = new Date();
console.log(today);

// get proper date
var date = today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear();
console.log(date);

// get full day of the week using switch statement
var output = 'Today is : ';
today = new Date().getDay();
switch(today){
    case 0:
        output += 'Sunday';
        break;
    case 1:
        output += 'Monday';
        break;
    case 2:
        output += 'Tuesday';
        break;
    case 3:
        output += 'Wednesday';
        break;
    case 4:
        output += 'Thursday';
        break;
    case 5:
        output += 'Friday';
        break;
    case 6:
        output += 'Saturday';
        break;
    default:
        output += '';
        break;
}
console.log(output);
//document.querySelector('#display').textContent = output;


// Display a Digital Clock on the web page
function digitalClock() {
    var today = new Date();
    var options = {timeZone : 'Asia/Kolkata'};
    var time = today.toLocaleTimeString('en-US',options);
    document.querySelector('#clock').textContent = time;
}
setInterval(digitalClock,1000);


/* For More Details about Date() please have a look at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/