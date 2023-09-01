

var questionElement = document.querySelector("#question");
var responsesElement = document.querySelector("#answer-buttons");
var questionBox = document.querySelector("#question-box");
var startButton = document.querySelector("#startbutton");
var quizArea = document.querySelector("#quiz-area");

var questionIndex = 0;
var score = 0;


// Generate your data/carousel
var questions = [
    { question: "What is a function", responses: [ "Resuable code", "Primitive value", "None of the above" ], answer: "Resuable code" },
    { question: "What is an array", responses: [ "List of values", "Key value pairs", "None of the above" ], answer: "List of values" },
    { question: "What is a primitive value ", responses: [ "123", "1234", "None of the above" ], answer: "123" },
    { question: "What is the abbreviation JSON", responses: [ "JASON", "Javascript notation object", "None of the above" ], answer: "JASON" },
  ];


function startQuiz() {
    questionIndex = 0;
    score = 0;
    startButton.innerHTML = "Start Quiz";
    questionBox.classList.add("hide");
    quizArea.classList.remove("hide")
    showQuestion();
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
  nextQuestion()
} else {
  alert("Wrong");
}
}
startButton.addEventListener("click", startQuiz);


  
  



