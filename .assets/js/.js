const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionBoxElement = document.getElementById('question-box')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-btns')

let randomQuestions, currentQuestionIndex

 startButton.addEventListener('click', startGame)

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
   nextButton.classList.remove('hide')
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
            { text: 'javahubs', false: false}
        ]
    }
]

