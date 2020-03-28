/**
 A variable is created when you write var (for variable and this is a keyword) followed by the name that you choose to give it.
It takes on a particular value when you assign the value to it.
This is a JavaScript statement that creates the variable name and assigns the value "Majid" to it.
 */

// var userName = "Majid";
/**
 *  Now the variable userName refers to the text string "Majid".
 *  Note that it was my choice to call it userName.
 *  I could have called it myName, firstName, abc, or something else.
 *  It's up to me how to name my variables, within limits
 */


/**variable declaration  */
// var country;
// alert(country); //undefined

/**variable initialization  */
// country = "Pakistan";
// alert(country); // Pakistan

/**now I'am going to create some string variables */
// var fullName = "Majid Ashraf";
// var email = "majidashrafkhan2@gmail.com";
// var rollNumber = "A12C";
// var subject = "Chemistry";

// alert(fullName);
// alert(email);
// alert(rollNumber);

// var contactNumber = "";
// var address;
// var gender = "Male";

// rollNumber = "1912" // here is I'am updateing rollNumber variable
// contactNumber = "92308-*******";
// address = "abc................";

// alert(contactNumber);
// alert(rollNumber); // here is show new value which is assigned
// alert(address);



// ============================Concatenating text strings========================
// var str1 = "I am ";
// var str2 = "Pakistani";
// var combinedString = str1 + str2;
// alert(combinedString); //I am Pakistani


// var username = "Majid";
// alert("Good Morning, " + "!");
// alert("Good Morning, " + username + "!"); //Good Morning, Majid!

// userName = "Ashraf";
// alert("Thanks, " + userName + "!"); //Thanks, Ashraf!




// =======================================Number Variable====================================
/**
A string isn't the only thing you can assign to a variable. You can also assign a number.
 */

// var num1 = 2;
// var num2 = 2;
// alert(num2)
/**You can use this variable in math calculations. */
// alert(2 + 2) //4
// alert(num1 + num2) //4

/**If you ask JavaScript to add 5 to num2 */ 
// num2 = num2 + 5;
// alert(num2) //7




// var originalNum = 23;
// var numToBeAdded = 7;
// var newNum = originalNum + numToBeAdded;
// alert(newNum) // 30




/**add two numbers  */
// var newNumber = 4 + 3;
// alert(newNumber);//7



 /**add a number and a variable */
// var num = 2;
// var newNumber1 = num + 2;
// alert(newNumber1); // 4



 /**add some value to a variable */ 
// num = num + 4;
// alert(num); // 6




/**Math Expressions */  
// var num1 = 3;
// var num2 = 10;

// var addition = num1 + num2;
// alert(addition);

// var subtraction = num2 - num1;
// alert(subtraction);

// var multiplication = num1 * num2;
// alert(multiplication);

// var division = num2 / num1;
// alert(division);

// var remainder = 10 % 3;
// alert(remainder);




/**
 If you enclose a number in quotation marks and add 7 it won't work, because JavaScript can't sum a string and a number.
 JavaScript interprets "23" as a word, not a number
 */
// var originalNum = "23";
// var newNum = originalNum + 7;
// alert(newNum) // 237

/**In the statement, it does add 23 + 7 to total 30 */
// var originalNum = 23;
// var newNum = originalNum + 7;
// alert(newNum) // 30




// ===========================Variable Names Legal and Illegal=========================
/**
 We are going to learn some rules about naming a variable:
 * You can't enclose it in quotation marks. 
 * The name can't be a number or start with a number.
 * It can't be any of JavaScript's keywords—the special words that act as programming instructions, like alert and var. 
 * A variable name can't contain any spaces.
 * A variable name can contain only letters, numbers, dollar signs, and underscores. 
 * It can contain keywords. For example, userAlert and myVar are legal. 
 * Capital letters are fine, but be careful. Variable names are case sensitive. A rose is not a Rose. 
 * I teach the camelCase naming convention which is better. 
 Examples:
 * userResponse 
 * userResponseTime 
 * userResponseTimeLimit 
 * response
 * Make your variable names descriptive, so it's easier to figure out what your code means when you or someone else comes back to it three weeks or a year from now.
 Generally, userName is better than x address is better than user or info 
 */

// var 2;            //illegal
// var 2things;      //illegal
// var .things;      //illegal
// var % things;      //illegal
// var @things;      //illegal
// var _things;      //legal
// var $things;      //legal
// var things2;      //legal
// var twoThings;    //legal
// var TwoThings;    //legal
// var Two2Things;   //legal




