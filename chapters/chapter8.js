// Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

var cityName = prompt('Type the name of the city you want to enter.')
if (cityName) {
    alert('Welcome to city of lights')
}

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

var maleFemale = prompt('If you male press 1 OR If you female press 2')
if (maleFemale == 1) {
    alert('Good Morning Sir')
}else if (maleFemale == 2) {
    alert("Good Morning Ma'am")
}

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

var trafficSignal = prompt('Enter traffic signal color')

if (trafficSignal === "Red") {
    
document.write('Signal Color'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'Meassage'+'<br>'+trafficSignal+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'Must stop')
}else if (trafficSignal === 'Yellow') {
    document.write('Signal Color'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'Meassage'+'<br>'+trafficSignal+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'Ready to move') 
}else if (trafficSignal === 'Green') {
    document.write('Signal Color'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'Meassage'+'<br>'+trafficSignal+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'&nbsp;'+'Move now')
}else{
    alert('Enter only Red, Yellow, Green color')
}

// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

var fuel = +prompt('How much fuel is in your car?')

if (fuel < 0.49) {
    alert('Please refill the fuel in your car')
} else {
    alert('Please enter less than 0.49 litres.')
}


// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83 ){
alert("given condition for variable b is true");
}else{
    alert("given condition for variable b is false")
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}else{
    alert("condition 1 is false"); 
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}else{
    alert("condition 3 is false");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
    alert("car is smaller than cat");
    }

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// Show the total marks, marks obtained, percentage, grade &
// remarks like:

var studentMarks = +prompt('Enter your marks obtained')
if (studentMarks <= 300) {
    
var percentages = studentMarks*100/300
if (percentages > 80) {
    document.write('<h1>Marks Sheet</h1>'+'Total marks : 300'+`<br>`+`Marks obtained : `+studentMarks+`<br>`+'Percentage :'+percentages+'%'+`<br>`+'Grade : A-one')
} else if (percentages > 70) {
    document.write('<h1>Marks Sheet</h1>'+'Total marks : 300'+`<br>`+`Marks obtained : `+studentMarks+`<br>`+'Percentage :'+percentages+'%'+`<br>`+'Grade : A')
    
}else if (percentages > 60) {
    document.write('<h1>Marks Sheet</h1>'+'Total marks : 300'+`<br>`+`Marks obtained : `+studentMarks+`<br>`+'Percentage :'+percentages+'%'+`<br>`+'Grade : B')

}else if (percentages < 60) {
    document.write('<h1>Marks Sheet</h1>'+'Total marks : 300'+`<br>`+`Marks obtained : `+studentMarks+`<br>`+'Percentage :'+percentages+'%'+`<br>`+'Grade : Fail'+'<br>'+'Remarks : You need to improve')

}

}else{
    alert('Please enter less than 300.')
}

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

var numb = +prompt('Guess a secret number (ranging 1 to 20)')

if (numb == 6) {
    alert('Bingo! Correct answer')
}else if (numb == 7 || numb == 5) {
    alert('Close enough to the correct answer')
}else{
    alert('Try again')
}

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

var userMessage = +prompt('Enter only numbers divisible by 3.')
var divide = userMessage%3

if (divide == 0) {
    alert('The number is divisible by 3.')
} else {
   alert('Enter only numbers divisible by 3.') 
}

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

var userNumber = +prompt('Enter you number')
if (userNumber%2 === 0) {
    alert('This number is even')
}else{
    alert('This number is odd')
}
