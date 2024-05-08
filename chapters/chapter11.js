// 1. Write a program that displays current date and time in
// your browser.

let todayDate = new Date();
document.write(todayDate +'<br><br>');

// 2. Write a program that alerts the current month in words.
// For example December.

let currentMonth = new Date().toLocaleString('en-US', {month: 'long'});
document.write('Current Month: '+ currentMonth + '<br><br>')

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.


let currentDay = new Date().toLocaleString('en-US', {weekday: 'short'});
document.write('Current Day: '+ currentDay + '<br><br>')

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

let currentDate = new Date().getDate();
if (currentDate < 16) {
    document.write('First fifteen days of the month'+'<br><br>')
}else{
    document.write('Last days of the month'+'<br><br>')
}

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

let curentDate = new Date();
let milliseconds = new Date().getTime();
let minutes = milliseconds / (1000 * 60);


document.write('Current Date: '+ curentDate +'<br><br>')
document.write('Elapsed milliseconds since January 1 , 1970: '+ milliseconds +'<br><br>')
document.write('Elapsed minutes since January 1 , 1970: '+ minutes +'<br><br>')

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

let userTime = new Date().getHours();
if (userTime < 13) {
    document.write("It's AM")
} else {
    document.write("It's PM") 
}

