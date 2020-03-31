
var message = "Hello World!";
document.write(message + "<br>");

/** Upper Case **/

// message = message.toUpperCase();
// document.write(message + "<br>");


/** Lower Case **/
// document.write(message.toLowerCase() + "<br>");



/** Problem - we don't know user gives input in which case **/

// var availableFruits = ["Orange", "Banana", "Apple"];
// var input = prompt("What do you want to buy?"); //orange, ORANGE, Orange, oRaNge

// for (var i = 0; i < availableFruits.length; i++) {
//     if (availableFruits[i] === input) {
//         document.write(input + " is available");
//     }
// }


/** Solution -  **/
/** Step 1 - convert the array elements to known case **/
/** Step 2 - convert the user input to known case **/

// var availableFruits = ["orange", "banana", "apple"];
// var input = prompt("What do you want to buy?");
// input = input.toLowerCase();

// for (var i = 0; i < availableFruits.length; i++) {
//     if (availableFruits[i] === input) {
//         document.write(input + " is available");
//     }
// }

//OR

//        var availableFruits = ["ORANGE", "BANANA", "APPLE"];
//        var input = prompt("What do you want to buy?");
//
//        for (var i = 0; i < availableFruits.length; i++)
//        {
//            if(availableFruits[i] === input.toUpperCase())
//            {
//                document.write(input + " is available");
//            }
//        }


/** String length **/

// var country = "Pakistan ";
// document.write("<br><br>");
// document.write("String: " + country);
// document.write("<br>");
// document.write("Length of the string: " + country.length);
// document.write("<br><br>");


/** String - accessing characters of a string **/

// var str = "hello";
// var value = str.charAt(1); //e
// alert(value);
//var value = str.charAt(str.length-1); //last character
// alert(value);

/*
    arr[0]          //first element of an array
    str.charAt(0);  //first character of a string
*/



/** String - copy some portion of a string **/
/** str.slice(startIndex, EndIndex+1) **/


// var str = "Pakistan";
//str.slice(startIndex, EndIndex+1)
// alert(str.slice(1, 5));



/** Example - using case conversion and slicing **/

// var message = "HELLO World";
// document.write("<br>");
// document.write("Message: " + message + "<br>");
// var firstLetter = message.slice(0, 1);
// var remainingString = message.slice(1);

// firstLetter = firstLetter.toUpperCase();
// remainingString = remainingString.toLowerCase();

// document.write("Message after case conversion: ");
// document.write(firstLetter + remainingString);

// var message = "the second, second the second world war";
// alert(message.indexOf("second"));             //4
// alert(message.lastIndexOf("second"));         //23
// alert(message.lastIndexOf("third"));          //-1




// var text = "The Second World War, Second, second";

// document.write(text + "<br>");
// document.write(text.replace("second", "third") + "<br>");
// document.write(text.replace(/second/g, "third") + "<br>"); // search & replaces globally
// document.write(text.replace(/second/i, "third") + "<br>"); // case insensitive search & replace
// document.write(text.replace(/second/gi, "third")); //both



// var message = "hello world";
// document.write("String: " + message + "<br>");
// document.write("Length: " + message.length);


// var message = "hello world";
// document.write("String: " + message + "<br>");
// document.write("Element: " + message.charAt(16));
