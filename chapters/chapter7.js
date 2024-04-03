// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
var a = 10
document.write(`<h2>Result</h2>`+'The value of a is: '+ a+ `<br>`)
document.write('..............................................'+ `<br><br>`)

 ++a 
 document.write('The value of ++a is: '+ a + `<br>`)
 document.write('Now the value of a is: '+ a + `<br></br>`)

 document.write('The value of a++ is: '+ a + `<br>`)
 a++
 document.write('Now the value of a is: '+ a + `<br></br>`)

 --a 
 document.write('The value of --a is: '+ a + `<br>`)
 document.write('Now the value of a is: '+ a + `<br></br>`)


 document.write('The value of a-- is: '+ a + `<br>`)
 a-- 
 document.write('Now the value of a is: '+ a + `<br></br>`)
 document.write('_______________________________________________'+ `<br></br>`)

//  2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:

var a1 = 1
var b = 1

--a1;
document.write('<h5>--a;</h5>')
document.write('a is '+ a1 + `<br>`)

var b = --a1 - --b;
document.write('<h5>--a - --b;</h5>')
document.write('b is '+ b + `<br>`)

var ab = --a1 - --b + ++b;
document.write('<h5>--a - --b + ++b;</h5>')
document.write('ab is '+ ab + `<br>`)

var result = --a1 - --b + ++b + b--;
document.write('<h5>--a - --b + ++b + b--;</h5>')
document.write('result is '+ result + `<br>`)

document.write('_______________________________________________'+ `<br></br>`)

// var userInput = prompt('Enter your name')
// document.write('Greet the '+ userInput+ `<br>`)

document.write('_______________________________________________'+ `<br></br>`)

var Table = +prompt('Enter number which you want table')
for (let index = 1; index < 11; index++) {
    if (Table > 1) {
        document.write(Table + ' x ' + index + ' = '+ Table*index + '<br>')
    } else {
        alert('Enter the value 2,3,4.........')
    }
    
}

