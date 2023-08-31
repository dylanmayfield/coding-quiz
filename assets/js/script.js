

var questionElement = document.querySelector("#question");
var reponsesElement = document.querySelector("#answer-buttons");
var nextElement = document.querySelector("#next");
var startButton = document.querySelector('#startbutton');

var questionIndex = 0;
var score = 0;


// Generate your data/carousel
var questions = [
    { question: "What is a function", responses: [ "Resuable code", "Primitive value", "None of the above" ], answer: 0 },
    { question: "What is an array", responses: [ "List of values", "Key value pairs", "None of the above" ], answer: 2 },
    { question: "What is a primitive value ", responses: [ "123", "1234", "None of the above" ], answer: 2 },
    { question: "What is the abbreviation JSON", responses: [ "JASON", "Javascript notation object", "None of the above" ], answer: 1 },
  ];


function startQuiz() {
    questionIndex = 0;
    score = 0;
    startButton.innerHTML = "Start Quiz";
    showQuestion();
}

function showQuestion(){
    var currentQuestion = questions[questionIndex];
    var questionNo = questionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(responsesElement => {
        var button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn')
        responsesElement.appendChild('button');
        
    });
}
startQuiz();

  
  
  // Navigate through list of questions
  function navigate(direction) {
    index = index + direction;
    // If you try to navigate 'back' from the start
    // Go to last question
    if (index < 0) { 
      index = images.length - 1; 
    
      // If you are at the very end. 
      // Go to the first image/question
    } else if (index > images.length - 1) { 
      index = 0;
    }
   
    // Render the question
    renderQuestion();
    // render the answer
    renderAnswers();
  }
    
  
  // renders the question
  function renderQuestion() {
    // Update the html with the current question
    questionElement.textContent = questions[index].question;
  }
  
  function renderAnswers() {
    console.log("questions object",questions[index]);
    console.log("list of responses", questions[index].responses);
    // Clears the html by settting innerHTML to an empty string.
    questionResponseElement.innerHTML = "";
    for (var i = 0; i < questions[index].responses.length; i++ ) {
      console.log(questions[index].responses[i]);
      var li = document.createElement("li");
      li.textContent = questions[index].responses[i];
      questionResponseElement.appendChild(li);
    }
  }

console.log(questionElement)
