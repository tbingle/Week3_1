//Inital Commit
let purchaseAmount = 15;//Inital Price
let discountPercentage = .1; //10% discount
let finalAmount;
if (purchaseAmount> 100){
    finalAmount= purchaseAmount - (purchaseAmount*discountPercentage);
}//10% Discount
else{
    finalAmount=purchaseAmount;
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
