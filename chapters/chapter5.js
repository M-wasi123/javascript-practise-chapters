// 1. Write a program that take two numbers & add them in a 
// new variable. Show the result in your browser.

var num1 = 3
var num2 = 5
var sum = num1+num2

document.write('Sum of '+num1+' and '+num2+' is '+sum +`<br>`+
`<br>`)


// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

// subtraction
var num1 = 5
var num2 = 3
var Sub = num1-num2

document.write('Sub of '+num1+' and '+num2+' is '+Sub +`<br>`
+`<br>`)

// multiplication
var num1 = 5
var num2 = 3
var Mul = num1*num2

document.write('Mul of '+num1+' and '+num2+' is '+Mul +`<br>`
+`<br>`)

// division
var num1 = 10
var num2 = 5
var div = num1/num2

document.write('Div of '+num1+' and '+num2+' is '+div +`<br>`
+`<br>`)

// modulus
var num1 = 11
var num2 = 5
var mod = num1%num2

document.write('Mod of '+num1+' and '+num2+' is '+mod +`<br>`
+`<br>`)


// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value 
// by 3. 
// l. Output : “The remainder is : 0”.

var int = 5;
var add = 13;
var rem = 0;
document.write('Value after variable declaration is undefined'+`<br>`+'Initial value: '+ int++ +`<br>`+ 'Value after increment is: '+ int +`<br>`+ 'Value after addition is: '+ add-- +`<br>`+ 'Value after decrement is: '+add+`<br>`+ 'The reminder is: '+ rem + `<br>`
+`<br>`+`<br>`)

// 4. Cost of one movie ticket is 600 PKR. Write a script to 
// store
// ticket price in a variable & calculate the cost of buying 5 
// tickets
// to a movie. Example output:

var ticket = 600;
var ticket5 = ticket*5;

document.write('Total cost to buy 5 tickets to a movie is '+ticket5+'PKR')




// 5. Write a script to display multiplication table of any 
// number in your browser. E.g

var table = 6;

for (let i = 1; i < 11; i++) {
   document.write(`<li> ${table} x ${i} = ${table*i} </li>`)
    
}





