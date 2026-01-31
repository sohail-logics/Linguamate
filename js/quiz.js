let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

function initQuiz() {
  // Reset quiz state
  resetQuiz();
  
  // Show start screen
  document.getElementById("quiz-start").classList.remove("hidden");
  document.getElementById("quiz-area").classList.add("hidden");
  document.getElementById("quiz-results").classList.add("hidden");
  
  // Setup start button
  document.getElementById("start-quiz-btn").onclick = startQuiz;
  document.getElementById("restart-quiz").onclick = restartQuiz;
}

function startQuiz() {
  // Generate quiz questions
  quizQuestions = generateQuizQuestions();
  
  if (quizQuestions.length === 0) {
    alert("No vocabulary available for quiz!");
    return;
  }
  
  // Reset state
  currentQuestionIndex = 0;
  score = 0;
  
  // Show quiz area
  document.getElementById("quiz-start").classList.add("hidden");
  document.getElementById("quiz-area").classList.remove("hidden");
  document.getElementById("quiz-results").classList.add("hidden");
  
  // Show first question
  showQuestion();
  
  // Setup next button
  document.getElementById("quiz-next").onclick = nextQuestion;
}

function generateQuizQuestions() {
  const data = getData();
  if (!data || !data.vocabulary) return [];
  
  const vocab = data.vocabulary;
  let allWords = [];
  
  // Collect all vocabulary words
  Object.keys(vocab).forEach(topic => {
    allWords = allWords.concat(vocab[topic]);
  });
  
  // Shuffle and take 10 questions
  allWords = shuffleArray(allWords);
  const selectedWords = allWords.slice(0, Math.min(10, allWords.length));
  
  // Create questions with multiple choice options
  return selectedWords.map(word => {
    // Get 3 random wrong answers
    const wrongAnswers = allWords
      .filter(w => w.translation !== word.translation)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(w => w.translation);
    
    // Combine and shuffle all options
    const options = shuffleArray([word.translation, ...wrongAnswers]);
    
    return {
      question: word.target,
      correctAnswer: word.translation,
      options: options
    };
  });
}

function showQuestion() {
  if (currentQuestionIndex >= quizQuestions.length) {
    showResults();
    return;
  }
  
  const question = quizQuestions[currentQuestionIndex];
  selectedAnswer = null;
  
  // Update question number
  document.getElementById("quiz-question-number").innerText = 
    `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
  
  // Update score
  document.getElementById("quiz-score").innerText = score;
  
  // Update question
  document.getElementById("quiz-question").innerText = 
    `What is the meaning of "${question.question}"?`;
  
  // Create options
  const optionsContainer = document.getElementById("quiz-options");
  optionsContainer.innerHTML = "";
  
  question.options.forEach((option, index) => {
    const optionDiv = document.createElement("div");
    optionDiv.className = "quiz-option";
    optionDiv.innerText = option;
    optionDiv.onclick = () => selectAnswer(option, optionDiv, question.correctAnswer);
    optionsContainer.appendChild(optionDiv);
  });
  
  // Hide next button
  document.getElementById("quiz-next").classList.add("hidden");
}

function selectAnswer(answer, optionElement, correctAnswer) {
  // Prevent selecting if already answered
  if (selectedAnswer !== null) return;
  
  selectedAnswer = answer;
  
  // Disable all options
  const allOptions = document.querySelectorAll(".quiz-option");
  allOptions.forEach(opt => opt.classList.add("disabled"));
  
  // Show correct/incorrect
  if (answer === correctAnswer) {
    optionElement.classList.add("correct");
    score++;
    document.getElementById("quiz-score").innerText = score;
  } else {
    optionElement.classList.add("incorrect");
    // Highlight correct answer
    allOptions.forEach(opt => {
      if (opt.innerText === correctAnswer) {
        opt.classList.add("correct");
      }
    });
  }
  
  // Show next button
  setTimeout(() => {
    document.getElementById("quiz-next").classList.remove("hidden");
  }, 500);
}

function nextQuestion() {
  currentQuestionIndex++;
  showQuestion();
}

function showResults() {
  // Hide quiz area
  document.getElementById("quiz-area").classList.add("hidden");
  
  // Show results
  const resultsDiv = document.getElementById("quiz-results");
  resultsDiv.classList.remove("hidden");
  
  // Update final score
  document.getElementById("final-score").innerText = score;
  
  // Calculate percentage
  const percentage = (score / quizQuestions.length) * 100;
  
  // Update message and medal based on score
  const messageElement = document.getElementById("results-message");
  const medalElement = resultsDiv.querySelector(".results-medal");
  
  if (percentage >= 90) {
    messageElement.innerText = "Outstanding! You're a language master! 🌟";
    medalElement.className = "fas fa-trophy results-medal";
    medalElement.style.color = "#ffd700"; // Gold
  } else if (percentage >= 70) {
    messageElement.innerText = "Great job! Keep up the good work! 👏";
    medalElement.className = "fas fa-medal results-medal";
    medalElement.style.color = "#c0c0c0"; // Silver
  } else if (percentage >= 50) {
    messageElement.innerText = "Good effort! Practice makes perfect! 💪";
    medalElement.className = "fas fa-award results-medal";
    medalElement.style.color = "#cd7f32"; // Bronze
  } else {
    messageElement.innerText = "Keep practicing! You'll improve! 📚";
    medalElement.className = "fas fa-star results-medal";
    medalElement.style.color = "#9ca3af"; // Gray
  }
}

function restartQuiz() {
  resetQuiz();
  startQuiz();
}

function resetQuiz() {
  quizQuestions = [];
  currentQuestionIndex = 0;
  score = 0;
  selectedAnswer = null;
}

// Utility function to shuffle array
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
