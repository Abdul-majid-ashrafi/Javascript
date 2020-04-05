/** A function is a block of JavaScript that robotically does the same thing again and again,
whenever you invoke its name. It saves you repetitive coding and makes your code easier to
understand.
On your website, suppose there are several pages where you want to display an alert that
tells the user the current time.
The code might look like this
 */

// var currentTime = new Date().toLocaleTimeString();
// alert("time: " + currentTime);

/**
You could write this block of code over and over again, every time you need it. Or you
could write it once as a function, naming it, say, tellTime.

How to write a function?
You can give a function any name that would be a legal variable name, then add
parentheses. Function-naming follows the same rules as variable naming, like this
function functionname() {
    code to be executed
}
*/


/*
function declaration
*/
// function tellTime() {
//     var currentTime = new Date().toLocaleTimeString();
//     alert("time: " + currentTime);
// }
/*
    function call
 */
// tellTime();


/** alert is also a function */
// alert("hello");

// var greeting = alert;
// console.log(typeof greeting); // function
// greeting("Hello");


/**
Suppose that when you write greetUser(); a function is called that displays an alert
saying, "Hello, there."
This is the code for the function.
 */

//  function greetUser() {
//     alert("Hello, there.");
// }
// greetUser();

/**
 Now, instead of just call the function like greetUser(), you're going to calling it and passing data to it.
 The string inside the parentheses, i.e. the data you're passing, is called an argument.
 */

//  function greetUser(param) {
//     alert(param);
// }
// greetUser("Hello, there.");

// greetUser(); //if I'm not passing any thing alert will be show undefined




// function increment(num) { // parameter
//     num++;
//     document.write("<br>Number is " + num);
// }

// increment(4); //passing argument

// increment(34); //passing argument

// increment(100); //passing argument
/** send 3 argument 4,7,9 but get only one parameter inside increment function */
// increment(4, 7, 9); //passing argument




// function add(num1, num2) //parameters
// {
//     var sum = num1 + num2;
//     document.write("<br>Sum is " + sum);
// }

// add(4, 2); //passing arguments

// add(56, 980); //passing arguments




// function greetUser(username) {
//     document.write("Welcome, " + username);
// }

// greetUser(); // call empty

// greetUser("Haider"); //passing argument

// greetUser("Haider Ali Shah"); //passing argument

// greetUser("Ali"); //passing argument

// var username = prompt("What is your name?","Ali Mughal");
// greetUser(username); // passing prompt result as a argument


/**
As arguments, you can use any combination of variables, strings, and literal numbers. In
the following example, the calling code passes a variable, a string, and a number to the
function. Three parameters catch the values. The function concatenates them to create an alert
message.
 */

// function showMessage(m, string, num) {
//     alert(m + string + num);
// }
// var month = "March";
// showMessage(month, "'s winner number is ", 23);


/** Functions:
Passing data back from them using return keyword*/

// function convertToUpperCase(str) {
//     var result = str.toUpperCase();
//     return result;
// }

// var uppercase = convertToUpperCase("haider ali");
// alert(uppercase);

// document.write(convertToUpperCase("Haider Ali"));

// console.log(convertToUpperCase("ali mUghAl"));




// function add(num1, num2) //parameters
// {
//     var sum = num1 + num2;
//     return sum;
// }

// document.write("Sum is " + add(4, 6));




// function getGrade(percentage) {
//     var result;
//     if (percentage >= 80) {
//         result = "A-one grade";
//     }
//     else if (percentage >= 70) {
//         result = "A grade";
//     }
//     else if (percentage >= 60) {
//         result = "B grade";
//     }
//     return result;
// }

// var percentage = parseInt(prompt("What is your percentage"));
// alert(getGrade(percentage));
// document.write(getGrade(percentage));

// alert(getGrade(82));
// document.write(getGrade(82));




// function calcShippingCharges(amount) {
//     return amount + 5;
// }
// //var res = 10 + calcShippingCharges(4); //19

// if (calcShippingCharges(9) >= 10) {
//     alert("Good");
// }




// function add(num1, num2) //5, 1
// {
//     return num1 + num2;
// }

// function increment(num) //5
// {
//     return add(num, 1); //6
// }

// alert(increment(5));




// function sayHello() {
//     return;
//     alert("This will not execute ever");
//     document.write("nor this");
// }

// alert(sayHello());  //undefined




// function sayHello(num) //local variable
// {
//     var message = "Hello"; //local variable- scope
// }
// alert(message);//not allowed
// alert(num); //not allowed




// var message = "Hi";     //global variable
// function sayHello(num) {
//     alert(message);
// }
// alert(message);
// sayHello();




// var message = "Hi";
// function sayHello(num) {
//     var message = "Hello";
//     alert(message); //Hello
// }
// alert(message); //Hi
// sayHello();




// function sayHello(num) {
//     message = "Hello"; // //global variable becuase not using var keyword
//     //alert(message);
// }
// sayHello();
// alert(message);




// function add() {
//     console.log(arguments);
// }

// add(); //0
// add(3); //1
// add(5, 7); //2
