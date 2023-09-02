

var questionElement = document.querySelector("#question");
var responsesElement = document.querySelector("#answer-buttons");
var questionBox = document.querySelector("#question-box");
var startButton = document.querySelector("#startbutton");
var quizArea = document.querySelector("#quiz-area");
var timer = document.querySelector("#timer");
var score = document.querySelector("#score");

var questionIndex = 0;
var score = 0;
var secondsLeft = 60


var questions = [
    { question: "What does the abbreviation HTML represent?", responses: [ "Hot Tamales", "Primitive value", "Hypertext Markup Language" ], answer: "Hypertext Markup Language" },
    { question: "What is a string used for? ", responses: [ "Storing and manipulating text", "Key value pairs", "None of the above" ], answer: "Storing and manipulating text" },
    { question: "What does the abbreviation CSS represent? ", responses: [ "Code Site Server", "Code Style Sheets", "Cascading Style Sheets" ], answer: "Cascading Style Sheets" },
    { question: "What is the abbreviation JSON", responses: [ "JASON", "Javascript Object Notation", "Jason's Son" ], answer: "Javascript Object Notation" },
  ]


function startQuiz() {
    questionIndex = 0;
    score = 0;
    startButton.innerHTML = "Start Quiz";
    questionBox.classList.add("hide");
    quizArea.classList.remove("hide");
    timer.classList.remove("hide");
    showQuestion();
    setTime();
  }

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft + " Seconds Remaining.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    }

    if (secondsLeft === 0) {
      quizArea.classList.add("hide");
    }

  }, 1000);
}



function showQuestion() {
    var currentQuestion = questions[questionIndex];
    var questionNo = questionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    responsesElement.innerHTML = ""
    currentQuestion.responses.forEach(answers => {
        var button = document.createElement('button');
        console.log(answers)
        button.onclick = function(event) {checkAnswer(event)}
        button.innerHTML = answers;
        button.classList.add('btn');
        responsesElement.append(button);
    });
}

function nextQuestion() {
  questionIndex = questionIndex + 1;
  showQuestion();
}

function checkAnswer(event) {
console.log(event);
console.log(event.target.innerHTML);
var userChoice = event.target.innerHTML;
var correctAnswer = questions[questionIndex].answer;
if (userChoice === correctAnswer) {
  var result = "Correct"
  nextQuestion()
} else {
  var result = "Incorrect"
  secondsLeft = secondsLeft - 10;
  nextQuestion()
} 
}






startButton.addEventListener("click", startQuiz);


  
  



