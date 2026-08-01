console.log("=== TASK 1 RESULTS ===");

const smartProduct = {
    id: 101,
    title: "Wireless Headphones",
    price: 150,
    tags: ["electronics", "audio", "bluetooth"],
    updatePrice(newPrice) {
        this.price = newPrice;
    }
};

console.log("Original Product:", smartProduct);

smartProduct.updatePrice(120);

console.log("Updated Product:", smartProduct);

console.log("\n=== TASK 2 RESULTS ===");

const userDatabase = [];

function registerUser(id, name, role) {
    const newUser = {
        id: id,
        name: name,
        role: role
    };
    userDatabase.push(newUser);
}

registerUser(1, "Alice Johnson", "Admin");
registerUser(2, "Bob Smith", "Developer");
registerUser(3, "Charlie Davis", "Designer");

console.log("User Database Registry:", userDatabase);

console.log("\n=== TASK 3 RESULTS ===");

const storeInventory = [
    { name: "Laptop", stockCount: 15, category: "Electronics" },
    { name: "Mouse", stockCount: 4, category: "Accessories" },
    { name: "Keyboard", stockCount: 8, category: "Accessories" },
    { name: "Monitor", stockCount: 2, category: "Electronics" }
];
const findLowStockItems = (threshold) => {
    const lowStockItems = [];
    for (let i = 0; i < storeInventory.length; i++) {
        if (storeInventory[i].stockCount < threshold) {
            lowStockItems.push(storeInventory[i]);
        }
    }
    return lowStockItems;
};

const thresholdValue = 5;
const lowStockResult = findLowStockItems(thresholdValue);

console.log(`Low Stock Items (Stock < ${thresholdValue}):`, lowStockResult);


console.log("\n=== TASK 4 RESULTS ===");


const originalPrices = [100, 250, 400, 80, 150];

const discountedPrices = [];

for (let i = 0; i < originalPrices.length; i++) {
    const discounted = originalPrices[i] * (1 - 0.15); 
    discountedPrices.push(discounted);
}

console.log("Historical Origin Prices:", originalPrices);
console.log("Newly Converted Discounted Prices (15% off):", discountedPrices);