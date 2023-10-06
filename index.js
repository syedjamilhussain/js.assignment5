//  CHAPTER NUMBER 26 TO 30
//  QUESTION NUMBER 1
//  A
var user = prompt("enter  positive integer number ");
alert(user);
//    B
var user2 = parseInt(prompt("enter point number to get round off value"))
var round = Math.round(user2);
alert(round);
//  C
var user3 = parseInt(prompt("enter point number to get floor value"))
var floor = Math.floor(user3);
alert(floor);
//    D
var user4 = parseInt(prompt("enter point number to get ceil value"))
var ceilvalue = Math.ceil(user4);
alert(ceilvalue);
var jamil = 5.23;
var jam = Math.ceil(jamil);
console.log(jam)
//  QUESTION NUMBER 2
// A
var user11 = prompt("enter   negative floating point ");
alert(user11);
//    B
var user12 = parseInt(prompt("enter  negative floating point number to get round off value"))
var round1 = Math.round(user12);
alert(round1);
//  C
var user13 = parseInt(prompt("enter  negative floating point number to get floor value"))
var floor1 = Math.floor(user13);
alert(floor1);

var user14 = parseInt(prompt("enter  negative floating point number to get ceil value"))
var ceilvalue1 = Math.ceil(user14);
alert(ceilvalue1);
var jamil = -5.23;
var jam = Math.ceil(jamil);
console.log(jam);

// question number 3

var num1 = -59;
var abs = Math.abs(num1);
document.write(abs + "<br>");

// QUESTION NUMBER 4

var jam1 = Math.floor(Math.random() * 6) + 1;

document.write(jam1);

// QUESTION NUMBER 5



var sum = Math.floor(Math.random() * 2) + 1;

console.log(sum);
if (sum === 1) {
    document.write("heads");
} else (
    document.write("tails")
)

//  QUESTION NUMBER  6

var sum1 = Math.floor(Math.random() * 100) + 1;

document.write(sum1);

// QUESTION NUMBER 7

// ......

// QUESTION NUMBER 8

var sceNumber = 8;
var userNumber = parseInt(prompt("enter a number between 1 to 10 and if you chose correct number you win "));

if (userNumber === sceNumber) {
    alert("congulatation you are right")
} else {
    alert("sorry wrong number try again .. ")
}


// CHAPTER NUMBER 31 TO 34 

// QUESTION NUMBER 1

var date1 = new Date();

alert(date1);
//  QUESTION NUMBER 2
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentMonth = new Date();
var monthLength = currentMonth.getMonth();
var monthInWords = months[monthLength];
alert(monthInWords);

// QUESTION NUMBER 3
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = new Date();
var dayLength = day.getDay();
var dayInWords = daysOfWeek[dayLength]
alert("today is " + dayInWords);

// QUESTION NUMBER 4

var days2 = new Date();
var today = days2.getDay();
console.log(today);
if (today === 6 || 0) {
    alert("today is fun day ")

} else {
    alert("today is working day ")

}

// QUESTION NUMBER 5

var date2 = new Date();
var crntDay = date2.getDay();

if (crntDay < 16) {
    alert("First fifteen days of the month");

} else {
    alert("last days of the month")
}

// QUESTION NUMBER 6 


var time22 = new Date();

document.write(time22 + "<br>")

var msec = new Date();

document.write(msec.getMilliseconds() + "<br>");

var sec = new Date();
document.write(sec.getSeconds() + "<br>");

// QUESTION NUMBER 7

var am = new Date();

var pm = am.getHours();

if (pm > 12) {
    document.write("its " + pm + " PM" + "<br>")

} else {
    document.write("its " + pm + " AM" + "<br>")
}

// QUESTION NUMBER 8 

var last = new Date("dec 31 2023");
var lastDay = last;

document.write(lastDay + "<br>")

// QUESTION NUMBER 9


let startOfRamadan = new Date(2023, 5, 18);
let currentDate55 = new Date();
let differenceInMilliseconds = currentDate55 - startOfRamadan;
console.log(differenceInMilliseconds)
let differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
alert(differenceInDays + " days have passed since 1st Ramadan on June 18, 2023.");

// QUESTION NUMBER 10


let startOf2023 = new Date(2023, 0, 1);
let millisecondsSinceEpoch = startOf2023.getTime();
let secondsSinceEpoch = millisecondsSinceEpoch / 1000;
document.write(`Seconds that elapsed 2023: ${secondsSinceEpoch}` + "<br>");


// QUESTION NUMBER 11


var mojudaDate = new Date();
var ghanta = mojudaDate.getHours();
mojudaDate.setHours(ghanta + 1);
document.write(mojudaDate + "<br>");

// QUESTION NUMBER 12

let currentDate = new Date();
let saal100SaalPeechhe = currentDate.getFullYear() - 100;
currentDate.setFullYear(saal100SaalPeechhe);
alert(currentDate);

document.write("<br>");

// QUESTION NUMBER 13


let userAge = prompt("Aap ki umar (age) kya hai?");
let ageAsNumber = parseInt(userAge);
let currentYear = new Date().getFullYear();
let birthYear = currentYear - ageAsNumber;
document.write("Aap ka paidaish (birth) saal hai: " + birthYear + "<br>");






