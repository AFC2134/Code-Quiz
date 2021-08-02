const startButton = document.getElementById('start-btn')
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
    showQuestion(randomQuestions[currentQuestionIndex])
}

function showQuestion(question) {
 questionElement.innerText = question.question
 question.answers.array.forEach(answer => {
     const button = document.createElement('button')
     button.innerText = answer.text
     button.classList.add('btn')
     if (answer.correct) {
         button.dataset.correct = answer.correct
     }
     
 })
}

function selectAnswer() {

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

