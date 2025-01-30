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
