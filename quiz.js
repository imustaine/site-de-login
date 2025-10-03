const questions = [
    {
        question: "qual é o maior animal do mundo?",
        answers: [
            { id: 1, text: "tubarao", correct:false },
            { id: 2, text: "baleia-azul", correct:true },
            { id: 3, text: "elefante", correct:false },
            { id: 4, text: "lula-colossal", correct:false },
        ],
    },
    {
        question: " Onde se localiza Machu Picchu?" ,
        answers: [
            { id: 1, text: " Colômbia", correct: false },
            { id: 2, text: " China", correct: false },
            { id: 3, text: " Bolívia", correct: false },
            { id: 4, text: "Peru", correct: true },
        ],
    },
    {
        question: "qual é o menor continente?" ,  
        answers: [
            { id: 1, text: "asia", correct: false },
            { id: 2, text: "australia", correct: true },
            { id: 3, text: "artico", correct: false },
            { id: 4, text: "africa", correct: false },
        ],
    },
     {
        question: " De quem é a famosa frase “Penso, logo existo”?",
        answers: [
            { id: 1, text: "Platão", correct:false },
            { id: 2, text: "Galileu Galilei", correct:false },
            { id: 3, text: "Descartes", correct:true },
            { id: 4, text: "Sócrates", correct:false },
        ],
    },
     {
        question: " De onde é a invenção do chuveiro elétrico?",
        answers: [
            { id: 1, text: "França", correct:false },
            { id: 2, text: "Brasil", correct:true },
            { id: 3, text: "Inglaterra", correct:false },
            { id: 4, text: " Austrália", correct:false },
        ],
    },
     {
        question: "  Quais o menor e o maior país do mundo?",
        answers: [
            { id: 1, text: " Vaticano e Rússia", correct:true },
            { id: 2, text: " Nauru e China", correct:false },
            { id: 3, text: "Mônaco e Canadá", correct:false },
            { id: 4, text: " São Marino e Índia ", correct:false },
        ],
    },
    {
        question: "  Atualmente, quantos elementos químicos a tabela periódica possui?",
        answers: [
            { id: 1, text: " 113", correct:false },
            { id: 2, text: "109", correct:false },
            { id: 3, text: "108", correct:false },
            { id: 4, text: "118", correct:true },
        ],
    },
 {
        question: " Que país tem o formato de uma bota?",
        answers: [
            { id: 1, text: " Butão", correct:false },
            { id: 2, text: " Portugal", correct:false },
            { id: 3, text: " Itália", correct:true },
            { id: 4, text: "México", correct:false },
        ],
    },
    {
        question: "Qual é a capital da Austrália??",
        answers: [
            { id: 1, text: "Canberra", correct:true },
            { id: 2, text: "Sydney ", correct:false },
            { id: 3, text: "Melbourne", correct:false },
            { id: 4, text: "Brisbane", correct:false },
        ],
    },
      {
        question: "Quem foi o primeiro homem a pisar na Lua?",
        answers: [
            { id: 1, text: "Yuri Gagarin", correct:false },
            { id: 2, text: "Neil Armstrong", correct:true },
            { id: 3, text: "Buzz Aldrin", correct:false },
            { id: 4, text: "Michael Collins", correct:false },
        ],
    },
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz () {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima";
    showQuestion();
}
 
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }

}

function showQuestion() {
    resetState ();
    let currentQuestion = questions [currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.dataset.id = answer.id;
      button.classList.add("btn");
      button.addEventListener("click", selectAnswer);
      answerButtons.appendChild(button);
    });
}


function selectAnswer (e) {
    answers = questions [currentQuestionIndex].answers;
    const correctAnswer = answers.filter((answer) => answer.correct == true) [0];
     
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.id == correctAnswer.id;
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach((button) => {
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore () {
    resetState ();
    questionElement.innerHTML = `voce acertou ${score} de ${questions.length}!`;
    nextButton.innerHTML = "Jogue novamente";
    nextButton.style.display = "block";
}

function handleNextButton () {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}
 nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();  
    }
 })
 startQuiz();