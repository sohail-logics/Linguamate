function initGrammar() {
  const data = getData();
  if (!data || !data.grammar) {
    console.error("No grammar data available");
    return;
  }
  
  const grammar = data.grammar;
  const container = document.getElementById("grammar-topics");
  container.innerHTML = "";
  container.style.display = "grid"; // Ensure container is visible
  
  // Hide content panel
  document.getElementById("grammar-content").classList.add("hidden");

  Object.keys(grammar).forEach(topic => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerText = formatTopicName(topic);
    div.onclick = () => showGrammar(formatTopicName(topic), grammar[topic]);
    container.appendChild(div);
  });
}

function showGrammar(title, content) {
  const titleElement = document.getElementById("grammar-title");
  const contentElement = document.getElementById("grammar-explanation");
  const contentPanel = document.getElementById("grammar-content");
  
  titleElement.innerText = title;
  contentElement.innerHTML = formatGrammarContent(content);
  contentPanel.classList.remove("hidden");
  
  // Scroll to content
  setTimeout(() => {
    contentPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 100);
}

function formatGrammarContent(content) {
  // Split content by sentences and format
  const sentences = content.split('. ');
  let formatted = '';
  
  sentences.forEach((sentence, index) => {
    if (sentence.trim()) {
      // Add proper punctuation if missing
      const punctuatedSentence = sentence.endsWith('.') ? sentence : sentence + '.';
      
      // Check if it's an example (contains parentheses or →)
      if (punctuatedSentence.includes('Example:') || 
          punctuatedSentence.includes('→') ||
          punctuatedSentence.includes('(')) {
        formatted += `<div class="grammar-example">${punctuatedSentence}</div>`;
      } else {
        formatted += `<p class="grammar-text">${punctuatedSentence}</p>`;
      }
    }
  });
  
  return formatted || `<p class="grammar-text">${content}</p>`;
}

function formatTopicName(topic) {
  // Convert camelCase to Title Case
  return topic
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase())
    .trim();
}

// Add CSS for grammar examples (inject dynamically)
if (!document.getElementById('grammar-styles')) {
  const style = document.createElement('style');
  style.id = 'grammar-styles';
  style.textContent = `
    .grammar-text {
      margin-bottom: 1rem;
      line-height: 1.8;
    }
    
    .grammar-example {
      background: var(--gray-50);
      border-left: 3px solid var(--primary);
      padding: 1rem;
      margin: 1rem 0;
      border-radius: 0.5rem;
      font-family: 'Courier New', monospace;
      color: var(--gray-700);
    }
  `;
  document.head.appendChild(style);
}
