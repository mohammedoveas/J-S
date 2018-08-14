// Creation of objects and retrieval
var employee = {
    name : 'John',
    age : 40,
    desg : 'Manager',
    address : {
        city : 'Hyderabad',
        state : 'Telangana'
    }
};
console.log(employee); // employee object
console.log(employee.name); // John
console.log(employee.address); // address object of employee

// add a property for employee obj
employee.salary = 50000;
// employee obj with salary
console.log(employee);

// add a property for address obj of employee
employee.address.country = 'India';

// brackets notation for dynamic values
var prop = 'name';
console.log(employee.prop); // undefined
console.log(employee[prop]); // John
prop = 'age';
console.log(employee[prop]); // 40

// delete a property
delete employee.address;
console.log(employee);











