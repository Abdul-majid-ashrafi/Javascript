// var plan1 = {
//     name: "Basic",
//     price: 3.99,
//     space: "100 gb",
//     data: "1000 gb/mo",
//     pages: 10,
//     discountMonth: ["JAN", "JUN", "SEP"]
// };
// document.write(plan1.name);
// document.write("<br>");
// document.write(plan1.discountMonth);
// // plan1.TotalPrice = 5.00;
// document.write("<br>");
// document.write(plan1.price);
// document.write("<br>");
// // document.write(plan1.TotalPrice);

// console.log(plan1)



// var plan1 = {
//     name: "Basic",
//     price: 3.99,
//     space: "100 gb",
//     data: "1000 gb/mo",
//     pages: 10,
//     discountMonth: ["JAN", "JUN", "SEP"],
//     isActive: true
// };

// console.log(plan1)
// plan1.currentMonth = "JUL";
// console.log(plan1)

// console.log(plan1.currentMonth)
// console.log(plan1.discountMonth[2]);
// console.log(plan1["name"]);
// console.log(plan1["price"]);
// console.log(plan1["data"]);
// console.log(plan1["discountMonth"][2]);




// var plan1 = {
//     name: "Basic",
//     price: 3.99,
//     data: "1000 gb/mo",
//     pages: 10,
//     discountMonth: ["JAN", "JUN", "SEP"],
//     isActive: true,
//     today: {
//         date: "4/10/2020",
//         time: "3:37 AM"
//     }
// };

// console.log(plan1);
// console.log(plan1.today);
// console.log(plan1.today.date);
// delete plan1.space; // delete obj value
// console.log(plan1);




// var student2 = {
//     name: "Majid",
//     age: 21,
//     rollNumber: "B456",
//     admissionYear: 2012
// };

// function getYears() {
//     var today = new Date();
//     var currentYear = today.getFullYear();
//     return currentYear - student2.admissionYear;
// }
// console.log(getYears())




// var student2 = {
//     name: "Majid",
//     age: 21,
//     rollNumber: "B456",
//     admissionYear: 2012,
//     getYears: function () {
//         var today = new Date();
//         var currentYear = today.getFullYear();
//         return currentYear - student2.admissionYear;
//     }
// };
// console.log(student2)
// document.write("Years : " + student2.getYears());





////////////////////////// Constructor///////////////////////////////

// var plan1 = {
//     name: "Basic",
//     price: 3.99,
//     data: "1000 gb/mo",
//     pages: 10
// };

// var plan2 = {
//     name: "Pro",
//     price: 3.99,
//     data: "1000 gb/mo",
//     pages: 10
// };

// var plan3 = {
//     name: "Ultimate",
//     price: 3.99,
//     data: "1000 gb/mo",
//     pages: 10
// };



// constructor
// function Plan(naam, paisay, samaan, safhat) {
//     this.name = naam;
//     this.price = paisay;
//     this.data = samaan;
//     this.pages = safhat;
// }
// var plan1 = new Plan("Basic", 3.99, "1000 gb/mo", 10);
// var plan2 = new Plan("Golden", 5.99, "2000 gb/mo", 20);
// plan1.cuont = 123
// plan1.lastName = "Majid"
// plan2.lastName = "Haider"

// console.log(plan1)
// console.log(plan2)




// function Plan(naam, paisay, samaan, safhat, saal) {
//     this.name = naam;
//     this.price = paisay;
//     this.data = samaan;
//     this.pages = safhat;
//     this.regYear = saal;
//     this.getYears = function () {
//         var today = new Date();
//         var currentYear = today.getFullYear();
//         return currentYear - this.regYear;
//     }
// }

// var plan1 = new Plan("Basic", 3.99, "1000 gb/mo", 10, 2000);
// var plan2 = new Plan("Pro", 4.99, "2000 gb/mo", 15, 2010);

// document.write(plan1.getYears());
// document.write("<br>");
// document.write(plan2.getYears());




// function Plan(naam, paisay, samaan, safhat, saal) {
//     this.name = naam;
//     this.price = paisay;
//     this.data = samaan;
//     this.pages = safhat;
//     this.regYear = saal;
//     this.category = "broadband";
// }
// // console.log(new Plan()) // see eample that why using this

// Plan.prototype.category = "Broadband";

// Plan.prototype.getYears = function (abc) {
//     // alert(abc)
//     var today = new Date();
//     var currentYear = today.getFullYear();
//     return currentYear - this.regYear;
// }
// var plan1 = new Plan("Basic", 3.99, "1000 gb/mo", 10, 2015);
// document.write(plan1.getYears());




// function Plan(naam, paisay, samaan, safhat, saal) {
//     this.name = naam;
//     this.price = paisay;
//     this.data = samaan;
//     this.pages = safhat;
//     this.regYear = saal;
// }

// var plan1 = new Plan("Basic", 3.99, "1000 gb/mo", 10, 2000);

// // loop for object
// for (p in plan1) {
//     document.write(p + " : " + plan1[p] + "<br>");
// }




// function Plan(naam, paisay, samaan, safhat, saal) {
//     this.name = naam;
//     this.price = paisay;
//     this.data = samaan;
//     this.pages = safhat;
//     this.regYear = saal;
// }

// Plan.prototype.getYears = function () {
//     var today = new Date();
//     var currentYear = today.getFullYear();
//     return currentYear - this.regYear;
// }

// var plan1 = new Plan("Basic", 3.99, "1000 gb/mo", 10, 2000);

// var exists = "getYears" in plan1;
// alert(exists);
