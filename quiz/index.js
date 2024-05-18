const $startGameButton = document.querySelector(".start-quiz")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")

let currentQuestionIndex = 0
let totalCorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

function startGame() {
  $startGameButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  displayNextQuestion()
}

function displayNextQuestion() {
  resetState()
  
  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }

  $questionText.textContent = questions[currentQuestionIndex].question
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
}

function resetState() {
  while($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct")
    totalCorrect++
  } else {
    document.body.classList.add("incorrect") 
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })
  
  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++
}

function finishGame() {
  const totalQuestions = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestions)
  
  let message = ""

  switch (true) {
    case (performance >= 90):
      message = "Excelente :)"
      break
    case (performance >= 70):
      message = "Muito bom :)"
      break
    case (performance >= 50):
      message = "Bom"
      break
    default:
      message = "Pode melhorar :("
  }

  $questionsContainer.innerHTML = 
  `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Refazer teste
    </button>
  `
}


const questions = [
  {
    question: "Quem É O Líder Da FDN?",
    answers: [
      { text: "MESTRIAH OM", correct: false },
      { text: "CORINGA", correct: false },
      { text: "EDSON MORENO", correct: true },
      { text: "TUPAC", correct: false }
    ]
  },
  {
    question: "Qual Destes Não É Da UTZ?",
    answers: [
      { text: "FL", correct: true },
      { text: "DRAKE BEIZZY", correct: false },
      { text: "EL WRLD CLONE", correct: false },
      { text: "FN BOSS XS", correct: false }
    ]
  },
  {
    question: 'O que Significa WT?',
    answers: [
      { text: 'WILLIAM TRAVOLTA', correct: true },
      { text: 'WILL TRAVOLTA', correct: false },
      { text: 'WEYZZY TRAVOLTA', correct: false },
      { text: "WILSON TRAVOLTA", correct: false }
    ]
  },
  {
    question: '"Kid" Significa Lenda!',
    answers: [
      { text: "Verdadeiro", correct: false },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: 'O Que Houve Entre UTZ e CR?',
    answers: [
      { text: 'União', correct: false },
      { text: 'Guerra', correct: true },
      { text: 'Companheirismo', correct: false },
      { text: 'Nada', correct: false }
    ]
  },
  {
    question: 'Quem É O Segundo Líder Dos Dráculas?',
    answers: [
      { text: 'Unblack', correct: false },
      { text: 'Márcio XS', correct: true },
      { text: 'DK', correct: false },
      { text: 'FD', correct: false }
    ]
  },
  {
    question: 'Quem É O Mais Odiado Da Net?',
    answers: [
      { text: 'Tupac', correct: false },
      { text: 'Félix Moreno', correct: false },
      { text: 'DT', correct: true },
      { text: 'KT', correct: false },
    ]
  },
  {
    question: 'Quem É GELSON JUICE?',
    answers: [
      { text: 'PRETADOR', correct: false },
      { text: 'HACKER', correct: false },
      { text: 'LAMMER', correct: false },
      { text: 'PROGRAMADOR', correct: true },
    ]
  },
   {
    question: 'Tupac É Melhor Que WT',
    answers: [
      { text: "Verdadeiro", correct: false },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: 'O Que É Modo Matança?',
    answers: [
      { text: 'Uma Arma', correct: false },
      { text: 'Fantasia', correct: true },
      { text: 'Pretar Bem', correct: false },
      { text: 'Nada', correct: false }
    ]
  },
  {
    question: 'Quem É O Mais Influente Da CM?',
    answers: [
      { text: 'Supremo', correct: false },
      { text: 'Mirelson', correct: false},
      { text: 'FL', correct: true },
      { text: 'CK', correct: false }
    ]
  },
  {
    question: 'O Mais Analfabeto Da Net',
    answers: [
      { text: 'Unblack', correct: false },
      { text: 'Tupac', correct: false},
      { text: 'KT', correct: false },
      { text: 'Game Over', correct: true }
    ]
  },
  {
    question: '"Kid" Significa Lenda!',
    answers: [
      { text: "Verdadeiro", correct: false },
      { text: "Falso", correct: true }
    ]
  },
   {
    question: 'Isaac Muaco É Revü',
    answers: [
      { text: "Verdadeiro", correct: true },
      { text: "Falso", correct: false }
    ]
  },{
    question: 'O Que Significa FN?',
    answers: [
      { text: 'Félix Nerü', correct: false },
      { text: 'Fernando Nelson', correct: false },
      { text: 'Fénix Negra', correct: true },
      { text: 'Fera Negra', correct: false }
    ]
  },{
    question: 'Quem Pretou Toda UDB?',
    answers: [
      { text: 'Speed Teken', correct: true },
      { text: 'Unblack', correct: false },
      { text: 'DT', correct: false },
      { text: 'OM', correct: false }
    ]
  },{
    question: 'Qual Destes Nunca Pretou?',
    answers: [
      { text: 'Joker', correct: false },
      { text: 'KT', correct: false },
      { text: 'Brayane', correct: true },
      { text: 'Márcio XS', correct: false }
    ]
  },{
    question: 'Pol Pol Pol É Um:',
    answers: [
      { text: 'Gênio', correct: false },
      { text: 'Doido', correct: true },
      { text: 'Burro', correct: false },
      { text: 'Esperto', correct: false }
    ]
  }, {
    question: 'FD É Lenda!',
    answers: [
      { text: "Verdadeiro", correct: false },
      { text: "Falso", correct: true }
    ]
  },{
    question: 'Viva Hoje Para:',
    answers: [
      { text: 'Sobreviver', correct: false },
      { text: 'Morrer Amamhã', correct: true },
      { text: 'Matar Amanhã', correct: false },
      { text: 'Pretar Amanhã', correct: false }
    ]
  },{
    question: 'Qual Destes É Pai Do CS?',
    answers: [
      { text: 'WT', correct: false },
      { text: 'Coringa', correct: false },
      { text: 'MD', correct: true },
      { text: 'FN', correct: false }
    ]
  },{
    question: 'Qual Destes Pretou Tupac?',
    answers: [
      { text: 'FD', correct: false },
      { text: 'Márcio XS', correct: false },
      { text: 'FL', correct: false },
      { text: 'DT', correct: true }
    ]
  }, {
    question: 'Este Quiz É Bom?',
    answers: [
      { text: "Verdadeiro", correct: true },
      { text: "Falso", correct: false }
    ]
  },
]