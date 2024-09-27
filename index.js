// Step 1: Create the Person constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Step 2: Add the introduce method to Person.prototype
Person.prototype.introduce = function() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
};

// Step 3: Create the Employee constructor function that inherits from Person
function Employee(name, age, jobTitle) {
    Person.call(this, name, age); // Call the Person constructor
    this.jobTitle = jobTitle;
}

// Step 4: Ensure Employee.prototype inherits from Person.prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee; // Reset the constructor property to Employee

// Step 5: Add the work method to Employee.prototype
Employee.prototype.work = function() {
    console.log(`${this.name} is working as a ${this.jobTitle}.`);
};

// Step 6: Demonstration

// Create an instance of Person
const person = new Person("Rahul", 30);
person.introduce(); // Output: "Hi, my name is Alice and I am 30 years old."

// Create an instance of Employee
const employee = new Employee("Faisal", 32, "Software Developer");
employee.introduce(); // Output: "Hi, my name is Bob and I am 25 years old."
employee.work(); // Output: "Bob is working as a Software Developer."
