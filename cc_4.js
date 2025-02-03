//Inital Commit
let purchaseAmountt = 15;//Inital Price
let discountPercentagee = .1; //10% discount
let finalAmount;
if (purchaseAmountt> 100){
    finalAmount= purchaseAmountt - (purchaseAmountt*discountPercentagee);
}//10% Discount
else{
    finalAmount=purchaseAmountt;
}//No discount
console.log(`Final amount after discount: $${finalAmount}`);//Log

let sales = [200,134,543,90,220];
let totalSales = 0;
for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i];    
}
console.log(`Total Sales: $${totalSales}`);//Log
let stock = 10;//Inital stock price
while (stock > 0) {
    console.log (`Stock Remaining: ${stock}`);
    stock--;//Decrease stock to 0 
}
 let responses = 0;
 do {
    responses++ 
    console.log(`Response Count: ${responses}`);
 } while (responses<3);//Survey responses

 //Employee information
 const Employee = {
    Name: "John Mitch",
    Position: "Manager",
    Salary: "75000"
};
for (const key in Employee) {
    if (Object.prototype.hasOwnProperty.call(Employee, key)) {
        const element = Employee[key];
        console.log(`${key}: ${element}`);//Accuratly logs employee information in console 
    }
}
//Declare product array
let products = ["Laptop", "Mouse","Keyboard"];
for (let product of products) {
    console.log(product);
}
//Declare order numbers
let orderID = [101,102,103];
orderID.forEach(orderID => {
    console.log(`orderID: ${orderID}`);
});
// Function to calculate tax
function calculateTax(amount, taxRate) {
    let tax = amount * (taxRate / 100);
    return tax;
};
let amount = 106.45; 
let taxRate = 5;  
let tax = calculateTax(amount, taxRate);
console.log(`Tax on $${amount} at a rate of ${taxRate}% is: $${tax.toFixed(2)}`);

// Function to apply discount
let applyDiscount = function(price, discountPercentage){
    let discountedPrice = price*(1- discountPercentage/ 100);
    return discountedPrice;
};
let price = 239844;
let discountPercentage = 23;
let discountedPrice = applyDiscount(price, discountPercentage);
console.log ( `Sticker price of $${price} with a ${discountPercentage}% discount is: $${discountedPrice.toFixed(2)}`);

//Loyalty Points
let calculatePoints= (purchaseAmount) => {
    let points = Math.floor(purchaseAmount / 10); 
    return points;
};
let purchaseAmount = 85; 
let pointsEarned = calculatePoints(purchaseAmount);

console.log(`For spending $${purchaseAmount}, you earned ${pointsEarned} points.`);