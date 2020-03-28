// Let's assign some string values to some variables.

// The variable names are all the same except they end in different numbers
var city0 = "Karachi";
var city1 = "Lahore";
var city2 = "Islamabad";
var city3 = "Murree";
var city4 = "Pakpattan";
var city5 = "Faisalabad";

// alert("Welcome to " + city3);





/**
 Array
 I'm going to show you another type of variable, Called Array
 In JavaScript, array is a single variable that is used to store different elements.
 It is often used when we want to store list of elements and access them
 by a single variable.
*/

var cities = ["Karachi", "Lahore", "Islamabad", "Murree", "Pakpattan", "Faisalabad"];
// alert("Welcome to " + cities[0]);// karachi

/**
 you can control to each element by writing the array name
 "cities" in this case—followed by a number enclosed in square brackets. cities[0] is "Karachi"
 cities[1] is "Lahore", and so on.
 Because JavaScript automatically numbers array elements, you have no say in the
 numbering. The first element in the list always has an index of 0, the second element an index
 of 1, and so on.
 */


/**
 Mix values
 An array can be assigned any type of value that you can assign to ordinary variables. You
 can even mix the different types in the same array.
*/
var mixedArray = [123, "Muheeb", "Developer", true];
// alert(mixedArray[1]) // muheeb

/**
 In the example above, mixedArray[0] has a numerical value of 123, mixedArray[1] has a
 string value of "Muheeb", and so on.
 */

/**
 Things to keep in mind:
 * The first item always has an index of 0, not 1. This means that if the last item in the list
 has an index of 9, there are 10 items in the list.
 * The same naming rules you learned for ordinary variables apply.Only letters, numbers, $
 and _ are legal.The first character can't be a number. No spaces.
 *  Coders often prefer to make array names plural—cities instead of city, for example—
 since an array is a list of things.
 * Like an ordinary variable, you declare an array only once.If you assign new values to an
 array that has already been declared, you drop the var.
 */

/**
 you can declare an empty variable, one that doesn't
 have a value.Then you can assign it a value whenever you like.And you can change its value
 at will.You can do all these things with an array, as well.
 This is how you declare an empty array.
 */

var fruits = [];
/**
 Array fruits has already been declared.This is how you assign values to it.
 */
fruits[0] = "Mango";
fruits[1] = "Peach";
fruits[2] = "Banana";
/**
 Now, if you refer to fruits[0], you'll get "Mango". If you refer to fruits[2], you'll get
"Banana".But if you refer fruits[4], fruits[5] you'll get undefined.
 */
// alert(fruits[0]) // Mango
// alert(fruits[1]) // Peach
// alert(fruits[6]) // undefiend





/**
 Array methods
 Adding and removing elements
 Removing, inserting, and extracting elements
 */

/**
* push      = Add an element to end of an array
* pop       = Removes last element of an array
* unshift   = Add an element to start of an array
* shift     = Removes first element of an array
* splice    = Add/Remove array elements at/from any position
* slice     = copy an array
* indexOf   = find index or position of a specific element
 */


/**
 push:
 Using the keyword, push, you can add one or more elements to the end of an array
 */
// var fruits = ["Mango", "Peach", "Banana"];
// document.write("<br><h4>push</h4>");
// document.write("<br>Fruits: " + fruits);

// fruits.push("Apple");
// document.write("<br>Fruits: " + fruits);

// fruits.push("Water Melon", "Grapes", "Melon");
// document.write("<br>Fruits: " + fruits);

// fruits.push("Grapes");
// document.write("<br>Fruits: " + fruits);
// document.write("<br>Total fruits " + fruits.length);




// /** an alternate way to push in an array **/
// var fruits = ["Apple", "Orange"];
// document.write("<br>Fruits: " + fruits);

// fruits[fruits.length] = "Mango";
// fruits[fruits.length] = "Banana";
// document.write("<br>Fruits: " + fruits);







