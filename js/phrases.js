function initPhrases() {
  const data = getData();
  if (!data || !data.phrases) {
    // If no phrases in data, show a message
    const container = document.getElementById("phrases-list");
    container.innerHTML = `
      <div class="no-content-message">
        <i class="fas fa-info-circle"></i>
        <p>No common phrases available for this level yet.</p>
      </div>
    `;
    return;
  }
  
  const phrases = data.phrases;
  const container = document.getElementById("phrases-list");
  container.innerHTML = "";

  phrases.forEach(phrase => {
    const card = createPhraseCard(phrase.target, phrase.translation);
    container.appendChild(card);
  });
}

function createPhraseCard(target, translation) {
  const card = document.createElement("div");
  card.className = "phrase-card";
  
  card.innerHTML = `
    <div class="phrase-target">${target}</div>
    <div class="phrase-translation">${translation}</div>
  `;
  
  // Add click to speak functionality (if browser supports it)
  card.onclick = () => speakPhrase(target);
  
  return card;
}

function speakPhrase(text) {
  if ('speechSynthesis' in window) {
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Set language based on current language
    switch(currentLanguage) {
      case 'german':
        utterance.lang = 'de-DE';
        break;
      case 'french':
        utterance.lang = 'fr-FR';
        break;
      case 'italian':
        utterance.lang = 'it-IT';
        break;
    }
    
    utterance.rate = 0.9; // Slightly slower for learning
    window.speechSynthesis.speak(utterance);
  }
}

// Add CSS for no content message (inject dynamically)
if (!document.getElementById('phrases-styles')) {
  const style = document.createElement('style');
  style.id = 'phrases-styles';
  style.textContent = `
    .no-content-message {
      text-align: center;
      padding: 3rem;
      background: white;
      border-radius: 1rem;
      box-shadow: var(--shadow-lg);
    }
    
    .no-content-message i {
      font-size: 3rem;
      color: var(--gray-400);
      margin-bottom: 1rem;
    }
    
    .no-content-message p {
      color: var(--gray-600);
      font-size: 1.1rem;
    }
    
    .phrase-card {
      cursor: pointer;
    }
    
    .phrase-card:active {
      transform: scale(0.98);
    }
  `;
  document.head.appendChild(style);
}
