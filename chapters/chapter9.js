// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

var userInput = +prompt('Enter the value and check this is uppercase letter or lowercase letter')

if (userInput <= 90  && userInput > 64 ) {
    alert('This number is uppercase letter')
}else if (userInput <= 122 && userInput > 96 ) {
    alert('This number is lowercase letter')
} else {
    alert('Please check again')
}

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

var number = +prompt("Enter the number and check it's type")

if (number > 0) {
    alert('This number is positive')
} else if (number < 0) {
    alert('This number is negative')
}else{
    alert('This number is zero')
}

// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise

var user = +prompt('Enter the name')
if (user === user) {
    alert('This is not string') 
} else if (user !== user) {
    alert('This is string')
}

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

var password = 'Ashar'
var password2 = 'Wasi'
var userPassword = prompt('Please enter your password')

if (password === userPassword || password2 === userPassword) {
    alert('Correct! The password you entered matches the original password')
} else {
    alert('Incorrect password')
}

// 6. This if/else statement does not work. Try to fix it:

var greeting;
greeting = "Good day";
var greeting2
greeting2 = "Good evening";
var hour = +prompt("Enter the hour less then or equal to 24");
if (hour < 18) {
alert(greeting)
}else{
alert(greeting2)
}


