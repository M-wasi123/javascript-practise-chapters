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
