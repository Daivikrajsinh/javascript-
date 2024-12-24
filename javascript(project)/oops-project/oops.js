// question-1
class Person {
    constructor(name, age, country) {
      this.name = name;
      this.age = age;
      this.country = country;
    }
  
    
    Details() {
      console.log(`Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`);
    }
  }
  
  
  const person1 = new Person("raj", 30, "USA");
  const person2 = new Person("meet", 25, "Canada");
  
  
  person1.Details();
  person2.Details();




//   question-2
  class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    
    calculateArea() {
      return this.width * this.height;
    }
  

    calculatePerimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  
  const rectangle = new Rectangle(10, 5);
  
  
  console.log(`Area: ${rectangle.calculateArea()}`);
  console.log(`Perimeter: ${rectangle.calculatePerimeter()}`);

 
  

//   question-3
class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    
    Details() {
      console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
  }
  
  
  class Car extends Vehicle {
    constructor(make, model, year, doors) {
      super(make, model, year);
      this.doors = doors;
    }
  
    
    Details() {
      console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Doors: ${this.doors}`);
    }
  }
  
  
  const car = new Car("Toyota", "fortuner", 2024, 4);
  
  
  car.Details();




  // question-4
class BankAccount {
  constructor(accountNumber, balance = 0) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited $${amount} into account ${this.accountNumber}. New balance: $${this.balance}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew $${amount} from account ${this.accountNumber}. New balance: $${this.balance}`);
    } else if (amount > this.balance) {
      console.log("Insufficient funds for withdrawal.");
    } else {
      console.log("Withdrawal amount must be positive.");
    }
  }
}

const account1 = new BankAccount(101, 500);
const account2 = new BankAccount(102);

account1.deposit(200); 
account1.withdraw(150); 
account1.withdraw(700); 

account2.deposit(300); 
account2.withdraw(50);  



// question-5
class Shape {
  calculateArea() {
    throw new Error("calculateArea method must be implemented by subclasses");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  calculateArea() {
    return 0.5 * this.base * this.height;
  }
}

const circle = new Circle(5);
console.log(`The area of the circle is: ${circle.calculateArea().toFixed(2)}`);

const triangle = new Triangle(10, 6);
console.log(`The area of the triangle is: ${triangle.calculateArea()}`);
