/**
 if you want to run the same code over and over again, each time with a different value.
 */

/** without for loop **/

// var num = 0;
// document.write(num + "<br>");
// num += 1;
// document.write(num + "<br>");
// num += 1;
// document.write(num + "<br>");
// num += 1;
// document.write(num + "<br>");
// num += 1;
// document.write(num + "<br>");
// num += 1;
// document.write(num + "<br>");
// num += 1;
// document.write(num + "<br>");
// num += 1;
// document.write(num + "<br>");
// num += 1;
// document.write(num + "<br>");
// num += 1;
// document.write(num + "<br>");
// num += 1;
// document.write(num + "<br>");
// num += 1;

/** with for loop **/
// for (var i = 0; i <= 10; i++) {
//   document.write(i + "<br>");
// }


/** For Loops **/
/*
for (initializer ; condition ; incrementer/decrementer)
{

}
*/

/** structure **/
/**
 for ( ; ; )
 {

 }
 */


/**
 suppose we want to print “Hello World” 10 times.This can be done in two ways as shown below:
 */

/** without for loop **/
// document.write("Hello World "+ "<br>");
// document.write("Hello World "+ "<br>");
// document.write("Hello World "+ "<br>");
// document.write("Hello World "+ "<br>");
// document.write("Hello World "+ "<br>");
// document.write("Hello World "+ "<br>");
// document.write("Hello World "+ "<br>");
// document.write("Hello World "+ "<br>");
// document.write("Hello World "+ "<br>");
// document.write("Hello World "+ "<br>");


/** with for loop **/
// for (let i = 0; i < 10; i++) {
//   document.write("Hello World " + "<br>");
// }



// var cleanestCities = ["lahore", "islamabad", "murree", "hunza"];
// document.write("<h4>Cleanest Cities List</h4>");
// for (var i = 0; i < cleanestCities.length; i++) {
//   document.write(cleanestCities[i] + " at index " + i);
//   document.write("<br>");
// }



/**
  Now you go through the array to see if there's a match with the user's city. If there is, you
  display an alert telling the user her city is one of the cleanest. If there's no match, you display
  an alert telling the user her city isn't on the list.
 */

/** without for loop **/
// var cleanestCities = ["lahore", "islamabad", "murree", "hunza"];
// var cityToCheck = prompt("Enter city name");

// if (cityToCheck === cleanestCities[0]) {
//   alert("It's one of the cleanest cities");
// }
// else if (cityToCheck === cleanestCities[1]) {
//   alert("It's one of the cleanest cities");
// }
// else if (cityToCheck === cleanestCities[2]) {
//   alert("It's one of the cleanest cities");
// }
// else if (cityToCheck === cleanestCities[3]) {
//   alert("It's one of the cleanest cities");
// }
// else {
//   alert(cityToCheck + " not on the list");
// }



/** with for loop **/
// var cleanestCities = ["lahore", "islamabad", "murree", "hunza"];
// var cityToCheck = prompt("Enter city name");
// for (var i = 0; i < cleanestCities.length; i++) {
//   if (cityToCheck === cleanestCities[i]) {
//     alert("It's one of the cleanest cities");
//   }
// }



/** break statement **/

// for (var num = 0; num <= 10; num++) {
//   document.write(num + "<br>");
//   if (num === 5) {
//     break;
//   }
// }



// var cleanestCities = ["lahore", "islamabad", "murree", "hunza"];
// var cityToCheck = prompt("Enter city name");
// for (var i = 0; i < cleanestCities.length; i++) {
//   if (cityToCheck === cleanestCities[i]) {
//     alert("It's one of the cleanest cities");
//     break;
//   }
// }





/** flags **/
/** problem - without flags **/
// var cityToCheck = prompt("Enter city name");
// var cleanestCities = ["lahore", "islamabad", "murree", "hunza"];

// for (var i = 0; i < cleanestCities.length; i++) {
//   if (cityToCheck === cleanestCities[i]) {
//     alert("It's one of the cleanest cities");
//   } else {
//     alert("city not matched");
//   }
// }


/** solution - with flags **/
// var cityToCheck = prompt("Enter city name");
// var cleanestCities = ["lahore", "islamabad", "murree", "hunza"];
// var matchFound = false; //flag

// for (var i = 0; i < cleanestCities.length; i++) {
//   if (cityToCheck === cleanestCities[i]) {
//     matchFound = true;
//   }
// }

// if (matchFound === true) {
//   alert("It's one of the cleanest cities");
// }
// else if (matchFound === false) {
//   alert("city not matched");
// }




/** nested for loops **/
// var firstNames = ["Ali", "Sami", "Bilal"];
// var lastNames = ["Khan", "Baig"];

// for (var i = 0; i < firstNames.length; i++) {
//   for (var j = 0; j < lastNames.length; j++) {
//     document.write(firstNames[i] + " " + lastNames[j]);
//     document.write("<br>");
//   }
// }



// for (var i = 0; i < 4; i++) // 4 times
// {
//   for (var t = 0; t <= 2; t++) // 3 times
//   {
//     alert("Hello");
//   }
// }
/** 4 * 3 = 12 times */




/** when no curly braces are used, first immediate statement is 
 considered as it's in the body of the statement **/
// var myArray = [2, 5, 2, 4];
// for (var i = 0; i < myArray.length; i++)
//   console.log(myArray[i]);
// alert("done!");

/*
 here,

 for (var i = 0 ; i < myArray.length; i++)
    console.log(myArray[i]);

 is same as

 for (var i = 0 ; i < myArray.length; i++)
 {
    console.log(myArray[i]);
 }

 */


/** for loop - optional statements **/

// var num = 0;
// for (; num <= 10; num++) {
//   document.write(num + "<br>");
// }


/** for loop - optional statements **/

// for (var num = 0; ; num++) {
//   if (num <= 10) {
//     document.write(num + "<br>");
//   }
//   else {
//     break;
//   }
// }


/** for loop - optional statements **/

// for (var num = 0; num <= 10;) {
//   document.write(num + "<br>");
//   num++;
// }
