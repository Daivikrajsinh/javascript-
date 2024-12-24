// constructor question



// question-1

function Room(roomNumber, type, price, isAvailable) {
    this.roomNumber = roomNumber;
    this.type = type;
    this.price = price;
    this.isAvailable = isAvailable;
}


const room1 = new Room(101, "Single", 100, true);
const room2 = new Room(102, "Double", 150, false);

console.log(room1);

console.log(room2);



// question-2

function Course(title, instructor, duration, studentsEnrolled) {
    this.title = title;
    this.instructor = instructor;
    this.duration = duration;
    this.studentsEnrolled = studentsEnrolled;
}


const course1 = new Course("JavaScript Basics", "rajdeep", "6 weeks", 100);
const course2 = new Course("Python for Beginners", "satyajeet", "8 weeks", 200);

console.log(course1);

console.log(course2);


// qustion-3

function Wallet(ownerName, balance, currency) {
    this.ownerName = ownerName;
    this.balance = balance;
    this.currency = currency;


}
Wallet.prototype.addmoney=function(money){
    this.balance +=money
}

let dev = new Wallet("dev",10000,"rupess")
console.log(dev)
dev.addmoney(500)
console.log(dev)



// question-4


function Weather(city, temperature, humidity, forecast) {
    this.city = city;
    this.temperature = temperature;
    this.humidity = humidity;
    this.forecast = forecast;


    this.updateForecast = function (newForecast) {
        this.forecast = newForecast;
        console.log(`The new weather forecast for ${this.city} is: ${this.forecast}`);
    };
}

const weather1 = new Weather("bavla", 25, 60, "Sunny");
console.log(weather1);


weather1.updateForecast("Rainy");




// question-5

function Student(name, rollNumber, grade, subjects = []) {
    this.name = name; 
    this.rollNumber = rollNumber; 
    this.grade = grade; 
    this.subjects = subjects; 

    
    this.addSubject = function (newSubject) {
        if (!this.subjects.includes(newSubject)) {
            this.subjects.push(newSubject);
        } else {
            console.log(`${newSubject} is already in the subject list.`);
        }
    };
}


const student1 = new Student("darshan", 101, "10th Grade", ["Math", "Science"]);


student1.addSubject("English");
console.log(student1.subjects); 


student1.addSubject("Math"); 
console.log(student1.subjects); 

