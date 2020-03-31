
/** Get Current Date **/

// var rightNow = new Date();
// document.write(rightNow + "<br>");



// var rightNow = new Date();
// var times = rightNow.toLocaleTimeString();
// document.write(times + "<br>");
// var completeDateInString = rightNow.toDateString();
// document.write(completeDateInString + "<br>");
// var completeTimeInString = rightNow.toTimeString();
// document.write(completeTimeInString + "<br>");
// var inJSON = rightNow.toJSON();
// document.write(inJSON + "<br>");


// var rightNow = new Date();
// document.write(rightNow.getDate() + "<br>");
// document.write(rightNow.getMonth() + "<br>");
// document.write(rightNow.getHours() + ":" + rightNow.getMinutes() + ":" + rightNow.getSeconds() + "<br>");
// document.write(rightNow.getHours() + "hrs , " + rightNow.getMinutes() + " minutes<br>");
// document.write(rightNow.getFullYear() + "<br>");
// document.write(rightNow.getSeconds() + "<br>");
// document.write(rightNow.getMilliseconds() + "<br>");


/** Get Time - milliseconds from January 1, 1970 **/
// var rightNow = new Date();
// document.write(rightNow.getTime() + "<br>");


/** Get Current Day **/

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var rightNow = new Date();
// var theDay = rightNow.getDay();
// var nameOfToday = dayNames[theDay];
// document.write(nameOfToday);


/** Set Date **/

// var myBirthday = new Date("June 30, 2015");
// document.write(myBirthday);


// var rightNow = new Date();
// var y = rightNow.getFullYear();
// var m = rightNow.getMonth();
// var d = rightNow.getDate();
// var myBirthday = new Date(y, m, d).toDateString();
// document.write(myBirthday);




/**
get first and last fifteen days of the month according to date
*/
// var date = new Date()//, y = date.getFullYear(), m = date.getMonth();
// if (16 > date.getDate()) {
//     for (var d = 1; d < 16; d++) {
//         var fifteenDays = new Date(date.getFullYear(), date.getMonth(), d).toDateString();
//         console.log(fifteenDays)
//         document.write(fifteenDays + "<br>")
//     }
// }
// else {
//     var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
//     for (var d = 16; d <= lastDay; d++) {
//         var fifteenDays = new Date(date.getFullYear(), date.getMonth(), d).toDateString();
//         console.log(fifteenDays)
//         document.write(fifteenDays + "<br>")
//     }
// }