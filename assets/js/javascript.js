var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionBoxElement = document.getElementById('question-box')
var questionElement = document.getElementById('question')
var answerButtonElement = document.getElementById('answer-btns')
var count = 60;
var playerScore = 0


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
        element.setAttribute("class",'correct')
        playerScore ++;
    } else {
        element.setAttribute("class",'wrong')
        count -= 3
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

// function checkAnswer() {
//     let question = questions[currentQuestionIndex];
//     let out = $('.answer').value;
// if (out == questions.answer) {
//         score++;
//     }
//     currentQuestion++;
//     if (currentQuestionIndex >= questions.length) {
//         showSummary();
//     } else {
//         showQuestion();
//     }

//     $('.sub').click(function () {
//         $('.answser').val('');
//     });
// }
var interval = setInterval(function(correct){
    document.getElementById('count').innerHTML = count;
    count--;
    if (count === 0){
      clearInterval(interval);
      document.getElementById('count').innerHTML='TIME IS UP!';
      alert("You have run out of time!");
    }
    if (answer != correct){ 
        answer.correct = button.dataset.correct
        interval = (count - 10)
    }
  }, 1000);

function score() {
    const correct = selectedButton.dataset.correct
    let playerScore = 0;
    if (correct === true) 
    {
       playerScore ++;
    }      
};
console.log(playerScore)
score()
// // checkAnswer()