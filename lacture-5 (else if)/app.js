/**
 * Suppose you code a prompt that asks, "Where was Quaid-e-Azam died?" If the user answers correctly, you display an alert Correct Answer. This is the code.
 */


// var ans = prompt("Where was Quaid-e-Azam died?");
// if (ans === "Karachi") {
//     alert("Correct Answer");
// }

/**
 If the user enters "Karachi" in the prompt field, the congratulations alert displays. If he enters something
 else, nothing happens. (This simplified code doesn't allow for other correct answers, like "In Karachi"
 */


/**
 *  "=="  compares value
 *  "===" compares value and data type
 *  "=="  values on both sides are equal
 *  "!="  values on both sides are not equal
 *  "===" values and types on both sides are equal
 *  "!==" values and/or types on both sides are equal
 */



// alert(18 == "18"); //true
// alert(18 != "18"); //false

// alert(18 === "18"); //false
// alert(18 === 18); //true
// alert(18 !== "18"); //true



// var score = 89;
// if (score !== 100) {
//     alert("Not a Perfect Score.");
//     alert("Try again");
// }
// alert("result computed");



// var score = 0;
// var userIQ;

// var x = prompt("Where does the Pope live?");
// var correctAnswer = "Vatican";

// if (x == correctAnswer) {
//     score++;
//     alert("Correct Answer");
//     userIQ = "genius";
// }

// if (score > 0) {
//     alert("Congrats" + " " + userIQ);
// }



/** Comparison Operators **/
/*
 > is greater than                  //exclusive
 < is less than                     //exclusive
 >= is greater than or equal to     //inclusive
 <= is less than or equal to        //inclusive
 */

// alert(18 > 17) // true
// alert(18 > 10) // true
// alert(18 > 19) // false
// alert(18 > 18) // false
// alert(18 >= 18) // true
// alert(18 >= 19) // false



// var age = 14;
// if (age <= 18) {
//     alert("You are under 18");
// }

// var age = 14;
// if (age < 19) {
//     alert("You are under 18");
// }




/** Logical operators:
     AND - &&
    OR - ||
    NOT - !

    true && true   = true
    false && true  = false
    false && false = false
    true && false  = false

    true || true   = true
    false || true  = true
    false || false = false
    true || false  = true
 **/


// /** Testing multiple conditions in one statement **/

// var test = "JS";
// var score = 65;

// if (test === "CSS" && score > 60) {
//     alert("You have passed CSS test");
// }
// if (test === "JS" && score > 70) {
//     alert("You have passed JS test");
// }



// var age = 23;
// var residence = "UK";
// var score = 8.2;

// if(age > 20 || residence == "US"){
//     alert("You can proceed");
// }

// if(age > 20 || (residence == "US" && score > 8.0)){
//     alert("You can proceed");
// }



/**
  The if statements you've coded so far have been all-or-nothing.
  If the condition tested true, something happened.
  If the condition tested false, nothing happened.

  Now in this example, we have two if statements, one testing for "karachi"
  and another testing for not-"karachi".
  */

// var city = "karachi";
// if (city === "karachi") {
//     alert("Correct!");
// } else {
//     alert("Wrong answer");
// }


// var ask = prompt("When did Pakistan become?", "8-14-1947");
// var response;
// if (ask === "8-14-1948") {
//     response = "Wrong answer please try again";
// } else if (ask === "8-14-1944") {
//     response = "Wrong Answer, You need to learn";
// } else if (ask === "8-14-1947") {
//     response = "wOW, Correct answer";
// } else {
//     response = "Wrong Answer, You need to learn";
// }
// alert(response);



// var time = parseInt(prompt("Enter time in 24 hour format E.g. 1300 for 1pm", "1300"));
// var message;
// if (time >= 0000 && time < 1200) {
//     message = "Good morning!";
// } else if (time >= 1200 && time < 1700) {
//     message = "Good afternoon!";
// } else if (time >= 1700 && time < 2100) {
//     message = "Good evening!";
// } else if (time >= 2100 && time <= 2359) {
//     message = "Good night!";
// }
// alert(message);



/** Nested If Statements **/
// var age = 24;
// if (age > 20) {
//     alert("You can proceed to further assessment");
//     if (age + 2 >= 25) {
//         alert("You'll be able to give driving test in near future");
//     }
// }
// else {
//     alert("We are Sorry");
// }


/** when no curly braces are used, first immediate statement is considered as it's in body of if statement **/
// var sum = 40;
// if (sum > 50)
//     alert("You've got a good score");
// alert("done computing result");
