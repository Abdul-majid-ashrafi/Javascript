/**
 * A prompt box asks the user for some information and provides a response field for her answer.
 * This code asks the user the question "What is your name?"
 */
// var username = prompt("What is your name?");
// alert("Hello, " + username);


// var course = prompt('Which course are you enrolled in?');
// alert(course);


/**an alternate way */
// var course = window.prompt('Which course are you enrolled in?');
// alert(course);


/** This code asks the user the question "Your species?" and provides a default answer in the response field, "human".
He/She can change the response.
Whether he/she leaves the default response as-is or changes it to something else, her response is assigned to the variable.  */
// var course = window.prompt('Your species?', 'human');
// alert(course);

// var email = prompt("Please enter your email address?", "abc@xyz.com");
// alert(email + "<br>");


/** prompt returns string type data **/
/** Using document.write() after an HTML document is fully loaded **/
// var userResponse = prompt("Please enter first number?"); 
// alert(typeof userResponse);
// document.write("userResponse is " + userResponse);
// document.write("<br>");
// document.write("Type of userResponse is " + typeof userResponse); //string
// document.write("<br>");




//   ========================parseInt / parseFloat methods=============================

//Integer = 4
//Float = 2.44

// var str = '52.5kgs';
// var weight = parseInt(str); //52
// alert(typeof weight); //number
// var weight = parseFloat(str); //52.5
// alert(typeof weight); //number


/** problem - prompt returns string type data **/
// var num1 = prompt("Please enter first number?");
// var num2 = prompt("Please enter second number?");
// var sum = num1 + num2; //problem
// document.write("Sum of two numbers is :" + sum); //wrong sum
// document.write("<br>");


/** solution - parseInt / parseFloat  **/
// var num1 = prompt("Please enter first number?");
// num1 = parseInt(num1);
// var num2 = prompt("Please enter second number?");
// num2 = parseInt(num2);
// var sum = num1 + num2;
// document.write("Sum of two numbers is :" + sum);
// document.write("<br>");
