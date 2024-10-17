//  Practice Problem 1

// You went to the supermarket to buy some oranges and apples. Calculate how mu
// money the shopkeeper will return.

// Input:
// The first line of the input is the taka you have.
// The second line is the cost of 1 kg of oranges and 1 kg of apples.

// Output:
// Print the result.
// Sample Input:
// 1000
// 700
// Output:
// 300

let myMoney = 1000;
let orangesPricePerKg = 400;
let applesPricePerKg = 300;

const fruitsCost = (orangesPricePerKg + applesPricePerKg);
console.log(fruitsCost);

const returnMoney = (myMoney - fruitsCost);
console.log(returnMoney)