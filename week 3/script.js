let numString = "50"; 
let num = Number(numString); 

num += 10;
num++;

console.log("Task 1 Final Result:", num); 

const username = "Farhan"; 
if (username) {
    console.log(`Welcome, ${username}!`); 
} else {
    console.log("Please provide a username."); 
}

let score = 85; 

if (score >= 90) {
    console.log("Grade: A"); 
} else if (score >= 75) {
    console.log("Grade: B"); 
} else {
    console.log("Grade: C"); 
}
let base = 5; 

for (let i = 1; i <= 5; i++) {
    console.log(`${base} multiplied by ${i} is ${base * i}`); 
}