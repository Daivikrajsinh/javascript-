// question-1
let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


// question-2

const array = [10, 20, 30, 40, 50];
let index = 0;
while (i < array.length) {
    console.log(array[i]); i++;
}


// question-3
let str = "hello,world!";
for (let i = 0; i < str.length; i++) {
    console.log(str[i])
}

//  question-4
let string = "JavaScript";

for (let i = 0; i < str.length; i++) {
    console.log(string[i]);
}

// question-5
let numbers5 = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers5.length; i++) {
    sum += numbers5[i];
    console.log(sum);
}

// question-6
const arr1 = [3, 1, 4, 1, 5, 9];
let max = arr1[0];

for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] > max) {
        max = arr1[i];
    } console.log(max);
}


// question-7
let numbers7 = [1, 2, 3, 4, 5];
let reversed = [];

for (let i = numbers7.length - 1; i >= 0; i--) {
    reversed.push(numbers7[i]);
    console.log(reversed);
}


// question-8
let greeting = "hello";
let upperCaseGreeting = "";

for (let i = 0; i < greeting.length; i++) {
    upperCaseGreeting += greeting[i].toUpperCase();
    console.log(upperCaseGreeting);
}



// question-9
let numbers9 = [2, 4, 6, 8, 10];
let count = 0;
let i = 0;

while (i < numbers9.length) {
    count++;
    i++;

}
console.log(count);


// question-10

let numbers10 = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < numbers10.length; i++) {
    if (numbers10[i] % 2 === 0) {
        console.log(numbers10[i]);
    }
}

// question-11
let numbers11 = [5, 10, 15];
let length = 0;
let i11 = 0;

while (i < numbers11.length) {
    length++;
    i11++;

}
console.log(length);

// question-12

let fruits = ["apple", "banana", "cherry"];
let totalLength = 0;

for (let i = 0; i < fruits.length; i++) {
    totalLength += fruits[i].length;
    console.log(totalLength);
}


// question-13
let words = ["This", "is", "JavaScript"];
let concatenatedString = "";

for (let i = 0; i < words.length; i++) {
    concatenatedString += words[i] + " ";


    console.log(concatenatedString);
}

