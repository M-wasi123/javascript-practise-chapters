// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

let userInput = +prompt('Enter positive decimal number')
document.write('number: '+userInput +'<br>')
let userInputRound = Math.round(userInput)
document.write('round off value: '+userInputRound +'<br>')
let userInputFloor = Math.floor(userInput)
document.write('floor value: '+userInputFloor +'<br>')
let userInputCeil = Math.ceil(userInput)
document.write('ceil value: '+userInputCeil +'<br><br><br>')

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

let userInpu = +prompt('Enter negative decimal number')
document.write('number: '+userInpu +'<br>')
let userInpuRound = Math.round(userInpu)
document.write('round off value: '+userInpuRound +'<br>')
let userInpuFloor = Math.floor(userInpu)
document.write('floor value: '+userInpuFloor +'<br>')
let userInpuCeil = Math.ceil(userInpu)
document.write('ceil value: '+userInpuCeil +'<br><br><br>')

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

let userValue = +prompt('Enter negative value')
let userValueAbsolute = Math.abs(userValue)
document.write('The absolute value of '+ userValue +' is '+ userValueAbsolute +'<br><br><br>')

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

let userValue1Random = Math.floor(Math.random() * userInput)
document.write('random dice value: '+ userValue1Random +'<br><br><br>')

// 6. Write a program that shows a random number between 1
// and 100 in your browser.

let Value1Random = Math.floor(Math.random() * 98)
document.write('random number between 1 and 100: '+ Value1Random +'<br><br><br>')

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

let userWeight = +prompt('Enter your weight in kilograms')
if (userWeight > 5) {
let point = Math.floor(Math.random()*5)
document.write('The weight of user is '+ userWeight +'.'+ point + ' kilograms')
}else if (userWeight < 6) {
document.write('The weight of user is '+ userWeight + ' kilograms')
    
}
// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

let userThink = +prompt('Enter any number between 1 to 10')
let randomNum = Math.floor(Math.random()*9);
if (userThink === randomNum) {
    alert("Congratulations You'r Genius")
}else{
    alert('Try again')
}