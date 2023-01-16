//Variables to use throughout logic
//These will help intialise key parts of the quiz
var score = 0
var timeLeft = 75
var timeInterval
var startButton = document.querySelector("#start");


//starting the quiz
function startQuiz()

var sScreen = document.getElementById("start-screen");

start.Screen.classList.add("hide");

//run the quiz and show the questions
var qScreen = document.getElementByID("questions");
qScreen.classList.remove("hide");
