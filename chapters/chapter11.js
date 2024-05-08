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
    document.write("It's AM"+'<br><br>')
} else {
    document.write("It's PM"+'<br><br>') 
}

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

let laterDate = new Date('2020-12-31T00:00:00')
document.write('Later Date: ' + laterDate +'<br><br>')

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

let referenceDate = new Date('2015-12-05T22:50:16');
let beginningDate = new Date('2015-01-01T00:00:00');
let referenceDate1 = new Date('2015-12-05T22:50:16').getTime();
let beginningDate1 = new Date('2015-12-05T00:00:00').getTime();
let since = referenceDate1 - beginningDate1
let sinceDifference = since
document.write('On refrence date '+referenceDate +'<br><br>');
document.write(sinceDifference + ' Seconds had passed since begining of 2015');


// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015


let ramzanWait = new Date('2015-01-01').getMonth();
let ramzanMonth = new Date('2015-06-18').getMonth();
let ramzanDate = new Date('2015-06-18').getDate();
let ramzanDifference = ramzanMonth - ramzanWait;
let difrence = ramzanDifference * 30 + 21;
let ramzan;
ramzan.setInterval(() => {
    difrence--;
    alert(difrence + 'Days have passed since 1st Ramzan, 2015')
    if (difrence === 0) {
        alert('Today is first RAMZAN')
    }
},5184000000 );



