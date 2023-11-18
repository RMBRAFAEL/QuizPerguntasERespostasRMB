const questions = [
    {
        question: "Qual é a capital do Brasil?",
        options: ["Rio de Janeiro", "Brasília", "São Paulo", "Belo Horizonte"],
        correctAnswer: "Brasília"
    },
    {
        question: "Quem escreveu 'Dom Quixote'?",
        options: ["Miguel de Cervantes", "William Shakespeare", "Fiodor Dostoiévski", "Jane Austen"],
        correctAnswer: "Miguel de Cervantes"
    },
    {
        question: "Qual é o maior planeta do nosso sistema solar?",
        options: ["Marte", "Júpiter", "Vênus", "Saturno"],
        correctAnswer: "Júpiter"
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");

    questionContainer.innerHTML = questions[currentQuestionIndex].question;
    optionsContainer.innerHTML = "";

    questions[currentQuestionIndex].options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(optionButton);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (selectedOption === correctAnswer) {
        alert("Resposta correta!");
    } else {
        alert(`Resposta incorreta. A resposta correta é: ${correctAnswer}`);
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert("Quiz concluído! Obrigado por participar.");
        resetQuiz();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert("Quiz concluído! Obrigado por participar.");
        resetQuiz();
    }
}

function resetQuiz() {
    currentQuestionIndex = 0;
    loadQuestion();
}

// Carrega a primeira pergunta ao carregar a página
window.onload = loadQuestion;
