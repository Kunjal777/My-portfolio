const questions = [
  { question: "What is the capital of India?", options: ["Mumbai", "Delhi", "Chennai", "Kolkata"], answer: "Delhi" },
  { question: "Who wrote the national anthem of India?", options: ["Tagore", "Gandhi", "Nehru", "Tilak"], answer: "Tagore" },
  { question: "Which planet is known as the Red Planet?", options: ["Earth", "Venus", "Mars", "Jupiter"], answer: "Mars" },
  { question: "What is H2O?", options: ["Salt", "Water", "Oxygen", "Hydrogen"], answer: "Water" },
  { question: "Which is the smallest continent?", options: ["Asia", "Australia", "Europe", "Antarctica"], answer: "Australia" },
  { question: "Which river is longest in the world?", options: ["Amazon", "Nile", "Ganges", "Mississippi"], answer: "Nile" },
  { question: "Who discovered gravity?", options: ["Einstein", "Galileo", "Newton", "Tesla"], answer: "Newton" },
  { question: "Fastest land animal?", options: ["Tiger", "Cheetah", "Horse", "Kangaroo"], answer: "Cheetah" },
  { question: "Currency of Japan?", options: ["Yuan", "Won", "Yen", "Dollar"], answer: "Yen" },
  { question: "First PM of India?", options: ["Modi", "Gandhi", "Nehru", "Patel"], answer: "Nehru" },
  { question: "Largest ocean?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: "Pacific" },
  { question: "Chemical symbol of Gold?", options: ["Gd", "Au", "Ag", "Pb"], answer: "Au" },
  { question: "Where is Taj Mahal?", options: ["Delhi", "Mumbai", "Agra", "Jaipur"], answer: "Agra" },
  { question: "Which is not a programming language?", options: ["Python", "Java", "HTML", "C++"], answer: "HTML" },
  { question: "What is the national fruit of India?", options: ["Apple", "Banana", "Mango", "Orange"], answer: "Mango" },
  { question: "Which is a primary color?", options: ["Green", "Red", "Pink", "Brown"], answer: "Red" },
  { question: "Which bird can't fly?", options: ["Eagle", "Sparrow", "Penguin", "Parrot"], answer: "Penguin" },
  { question: "What is 12 x 12?", options: ["144", "122", "124", "132"], answer: "144" },
  { question: "Which gas do plants need?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Carbon Dioxide" },
  { question: "Boiling point of water?", options: ["90°C", "100°C", "80°C", "120°C"], answer: "100°C" },
  { question: "Instrument to measure temperature?", options: ["Barometer", "Thermometer", "Altimeter", "Speedometer"], answer: "Thermometer" },
  { question: "National animal of India?", options: ["Elephant", "Lion", "Tiger", "Leopard"], answer: "Tiger" },
  { question: "Father of Nation?", options: ["Gandhi", "Nehru", "Patel", "Bose"], answer: "Gandhi" },
  { question: "Festival of Lights?", options: ["Holi", "Diwali", "Eid", "Christmas"], answer: "Diwali" },
  { question: "How many states in India?", options: ["27", "28", "29", "30"], answer: "28" }
];

let selectedQuestions = [];
let currentQuestion = 0;
let userAnswers = [];
let score = 0;
let answered = false;

function getRandomQuestions() {
  return [...questions].sort(() => 0.5 - Math.random()).slice(0, 10);
}

function displayQuestion() {
  answered = false;
  document.getElementById("next-btn").disabled = true;

  const q = selectedQuestions[currentQuestion];
  document.getElementById("question").innerText = `Q${currentQuestion + 1}. ${q.question}`;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => handleAnswer(opt);
    optionsDiv.appendChild(btn);
  });
}

function handleAnswer(selected) {
  if (answered) return;
  answered = true;

  const correctAnswer = selectedQuestions[currentQuestion].answer;
  const allButtons = document.querySelectorAll("#options button");
  allButtons.forEach(btn => btn.disabled = true);

  if (selected === correctAnswer) {
    score += 10;
  }

  userAnswers.push({
    question: selectedQuestions[currentQuestion].question,
    selected,
    correct: correctAnswer
  });

  document.getElementById("next-btn").disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < selectedQuestions.length) {
    displayQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  const container = document.querySelector(".quiz-container");
  document.getElementById("question-box").innerHTML = `<h2>Quiz Finished!</h2><p>Your Score: ${score}/100</p>`;
  document.getElementById("next-btn").style.display = "none";

  const resultHTML = userAnswers.map((ans, i) => {
    const isCorrect = ans.selected === ans.correct;
    return `
      <div class="result">
        <strong>Q${i + 1}: ${ans.question}</strong><br/>
        Your answer: <span style="color:${isCorrect ? 'lightgreen' : 'red'}">${ans.selected}</span><br/>
        Correct answer: <span style="color:lightblue">${ans.correct}</span><br/>
      </div><hr/>
    `;
  }).join("");

  const resultContainer = document.createElement("div");
  resultContainer.innerHTML = resultHTML;

  const restartBtn = document.createElement("button");
  restartBtn.innerText = "Restart Quiz";
  restartBtn.onclick = startQuiz;
  restartBtn.style.marginTop = "20px";
  restartBtn.style.backgroundColor = "gold";
  restartBtn.style.padding = "10px 20px";
  restartBtn.style.borderRadius = "5px";

  container.appendChild(resultContainer);
  container.appendChild(restartBtn);
}

function startQuiz() {
  // Reset container HTML structure
  const container = document.querySelector(".quiz-container");
  container.innerHTML = `
    <h1>KBC Quiz Game</h1>
    <div id="question-box">
      <p id="question">Question will appear here</p>
      <div class="options" id="options"></div>
    </div>
    <button id="next-btn" disabled>Next Question</button>
  `;

  // Reset all variables
  currentQuestion = 0;
  userAnswers = [];
  score = 0;
  selectedQuestions = getRandomQuestions();

  // Re-bind the Next button event (since we replaced the HTML)
  document.getElementById("next-btn").onclick = nextQuestion;

  // Start the quiz
  displayQuestion();
}

document.getElementById("next-btn").onclick = nextQuestion;
window.onload = startQuiz;



