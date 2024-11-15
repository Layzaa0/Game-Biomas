document.addEventListener("DOMContentLoaded", function () {
    const nextBtn = document.getElementById("nextBtn");
    nextBtn.onclick = nextQuestion; // Associa o evento "onclick" ao botão "nextBtn"
});

const questions = [
    {
    question: "Qual bioma é conhecido por sua vegetação densa e alta biodiversidade?",
    options: ["Deserto", "Floresta Tropical", "Tundra"],
    answer: "Floresta Tropical"
    },

    {
    question: "Qual bioma é caracterizado por climas extremamente frios e geada constante?",
    options: ["Tundra", "Savanna", "Floresta Temperada"],
    answer: "Tundra"
    },

    {
    question: "Qual bioma é composto principalmente por gramíneas e poucos árvores?",
    options: ["Deserto", "Prairies", "Floresta Boreal"],
    answer: "Prairies"
    },

    {
        question: "Qual bioma é caracterizado por temperaturas frias e vegetação de coníferas?",
        options: ["Floresta temperada", "Floresta de coníferas", "Floresta tropical"],
        answer: "Floresta de coníferas"
    },
    {
        question: "Qual bioma é conhecido por ter duas estações distintas, seca e chuvosa?",
        options: ["Savana", "Tundra", "Vegetação mediterrânea"],
        answer: "Savana"
    },
    {
        question: "Em qual bioma você encontraria vegetação rasteira e baixa diversidade de árvores?",
        options: ["Pradarias", "Vegetação de deserto", "Floresta equatorial"],
        answer: "Pradarias"
    },
];

let currentQuestionIndex = 0;
let score = 0;

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    document.querySelector(".score").innerHTML = '';
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.querySelector(".question").innerText = question.question;

    const optionsDiv = document.querySelector(".options");
    optionsDiv.innerHTML = '';
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => selectAnswer(button, option);
        optionsDiv.appendChild(button);
    });

    document.getElementById("nextBtn").style.display = "none";
}

function selectAnswer(button, option) {
    const question = questions[currentQuestionIndex];
    if (option === question.answer) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("incorrect");
    }
    disableButtons();
    document.getElementById("nextBtn").style.display = "inline";
}

function disableButtons() {
    document.querySelectorAll(".options button").forEach(button => {
        button.disabled = true;
        if (button.innerText === questions[currentQuestionIndex].answer) {
            button.classList.add("correct");
        }
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    document.querySelector(".question").innerText = "Fim do jogo! Sua pontuação final é:";
    document.querySelector(".options").innerHTML = '';
    document.getElementById("nextBtn").style.display = "none";
    document.querySelector(".score").innerText = `Pontuação: ${score} / ${questions.length}`;
}
