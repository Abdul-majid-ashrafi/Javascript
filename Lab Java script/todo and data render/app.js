// function myFunc(fieldID, setField) {
// var getInputValue = 
// document.getElementById(fieldID).value
// document.getElementById(setField).value = getInputValue
// console.log(getInputValue)
// }




function myFucntion() {
    var getInput = document.getElementById('inputField').value
    var newTag = document.createElement('LI')
    var tagText = document.createTextNode(getInput)
    newTag.appendChild(tagText)
    document.getElementById('list').appendChild(newTag)
}

















function myFunction() {
    var myName = document.getElementById('userName').value;
    var myEmail = document.getElementById('email').value;
    var parentTable = document.getElementById('renderTable');

    var newRow = document.createElement('tr');
    var nameElement = document.createElement('td');
    var emailElement = document.createElement('td');

    var nameText = document.createTextNode(myName);
    var emailText = document.createTextNode(myEmail);

    nameElement.appendChild(nameText);
    emailElement.appendChild(emailText);

    newRow.appendChild(nameElement);
    newRow.appendChild(emailElement);
    parentTable.appendChild(newRow);
}















