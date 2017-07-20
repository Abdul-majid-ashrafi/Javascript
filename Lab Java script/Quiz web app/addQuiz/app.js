var questionInput = document.getElementById('question');
var inputOption1 = document.getElementById('option1');
var correctOption1 = document.getElementById('correctOption1');
var inputOption2 = document.getElementById('option2');
var correctOption2 = document.getElementById('correctOption2');
var inputMarks = document.getElementById('marks');

function questionData(param) {
    var question = {
        question: questionInput.value,
        options: [
            {
                inputOption1: inputOption1.value,
                correct: correctOption1.value
            },
            {
                inputOption2: inputOption2.value,
                correctOption2: correctOption2.value
            }
        ],
        inputMarks: inputMarks.value
    }


    var quizSection = localStorage.getItem('quizSectionData');

    if (quizSection === null) {
        location = '../index.html';
    }
    else {
        quizSection = JSON.parse(quizSection);
    }

    if (!quizSection.questions) {
        quizSection.questions = [];
    }
    
    quizSection.questions.push(question);
    questionInput.value = '';
    inputOption1.value = '';
    correctOption1.value = '';
    inputOption2.value = '';
    correctOption2.value = '';
    inputMarks.value = '';

    localStorage.setItem('quizSectionData', JSON.stringify(quizSection));
}