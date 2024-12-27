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
    this.balance += amount;
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      console.log("Insufficient funds");
    }
  }
}
let account1 = new BankAccount("11334", 2000);
let account2 = new BankAccount("66778", 5000);

account1.deposit(500);
account2.deposit(200);
account1.withdraw(300);
account2.withdraw(700);

console.log(account1);
console.log(account2);



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




// question-6


class Employee {
  constructor(name, salary) {
      this.name = name;
      this.salary = salary; 
  }

  calculateAnnualSalary() {
      return this.salary * 12;
  }
}

class Manager extends Employee {
  constructor(name, salary, department, bonus) {
      super(name, salary); 
      this.department = department;
      this.bonus = bonus; 
  }

  calculateAnnualSalary() {
      return super.calculateAnnualSalary() + this.bonus;
  }
}

const manager1 = new Manager("manthan", 5000, "IT", 10000);
const manager2 = new Manager("bharat", 6000, "HR", 15000);




console.log(`${manager1.name} (Department: ${manager1.department}) - Annual Salary: $${manager1.calculateAnnualSalary()}`);
console.log(`${manager2.name} (Department: ${manager2.department}) - Annual Salary: $${manager2.calculateAnnualSalary()}`);


// question-7


class Book {
  constructor(title, author, publicationYear) {
      this.title = title;
      this.author = author;
      this.publicationYear = publicationYear;
  }

  displayDetails() {
      return `Title: ${this.title}Author: ${this.author}Publication Year: ${this.publicationYear}`;
  }
}

class Ebook extends Book {
  constructor(title, author, publicationYear, price) {
      super(title, author, publicationYear);
      this.price = price;
  }

  displayDetails() {
      return `${super.displayDetails()}Price: $${this.price.toFixed(2)}`;
  }
}

const myEbook = new Ebook("JavaScript Mastery", "manhotra", 2022, 15.99);

console.log(myEbook.displayDetails());



// question-8

class Animal {
  constructor(species, sound) {
      this.species = species;
      this.sound = sound;
  }

  makeSound() {
      console.log(`${this.species} makes a sound: ${this.sound}`);
  }
}

class Dog extends Animal {
  constructor(species, sound, color) {
      super(species, sound); 
      this.color = color;
  }

  makeSound() {
      console.log(`${this.color} ${this.species} says: ${this.sound}`);
  }
}

const myDog = new Dog('Dog', 'Woof', 'Black');

myDog.makeSound();




