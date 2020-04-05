/**Consider this chain of conditional statements. */

// var dayOfWk = 'Sunday';
// if (dayOfWk === 'Sunday') {
//     alert("It's study time");
// }
// else if (dayOfWk === 'Monday') {
//     alert("My work week begins");
// }
// else if (dayOfWk === 'Wednesday') {
//     alert("It's mid of the week");
// }

/**
If it's a weekend day, the "Whoopee!" alert displays. If it's Friday, the "TGIF" alert
displays. If it's a weekday, the "Shoot me now" alert displays.
It works, but it's unwieldy and a little ugly, especially if you have many conditions to test.
It's time for you to learn a more elegant alternative that you can use for testing myriad
conditions, the switch statement. The more conditions you need to test, the more you'll like the
switch statement. This switch statement duplicates the functionality of the example above
 */

// var dayOfWk = 'Sunday';
// switch (dayOfWk) {
//     case 'Sunday':
//         alert("It's study time");
//         break;
//     case 'Monday':
//         alert("My work week begins");
//         break;
//     case 'Sunday':
//         alert("It's mid of the week");
//         break;
// }




// var num = 2;
// switch (num) {
//     case 1:
//         alert("One");
//         break;
//     case 2:
//         alert("Two");
//         break;
//     case 3:
//         alert("Three");
//         break;
//     default:
//         alert("Not found!");
// }




// var dayOfWk = 'Sunday';
// switch (dayOfWk) {
//     case 'Sunday':
//         alert("It's study time");
//         break;
//     case 'Monday':
//         alert("My work week begins");
//         break;
//     case 'Tuesday':
//     case 'Wednesday':
//     case 'Thursday':
//     case 'Friday':
//         alert("It's mid of the week");
//         break;
//     default:
//         alert("Something went wrong");
// }


// var num = 100;
// switch (true) {
//     case (num > 200):
//         alert("Greater than 200");
//         break;
//     case (num > 99 && num < 120):
//         alert("Got 100");
//         break;
//     default:
//         alert("Default value" + num);
// }