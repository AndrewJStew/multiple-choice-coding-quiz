//Variables to use throughout logic
//These will help intialise key parts of the quiz
var score = 0
var timeLeft = 75
var timeInterval
var Qindex = 0;
//var startButton = document.querySelector("#start"); don't think I need this


//starting the quiz
function startQuiz() {

    var sScreen = document.getElementById("start-screen");

    sScreen.classList.add("hide");

    //run the quiz and show the questions
    var qScreen = document.getElementByID("questions");
    qScreen.classList.remove("hide");

    // start the timer
    startTimer();

    //show questions
    displayQuestions();
}

//new event listener to start quiz
document.getElementById("start").addEventListener("click", startQuiz);
