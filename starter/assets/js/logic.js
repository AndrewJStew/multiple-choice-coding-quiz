//Variables to use throughout logic
//These will help intialise key parts of the quiz
var score = 0
var timeLeft = 75
var timeInterval
var qIndex = 0;
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

//start timer by using function
function startTimer() {
    timeInterval = setInterval(function () {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            endQuiz();
        }
    }, 1000);
}

// display questions function 
//start by getting question objects from the array

var questionObjects = questions[qIndex];

var questionTitle = document.getElementById("question-title");
title.textContent = questionObjects.title;

var qOptions = document.getElementById("choices");
qOptions.innerHTML = "";

questionObjects.qOptions.forEach(function (choice, i) {
    var choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("class", "choice");
    choiceBtn.setAttribute("value", choice);

    choiceBtn.textContent = i + 1 + ". " + choice;

    choiceBtn.onclick = questionClick;
});
}

//question choices function - what happens when users click on their choice

function qclick() {
    if (this.value === questions[qIndex].answer) {
        score++;
        var playAudio = 
    }
}