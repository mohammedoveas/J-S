// If Else condition Example
var courseCompleted = true;
var practiceCompleted = false;
if(courseCompleted && practiceCompleted){
    console.log('You will get a job soon');
}
else if(courseCompleted && !practiceCompleted){
    console.log('Start practicing');
}
else{
    console.log('Please join any Course');
}

// For loop Example to display from 1 - 10 values
var output = '';
for(var i=1 ; i<=10 ; i++){
    if(i <= 9){
        output += i + " , ";
    }
    else{
        output += i ;
    }
}
console.log(output);
document.querySelector('#display').textContent = output;

// While loop Example to display from 1 - 10 values
output = '';
i = 1;
while(i<=10){
    if(i <= 9){
        output += i + " - ";
    }
    else{
        output += i ;
    }
    i++;
}
console.log(output);
document.querySelector('#display').textContent = output;

// Do while loop Example to display from 1 - 10 values
output = '';
i = 1;
do{
    if(i <= 9){
        output += i + " * ";
    }
    else{
        output += i ;
    }
   i++;
}
while(i <= 10);
console.log(output);
document.querySelector('#display').textContent = output;

// Switch Statement Example to display full Day
output = 'Today is : ';
var today = new Date().getDay();
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
document.querySelector('#display').textContent = output;