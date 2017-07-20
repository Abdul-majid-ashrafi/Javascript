var quizname = document.getElementById('quizName');
var totalMarks = document.getElementById('quizMarks');
var timeDuration = document.getElementById('quizTime');
var syllabus = document.getElementById('quizSyllabus');

function quizSectionSubmit() {
    var quiz = {
        quizName: quizname.value,
        totalMarks: totalMarks.value,
        timeDuration: timeDuration.value,
        syllabus: syllabus.value,

    }
    localStorage.setItem('quizSectionData', JSON.stringify(quiz));
    location = '../addQuiz/addQuestion.html';

}

