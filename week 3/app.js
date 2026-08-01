console.log("--- Task 1: Arrow Calculator ---");

const calculateTotal = (price, taxPercentage, discountAmount) => {
    const taxPrice = (price * taxPercentage) / 100;
    const finalTotal = price + taxPrice - discountAmount;
    return finalTotal; 
};

const price = 100;
const tax = 15;
const discount = 10;
const total = calculateTotal(price, tax, discount);

console.log(`Total amount for $${price} (Tax: ${tax}%, Discount: $${discount}): $${total}`);


console.log("\n--- Task 2: Strict Access Guards ---");

const isLoggedIn = true;
const hasActiveSubscription = false;
const guestToken = "token_xyz123"; 

if ((isLoggedIn && hasActiveSubscription) || guestToken) {
    console.log("Access Granted!");
} else {
    console.log("Access Denied!");
}


console.log("\n--- Task 3: Day Planner Switchboard ---");

const dayOfWeek = "Wednesday"; 

switch (dayOfWeek) {
    case "Monday":
    case "Tuesday":
        console.log("Focus: Core JavaScript Study");
        break;
    case "Wednesday":
    case "Thursday":
        console.log("Focus: Practical Code Labs");
        break;
    case "Friday":
        console.log("Focus: Assignment Submission Review");
        break;
    default:
        console.log("Rest & Recovery Day");
        break;
}


console.log("\n--- Task 4: Selective Array Scanner ---");

const numbers = [12, 45, 7, 22, 19, 88, 3, 50, 41, 10];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(`Discovered even number: ${numbers[i]}`);
    }
}