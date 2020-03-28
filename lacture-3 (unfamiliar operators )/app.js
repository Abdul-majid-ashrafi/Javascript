/**
 * There are several specialized math expressions you need to know
 */
 /**Increment / Decrement Operators */

// var count = 5;
// var updatedCount = count + 1;
// alert(updatedCount);
// alert(count);



// var age = 12;
/** alternate ways to increment a value */  
// age = age + 1;
// age += 1;
// age++; //increment operator



/** alternate ways to decrement a value */  
// age = age - 1;
// age -= 1;
// age--; //decrement operator



/** increment 3 numbers in a value */  
// age = age + 3;
// age += 3;



// var count = 19;
// count--;
// alert(count);
// count--;
// alert(count);



// ===================Post Increment & Pre Increment Operators===================  
// var num = 2;
// num++; //post increment operator
// ++num; //pre increment operator
// alert(num)


/**post increment in an expression */ 
// var age = 20;
// var newAge = age++;
// alert(newAge);
// alert(age);


/**pre increment in an expression */ 
// var age = 20;
// var newAge = ++age;
// alert(newAge);
// alert(age);



/** Same precedence - Left to Right  **/
// var result = 3 + 2 - 3;
// alert(result); //2

/** Different precedence - BODMAS or Javascript precedence rules  **/
// var result = 3 + 2 * 3;
// alert(result); //9


/** to eliminate ambiguity or confusion, use brackets  **/
// var result = 3 + (2 * 3);
// alert(result); //9

// var result = (3 + 2) * 3;
// alert(result); //15


// var answer = 4 / 2 * 2;
// alert(answer); //4
// var answer = 4 / (2 * 2);
// alert(answer); //1
// var answer = (4 / 2) * 2;
// alert(answer); //4
// var answer = (2 * 4) * (4 + 2);
// alert(answer);
