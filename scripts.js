/****************** Exercise 1 ********************/

// Use a for loop to print numbers from 1 to 10
  
for(let a =1;a<=10;a++){
    console.log(a)
}




/****************** Exercise 2 ********************/

// Create a for loop that logs the numbers 4 to 156 to the console.



for (let b=4;b<=156;b++){
    console.log(b)
}




/****************** Exercise 3 ********************/

// Given the following array, log the sentence, "I really like the color: [COLOR]" for each of the items.
const favoriteColors = ["red", "blue", "purple", "yellow"];

for(let c=0;c<favoriteColors.length;c++){
    console.log(`my favorite color is: ${favoriteColors[c]}`)
}







/****************** Exercise 4 ********************/

// Use a for loop to calculate the sum of even numbers from 2 to 20
let sum = 0
for(let d =2;d<=20;d = d + 2){
    sum= sum+d
    console.log(d)
}

console.log(sum)


/****************** Exercise 5 ********************/

// Use a for loop to reverse a given string.
const inputString = "hello";
let reversedString = "";
// Output should be "olleh"

for(let e =inputString.length-1;e>=0;e--){
    reversedString += inputString[e];
}
console.log(reversedString)








/****************** Exercise 6 ********************/

// The factorial of a positive number is the product of all positive numbers less than or equal to it. So, in this case, the factorial of 5 is 5 * 4 * 3 * 2 * 1, which equals 120.

const num = 5; // The number for which we want to calculate the factorial
let factorial = 1;


// Calculate the factorial of a number using a for loop



for(let f =1;f<=num;f++){
    factorial *= f;
}
console.log(`the factorial of ${num} is ${factorial}`);



/****************** Exercise 7 ********************/


// Initial investment amount
const initialAmount = 1000;

// Annual interest rate (in decimal form)
const annualInterestRate = 0.05;

// Number of years
const years = 10;

console.log(`Initial Investment: $${initialAmount}`);
console.log(`Annual Interest Rate: ${annualInterestRate * 100}%`);
console.log(`Number of Years: ${years}`);

// Calculate the interest on an investment using a for loop
let futureValue = initialAmount;
for(let i = 0;i<years;i++){
  futureValue = futureValue*(1+annualInterestRate);  
}
console.log(`Future Value:$${futureValue.toFixed(2)}`);