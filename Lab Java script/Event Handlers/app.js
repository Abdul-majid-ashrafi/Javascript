// function expandLoris() {
//     var expandedParagraph = "Slow lorises are a group of several " +
//         "species of trepsirrhine primates which make up the genus " +
//         "Nycticebus. They have a round head, narrow snout, large eyes, " +
//         "and a variety of distinctive coloration patterns that are species-dependent. " +
//         "The hands and feet of slow lorises have several adaptations that give them " +
//         "a pincer-like grip and enable them to grasp branches for long periods of time." +
//         " Slow lorises have a toxic bite, a rare trait among mammals.";
//     document.getElementById("slowLoris").innerHTML = expandedParagraph;
// }










// function bigImg(x) {
//     x.style.height = "64px";
//     x.style.width = "64px";
//     x.src = 'apple-iphone6s.jpg'
// }

// function normalImg(x) {
//     x.style.height = "32px";
//     x.style.width = "32px";
//    // x.src = 'http://wojdylosocialmedia.com/wp-content/uploads/2015/04/Screen-Shot-2015-04-06-at-3.41.55-PM.png'
// }













// <!--Mouse Events onmousemove onmouseenter onmouseover-->
// var x = 0;
// var y = 0;
// var z = 0;

// function myMoveFunction() {
//     document.getElementById("demo").innerHTML = z += 1;
// }

// function myEnterFunction() {
//     document.getElementById("demo2").innerHTML = x += 1;
// }

// function myOverFunction() {
//     document.getElementById("demo3").innerHTML = y += 1;
// }















// onSubmit Event 
// function getFormValues() {
//     var emailID = document.getElementById('emailID').value;
//     var gender = document.getElementById('gender').value;
//     alert(emailID + " " + gender);
// }




















// onbeforeunload events
// function myFunction() {
//     // var textBox = document.getElementById('textBox').value
//     // if (textBox) {
//         return "All data that you have entered will be lost!"
//     // }
// }

















    // <!--EventListener-->
// function myFunction(){
//     alert(98765)
// }
// document.getElementById("demo").addEventListener("mousemove", myFunction);



















// // onblur
// function myFunction() {
//     var x = document.getElementById("demo");
//     val = x.value.toUpperCase();
//     document.getElementById('head').innerHTML = val
// }

// // // // onfocus
// function focusFunction(x) {
//     x.style.height = "32px";
//     x.style.width = "232px";
//     x.style.fontSize = '23px'
// }


















// function checkInput(textbox) {
//     var textInput = document.getElementById(textbox).value;
//     console.log(textbox.value)
//     alert(textInput);
// }













// function msg() {
//     // confirm("Are you sure to reset")
//     alert("This alert box was triggered by the onreset event handler");
// }












// function myFunction() {
//     alert(87654)
//     // document.getElementById("demo").innerHTML = "Hello World";
// }










// onkeyup
function myFunction() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
    document.getElementById('demo').innerHTML = x.value
}










