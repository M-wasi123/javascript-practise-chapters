// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.

var age = 15
alert('I am '+ age +' years old')



// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

for (var int = 1; int < 15; int++) {
    alert('You have visited this site '+ int + ' times')
    
}






// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:

var birth = 'My birth year is 1990'
var dataType = 'Data Type of my ddeclared variable is number '

document.write(birth + `<br>` + dataType)



// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

document.write (`<span style="display: flex; align-items: center;
gap: 5px;">
<h3 >John Doe</h3>
<p>ordered</p>
<span style="display: flex;align-items: center;">
<h3>5 T-Shirt</h3>
<p>(s) on XYZ Clothing store</p>
</span>
</span>`);

 

// var x = +prompt("Enter your number")
// var y = +prompt("Enter your number")
// var sum = x+y;
// document.write("The sum of " + x +" and "+ y + " is " + sum + `<br></br>`)
// var x1 = +prompt("Enter your number")
// var y1 = +prompt("Enter your number")
// var sum1 = x1-y1;
// document.write("The subtraction of " + x1 +" and "+ y1 + " is " + sum1)