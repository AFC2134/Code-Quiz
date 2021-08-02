# Code-Quiz
This App is a Quiz on your coding knowledge.
I have used html, css, and java. 
if your answer is wrong a red screen will flash, if correct blue
you will have a timmer of 60 seconds


## Code HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Code Quiz</title>
    <link rel="stylesheet" href=".assets\css\.css">
</head>
<header>
  <h1 class = 'banner'>WELCOME TO COONEY'S QUESTIONS!</h1>
</header>
<body>
<div class= "time" id="count"></div>
 <div class="quiz-container">
  <div id="question-box" class ="hide">
    <div id="question">WELCOME TO COONEY'S QUESTIONS</div>
    <div id="answer-btns" class="btn-menu">
     <button class="btn">answer-btns</button>
     <button class="btn">answer-btns</button>
     <button class="btn">answer-btns</button>
     <button class="btn">answer-btns</button>
  </div>
  </div>
 <div class="menu-btns">
    <button id="start-btn"class="start-button">Start</button>
    <button id="next-btn" class="next-button hide">Next Question</button>
  </div>
  
  </div>
<script src=".assets\js\.js"></script>   
</body>
</html>

## CODE CSS
*, *::before, *::after {
    box-sizing: border-box;
}
:root {
    --hue-neutral: goldenrod;
    --hue-correct: blue;
    --hue-wrong: red;
}
.time {
    display: flexbox;
    font-size: 2.1rem;
    font-weight: bolder;
    align-self: flex-start;
}
.banner {
    display: flex;
    justify-content: center;
    font-weight: bolder;
    align-self: flex-start;
}
body {
    --hue: var(--hue-neutral);
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--hue-neutral);
    width: 100vw;
    height: 100vh;
}
body.correct {
    --hue: var(--hue-correct);
}
 body.wrong {   
     --hue: var(--hue-wrong);
    }
.quiz-container {
    width: 900px;
    height: 300px;
    padding: 20px;
    border-radius: 10px;
    background-color: green;
    box-sizing: border-box;
    box-shadow: 0 0 15px 5px;
}
.btn-menu {
    display: grid;
    grid-template-columns: repeat(2, auto);
    margin: 30px;
    gap: 50px;
    background-color: black;
    border-radius: 50px;
}
.btn {
    background-color: goldenrod ;
    border-radius: 10px;
    outline: green;
    height: 40px;
    padding: 10px 15px;
    font-size: 1.3rem;
}
.btn:hover {
    border-color: white;
}

body.correct {
    --hue: var(--hue-correct);
}
body.wrong {
    --hue: var(--hue-wrong);
}
.question-box {
    font-size: 1.3rem;
}
.start-button {
    font-size: 1.3rem;
    font-weight: bold;
}
.next-button {
    font-size: 1.3rem;
    font-weight: bold;
}
.hide {
    display:none;
}

## CODE JAVASCRIPT
var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionBoxElement = document.getElementById('question-box')
var questionElement = document.getElementById('question')
var answerButtonElement = document.getElementById('answer-btns')
var count = 60;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='TIME IS UP!';
    alert("You have run out of time!");
  }
  if (answer !== correct){ 
      button.dataset.correct = answer.correct
      interval = (interval - 10)
  }
}, 1000);


let randomQuestions, currentQuestionIndex

 startButton.addEventListener('click', startGame)
 nextButton.addEventListener('click', () => {
     currentQuestionIndex++
     nextQuestion()
 })
function startGame() {
   console.log('started')
   startButton.classList.add('hide')
   randomQuestions = questions.sort(() => Math.random() - .5)
   currentQuestionIndex = 0
   questionBoxElement.classList.remove('hide')
   nextQuestion()
}

function nextQuestion() {
    resetQuiz()
    showQuestion(randomQuestions[currentQuestionIndex])
}

function showQuestion(question) {
 questionElement.innerText = question.question
 question.answers.forEach(answer => {
     const button = document.createElement('button')
     button.innerText = answer.text
     button.classList.add('btn')
     if (answer.correct) {
        button.dataset.correct = answer.correct
     }
    button.addEventListener('click', selectAnswer) 
    answerButtonElement.appendChild(button)
 })
}
function resetQuiz() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild
        (answerButtonElement.firstChild)
    }
}

function selectAnswer(e) {
   const selectedButton = e.target
   const correct = selectedButton.dataset.correct
   setStatusClass(document.body, correct)
   Array.from(answerButtonElement.children).forEach(button => {
       setStatusClass(button, button.dataset.correct)
   })
   if (randomQuestions.length > currentQuestionIndex + 1){
   nextButton.classList.remove('hide')
} else {
    startButton.innerText = 'Play Again'
    startButton.classList.remove('hide')
}
}
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


const questions = [
    {
        question: 'What is an example of a 3rd party API?',
        answers: [
            { text: 'Bootstrap', correct: true},
            { text: 'javahubs', false: false},
            { text: 'github', false: false},
            { text: 'debugger', false: false},
        ]
    },
    {
        question: 'What does HTML stand for?',
        answers: [
            { text: 'Hyptertext Markup Languague', correct: true},
            { text: 'Hyperfast Modal Language', false: false},
            { text: 'Hyper-timed Markup Languague', false: false},
            { text: 'Hexidecimal Triggered Markup Language', false: false},
        ]
    },{
        question: 'Who invented the intenet?',
        answers: [
            { text: 'US military through the ARPANET', correct: true},
            { text: 'Al Gore', false: false},
            { text: 'Bill Gates', false: false},
            { text: "NASA", false: false},
        ]
    },{
        question: 'Which of these 3rd party APIs would I use with Javascript?',
        answers: [
            { text: 'jquery', correct: true},
            { text: 'Bootstrap', false: false},
            { text: 'VS Code', false: false},
            { text: 'GitBash', false: false},
        ]
    },{ question: 'Which of these is not a DOM method?',
    answers: [
        { text: 'querySelector', correct: true},
        { text: 'createElement', false: false},
        { text: 'setAttribute', false: false},
        { text: 'function', false: false},
    ]

    },
]       

