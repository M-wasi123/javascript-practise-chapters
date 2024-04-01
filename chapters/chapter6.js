// 1. Declare an empty array using JS literal notation to store
// student names in future.
// 2. Declare an empty array using JS object notation to store
// student names in future.
// 3. Declare and initialize a strings array.
// 4. Declare and initialize a numbers array.
// 5. Declare and initialize a boolean array.
// 6. Declare and initialize a mixed array.
// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

var arr = [];
arr[0];
var stringArr = ['hellow']
var numberArr = [1]
var booleanArr = [true]
var mixArr = ['hy', 2 ,true]

document.write('<h1>Qualifications:</h1><br></br>')
// var clas = [" SSC", " HSC", " BCS",' BS', ' BCOM', ' MS',' M. Phil.', ' PhD'];
// for (let i = 1; i <= 1; i++) {
//    var result = clas[0]
//    resut1 = clas[1]
//    resut2 = clas[2]
//    resut3 = clas[3]
//    resut4 = clas[4]
//    resut5 = clas[5]
//    resut6 = clas[6]
//    resut7 = clas[7]
//     document.write(i,')',result + '<br>' + i,')',resut1 + '<br>' + i,')',resut2 + '<br>' + i,')',resut3 + '<br>' + i,')',resut4 + '<br>' + i,')',resut5 + '<br>' + i,')',resut6 + '<br>' + i,')',resut7)
// }
var clas = [''," SSC", " HSC", " BCS",' BS', ' BCOM', ' MS',' M. Phil.', ' PhD'];
for (let i = 1; i < clas.length; i++) {
   var result = clas[i]
    document.write(i,')',result,'<br>')
}

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

var student = ['Michael','John','Tony']

for (let i = 0; i < student.length; i++) {

    var result = student[i]
    var score = [320,230,480]
var result1 = [score[0]/500*100,score[1]/500*100,score[2]/500*100]
    document.write('Score of '+student[i]+' is '+score[i]+'. Percentage:'+result1[i]+'%'+'<br>')
    
}

// 9. Initialize an array with color names. Display the array
// elements in your browser.
var color = ['Blue','Green','Red']
document.write(color+'<br>')

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
var userInput = 'Pink'
color.unshift(userInput)
document.write(color+'<br>')

// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
var userInput = 'Purple'
color.push(userInput)
document.write(color+'<br>')

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// color.slice(-1,3,'Pistachio')
// document.write(color+'<br>')

// d. Delete the first color in the array. Display the updated
// array in your browser.

color.shift()
document.write(color+'<br>')

// e. Delete the last color in the array. Display the updated
// array in your browser.
color.pop()
document.write(color+'<br>')

// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// var newColor = 'yellow'
// color.
// document.write(color+'<br>')

// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

var studentScore = [5,2,3,9,4,6,7,8]
studentScore.sort()
for (let i = 0; i < studentScore.length; i++) {
   var res = studentScore[i]
    document.write(res)
}
