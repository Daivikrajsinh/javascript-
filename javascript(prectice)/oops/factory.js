// factory question

// question-1

function createProduct(name, price, category) {
    return {
        name: name,
        price: price,
        category: category,
        getDetails() {
            return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Category: ${this.category}`;
        }
    };
}

const product1 = createProduct("Smartphone", 699.99, "Electronics");
const product2 = createProduct("Laptop", 1199.99, "Computers");
const product3 = createProduct("Headphones", 199.99, "Accessories");

console.log(product1.getDetails()); 
console.log(product2.getDetails()); 
console.log(product3.getDetails());




// question-2

function createReportCard(name, grade, subject) {
    return {
        name: name,
        grade: grade,
        subject: subject,
        getReportCard() {
            return `Student: ${this.name}, Subject: ${this.subject}, Grade: ${this.grade}`;
        },
        updateGrade(newGrade) {
            this.grade = newGrade;
            return `Grade updated for ${this.name} in ${this.subject}: ${this.grade}`;
        }
    };
}

const student1 = createReportCard("stya", "A", "Mathematics");
const student2 = createReportCard("raj", "B+", "Science");
const student3 = createReportCard("mohan", "A-", "English");

console.log(student1.getReportCard()); 
console.log(student2.getReportCard()); 
console.log(student3.getReportCard());


console.log(student2.updateGrade("A"));
console.log(student2.getReportCard()); 


// question-3


function createCar(model, rentalRate, availability) {
    return {
        model: model,
        rentalRate: rentalRate,
        availability: availability,
        getDetails() {
            return `Model: ${this.model}, Rental Rate: $${this.rentalRate}/day, Availability: ${this.availability ? "Available" : "Not Available"}`;
        },
        rentCar() {
            if (this.availability) {
                this.availability = false;
                return `The car ${this.model} has been rented.`;
            } else {
                return `The car ${this.model} is currently not available.`;
            }
        },
        returnCar() {
            if (!this.availability) {
                this.availability = true;
                return `The car ${this.model} has been returned and is now available for rental.`;
            } else {
                return `The car ${this.model} is already available.`;
            }
        }
    };
}

const car1 = createCar("Toyota Camry", 50, true);
const car2 = createCar("Honda Accord", 45, false);
const car3 = createCar("Tesla Model 3", 100, true);

console.log(car1.getDetails()); 
console.log(car2.getDetails()); 

console.log(car1.rentCar()); 
console.log(car1.getDetails()); 

console.log(car1.returnCar()); 
console.log(car1.getDetails()); 


// qustion-4


function createBook(title, author, ISBN, availableCopies) {
    return {
        title: title,
        author: author,
        ISBN: ISBN,
        availableCopies: availableCopies,
        getDetails() {
            return `Title: "${this.title}", Author: ${this.author}, ISBN: ${this.ISBN}, Available Copies: ${this.availableCopies}`;
        },
        borrowBook() {
            if (this.availableCopies > 0) {
                this.availableCopies--;
                return `You have successfully borrowed "${this.title}". Copies left: ${this.availableCopies}`;
            } else {
                return `Sorry, "${this.title}" is currently unavailable.`;
            }
        },
        returnBook() {
            this.availableCopies++;
            return `You have successfully returned "${this.title}". Copies available now: ${this.availableCopies}`;
        }
    };
}

const book1 = createBook("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565", 3);
const book2 = createBook("To Kill a Mockingbird", "Harper Lee", "9780061120084", 2);
const book3 = createBook("1984", "George Orwell", "9780451524935", 0);

console.log(book1.getDetails()); 
console.log(book3.getDetails()); 

console.log(book1.borrowBook()); 
console.log(book3.borrowBook()); 

console.log(book1.returnBook()); 
console.log(book3.returnBook()); 


// question-5

function createEmployeeBadge(name, id, department, position) {
    return {
        name: name,
        id: id,
        department: department,
        position: position,
        getBadgeInfo() {
            return `Employee Name: ${this.name}, ID: ${this.id}, Department: ${this.department}, Position: ${this.position}`;
        },
        updatePosition(newPosition) {
            this.position = newPosition;
            return `${this.name}'s position has been updated to ${this.position}.`;
        },
        updateDepartment(newDepartment) {
            this.department = newDepartment;
            return `${this.name} has been transferred to the ${this.department} department.`;
        }
    };
}

const employee1 = createEmployeeBadge("mahesh", 101, "Human Resources", "Manager");
const employee2 = createEmployeeBadge("kuldeep", 102, "Engineering", "Software Developer");
const employee3 = createEmployeeBadge("parth", 103, "Marketing", "Brand Specialist");

console.log(employee1.getBadgeInfo()); 
console.log(employee2.getBadgeInfo()); 

console.log(employee2.updatePosition("Senior Software Developer")); 
console.log(employee3.updateDepartment("Sales")); 

console.log(employee2.getBadgeInfo()); 
console.log(employee3.getBadgeInfo()); 
