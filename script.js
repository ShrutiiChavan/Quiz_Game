const quizData = [
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "New Delhi", "Bangalore", "Kolkata"],
        correct: "New Delhi"
    },
    {
        question: "Which Indian city is known as the Silicon Valley of India?",
        options: ["Hyderabad", "Pune", "Bangalore", "Chennai"],
        correct: "Bangalore"
    },
    {
        question: "Who is known as the Father of the Nation in India?",
        options: ["Jawaharlal Nehru", "Subhas Chandra Bose", "Mahatma Gandhi", "B. R. Ambedkar"],
        correct: "Mahatma Gandhi"
    },
    {
        question: "What is the national animal of India?",
        options: ["Peacock", "Elephant", "Tiger", "Lion"],
        correct: "Tiger"
    },
    {
        question: "Which river is considered the holiest river in India?",
        options: ["Yamuna", "Ganges", "Godavari", "Narmada"],
        correct: "Ganges"
    },
    {
        question: "Who was the first Prime Minister of India?",
        options: ["Indira Gandhi", "Lal Bahadur Shastri", "Jawaharlal Nehru", "Rajendra Prasad"],
        correct: "Jawaharlal Nehru"
    },
    {
        question: "In which year did India gain independence from British rule?",
        options: ["1947", "1950", "1937", "1945"],
        correct: "1947"
    },
    {
        question: "What is the national sport of India?",
        options: ["Cricket", "Hockey", "Kabaddi", "Badminton"],
        correct: "Hockey"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const quizQuestionElement = document.getElementById('quiz-question');
const quizOptionsElement = document.getElementById('quiz-options');
const nextButton = document.getElementById('next-button');
const quizResultElement = document.getElementById('quiz-result');

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    quizQuestionElement.innerText = currentQuestion.question;
    quizOptionsElement.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option');
        button.onclick = () => selectOption(button, currentQuestion.correct);
        quizOptionsElement.appendChild(button);
    });
}

function selectOption(button, correctAnswer) {
    const selectedAnswer = button.innerText;
    if (selectedAnswer === correctAnswer) {
        score++;
        button.style.backgroundColor = 'green';
    } else {
        button.style.backgroundColor = 'red';
    }
    disableOptions();
}

function disableOptions() {
    const options = quizOptionsElement.querySelectorAll('.option');
    options.forEach(option => {
        option.disabled = true;
        if (option.innerText === quizData[currentQuestionIndex].correct) {
            option.style.backgroundColor = 'green';
        }
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizQuestionElement.style.display = 'none';
    quizOptionsElement.style.display = 'none';
    nextButton.style.display = 'none';
    quizResultElement.innerText = `You scored ${score} out of ${quizData.length}`;
}

loadQuestion();