/** pop:
 Use the pop method to remove an element from the end of the array.
  **/
// var fruits = ["Mango", "Peach", "Banana", "Apple", "Grapes", "Melon"];
// document.write("<br><h4>pop</h4>");
// document.write("<br>Fruits: " + fruits);

// fruits.pop();
// document.write("<br>Fruits: " + fruits);

// fruits.pop();
// fruits.pop();
// document.write("<br>Fruits: " + fruits);








/** unshift:
     Using the keyword, unshift, you can add one or more elements to the beginning of an array
  **/
// var fruits = ["Mango", "Peach", "Banana"];
// document.write("<br><h4>unshift</h4>");
// document.write("<br>Fruits: " + fruits);

// fruits.unshift("Apple");
// document.write("<br>Fruits: " + fruits);

// fruits.unshift("Water Melon", "Grapes", "Melon");
// document.write("<br>Fruits: " + fruits);

// fruits.unshift("Grapes");
// document.write("<br>Fruits: " + fruits);
// document.write("<br>Total fruits " + fruits.length);








/** shift:
 Use the shift method to remove an element from the beginning of an array.
  **/
// var fruits = ["Mango", "Peach", "Banana", "Apple", "Grapes", "Melon"];
// document.write("<br><h4>shift</h4>");
// document.write("<br>Fruits: " + fruits);

// fruits.shift();
// document.write("<br>Fruits: " + fruits);

// fruits.shift();
// fruits.shift();
// document.write("<br>Fruits: " + fruits);
// console.log(fruits);









/** splice:
 The splice method to insert and remove one or more elements anywhere in an array
   **/
/*
    fruits.splice(index, noOfElementsToRemove, elementsToAdd);
*/
// var fruits = ["Mango", "Grapes", "Peach", "Banana"];
// document.write("<br><h4>splice</h4>");
// document.write("<br>Fruits: " + fruits);

// fruits.splice(2, 1);
// document.write("<br>Remove Fruit(s): " + fruits);

// var fruits = ["Mango", "Grapes", "Peach", "Banana"];
// fruits.splice(2, 0, "Apple");
// document.write("<br>Add Fruit(s): " + fruits);

// var fruits = ["Mango", "Grapes", "Peach", "Banana"];
// fruits.splice(2, 0, "Apple", "Orange", "Melon");
// document.write("<br>Add Multiple Fruits: " + fruits);

// var fruits = ["Mango", "Grapes", "Peach", "Banana"];
// fruits.splice(2, 1, "Apple");
// document.write("<br>Add & Remove Fruit(s): " + fruits);










/** slice:
 The slice method to copy one or more consecutive elements in any position and put
 them into a new array
  **/
/*
 fruits.slice(startIndex, endIndex+1);
 */
// var fruits = ["Mango", "Grapes", "Peach", "Banana", "Orange"];
// document.write("<br><h4>slice</h4>");
// document.write("<br>Fruits: " + fruits);

// var copyFruits = fruits.slice(0, 2);
// document.write("<br>Copy Fruit(s): " + copyFruits);







// /** indexOf **/
// var fruits = ["orange", "banana", "apple"];
// alert(fruits.indexOf("banana"));    // 1
// alert(fruits.indexOf("apple"));     // 2
// alert(fruits.indexOf("peach"));     // -1








// /** multidimensional array **/
// var multi = [[], [], []];
// alert(multi.length); //3
// var multi = [[1, 2], [3, 4], [5, 6]];
// alert(multi.length);    // 3
// alert(multi[0]);        // 1,2
// alert(multi[1]);        // 3,4
// alert(multi[2]);        // 5,6
// alert(multi[0].length); // 2
// alert(multi[0][0]); // 1
// alert(multi[0][1]); // 2
// alert(multi[1][0]); // 3
// alert(multi[1][1]); // 4
// alert(multi[2][0]); // 5
// alert(multi[2][1]); // 6