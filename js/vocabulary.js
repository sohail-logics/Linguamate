let words = [];
let index = 0;

function initVocabulary() {
  const data = getData();
  if (!data || !data.vocabulary) {
    console.error("No vocabulary data available");
    return;
  }
  
  const vocab = data.vocabulary;
  const container = document.getElementById("vocab-topics");
  container.innerHTML = "";
  container.style.display = "grid"; // Ensure container is visible
  
  // Hide flashcard area when showing topics
  document.getElementById("flashcard-area").classList.add("hidden");

  Object.keys(vocab).forEach(topic => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerText = topic;
    div.onclick = () => loadTopic(vocab[topic], topic);
    container.appendChild(div);
  });
}

function loadTopic(topicWords, topic) {
  words = topicWords;
  index = 0;
  
  document.getElementById("topic-title").innerText = topic;
  document.getElementById("vocab-topics").style.display = "none";
  document.getElementById("flashcard-area").classList.remove("hidden");
  
  showWord();
  setupFlashcardControls();
}

function showWord() {
  if (words.length === 0) return;
  
  const w = words[index];
  
  // Update word content
  document.getElementById("word-target").innerText = w.target;
  document.getElementById("word-translation").innerText = w.translation;
  
  // Reset flip
  const flashcard = document.querySelector(".flashcard");
  flashcard.classList.remove("flipped");
  
  // Update progress
  document.getElementById("vocab-progress").innerText = 
    `Word ${index + 1} of ${words.length}`;
  
  // Update progress bar
  const progressFill = document.getElementById("progress-fill");
  const progressPercent = ((index + 1) / words.length) * 100;
  progressFill.style.width = progressPercent + "%";
  
  // Add animation
  flashcard.style.animation = 'fadeIn 0.4s ease';
  setTimeout(() => {
    flashcard.style.animation = '';
  }, 400);
}

function setupFlashcardControls() {
  const flashcard = document.querySelector(".flashcard");
  const flipBtn = document.getElementById("flip-card");
  const nextBtn = document.getElementById("next-word");
  const prevBtn = document.getElementById("prev-word");
  
  // Click on card to flip
  flashcard.onclick = () => {
    flashcard.classList.toggle("flipped");
  };
  
  // Flip button
  flipBtn.onclick = (e) => {
    e.stopPropagation();
    flashcard.classList.toggle("flipped");
  };
  
  // Next button
  nextBtn.onclick = (e) => {
    e.stopPropagation();
    nextWord();
  };
  
  // Previous button
  prevBtn.onclick = (e) => {
    e.stopPropagation();
    previousWord();
  };
  
  // Keyboard shortcuts
  setupVocabKeyboard();
}

function setupVocabKeyboard() {
  // Remove any existing keyboard listener
  document.removeEventListener('keydown', handleVocabKeyboard);
  
  // Add new keyboard listener
  document.addEventListener('keydown', handleVocabKeyboard);
}

function handleVocabKeyboard(e) {
  // Only work if vocabulary module is active
  const vocabModule = document.getElementById('vocabulary-module');
  if (!vocabModule.classList.contains('active')) return;
  
  const flashcardArea = document.getElementById('flashcard-area');
  if (flashcardArea.classList.contains('hidden')) return;
  
  const flashcard = document.querySelector(".flashcard");
  
  switch(e.key) {
    case ' ':
    case 'Enter':
      e.preventDefault();
      flashcard.classList.toggle("flipped");
      break;
    case 'ArrowRight':
      e.preventDefault();
      nextWord();
      break;
    case 'ArrowLeft':
      e.preventDefault();
      previousWord();
      break;
  }
}

function nextWord() {
  index = (index + 1) % words.length;
  showWord();
}

function previousWord() {
  index = (index - 1 + words.length) % words.length;
  showWord();
}

// Clean up keyboard listener when leaving vocabulary module
function cleanupVocabulary() {
  document.removeEventListener('keydown', handleVocabKeyboard);
}
