
const startButton = document.getElementById('start-btn');
const questionBoxEl = document.getElementById
 ('question-box')
startButton.addEventListener('click', startGame);

function startGame() {
   console.log('started')
   startButton.classList.add('hide');
   questionBoxEl.classList.remove('hide');
}

function nextQuestion() {

}

function selectAnswer() {

}