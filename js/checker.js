function initChecker() {
  // Clear previous input and results
  document.getElementById("sentence-input").value = "";
  document.getElementById("checker-result").classList.add("hidden");
  
  // Setup check button
  document.getElementById("check-sentence").onclick = checkSentence;
  
  // Allow Enter key to submit (with Ctrl/Cmd)
  document.getElementById("sentence-input").addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      checkSentence();
    }
  });
}

function checkSentence() {
  const text = document.getElementById("sentence-input").value.trim();
  const resultDiv = document.getElementById("checker-result");
  const messageElement = document.getElementById("result-message");
  const suggestionsDiv = document.getElementById("suggestions");
  const iconElement = document.getElementById("result-icon");
  const titleElement = document.getElementById("result-title");

  // Clear previous suggestions
  suggestionsDiv.innerHTML = "";

  // Check if input is empty
  if (!text) {
    showResult(
      resultDiv,
      iconElement,
      titleElement,
      messageElement,
      "error",
      "fa-exclamation-circle",
      "No Input",
      "Please enter a sentence to check."
    );
    return;
  }

  // Perform checks
  let errors = [];
  let warnings = [];
  let suggestions = [];

  // 1. Check capitalization
  if (!/^[A-ZÄÖÜÉÈÊÀÂÙÛÎÔÇ]/.test(text)) {
    errors.push("Sentence should start with a capital letter.");
    suggestions.push(`Did you mean: <strong>${capitalizeFirst(text)}</strong>?`);
  }

  // 2. Check ending punctuation
  if (!/[.!?]$/.test(text)) {
    errors.push("Sentence should end with proper punctuation (. ! ?).");
    suggestions.push(`Add a period: <strong>${text}.</strong>`);
  }

  // 3. Check minimum length
  if (text.length < 5) {
    errors.push("Sentence is too short. Try to form a complete thought.");
  }

  // 4. Check for multiple spaces
  if (/\s{2,}/.test(text)) {
    warnings.push("Multiple spaces detected. Use single spaces between words.");
    const fixed = text.replace(/\s+/g, ' ');
    suggestions.push(`Corrected spacing: <strong>${fixed}</strong>`);
  }

  // 5. Check for space before punctuation
  if (/\s+[.,!?;:]/.test(text)) {
    warnings.push("Remove spaces before punctuation marks.");
    const fixed = text.replace(/\s+([.,!?;:])/g, '$1');
    suggestions.push(`Corrected: <strong>${fixed}</strong>`);
  }

  // 6. Check for missing space after punctuation
  if (/[.,!?;:][^\s]/.test(text) && !/[.,!?;:]$/.test(text)) {
    warnings.push("Add space after punctuation marks (except at the end).");
  }

  // 7. Check for all caps (shouting)
  if (text === text.toUpperCase() && text.length > 3) {
    warnings.push("Avoid writing in ALL CAPS. Use normal capitalization.");
  }

  // 8. Word count check
  const wordCount = text.split(/\s+/).length;
  if (wordCount < 2) {
    errors.push("A sentence should have at least 2 words.");
  }

  // 9. Check for question mark with non-question
  if (text.endsWith('?') && !isQuestion(text)) {
    warnings.push("This doesn't appear to be a question. Consider using a period instead.");
  }

  // Display results
  if (errors.length === 0 && warnings.length === 0) {
    showResult(
      resultDiv,
      iconElement,
      titleElement,
      messageElement,
      "success",
      "fa-check-circle",
      "Great Job!",
      "Your sentence looks good! No errors detected. ✓"
    );
  } else {
    const allIssues = [...errors, ...warnings];
    const issueText = allIssues.map((issue, index) => 
      `${index + 1}. ${issue}`
    ).join('<br>');
    
    showResult(
      resultDiv,
      iconElement,
      titleElement,
      messageElement,
      "error",
      "fa-times-circle",
      "Issues Found",
      issueText
    );
    
    // Add suggestions
    if (suggestions.length > 0) {
      suggestionsDiv.innerHTML = `
        <h4><i class="fas fa-lightbulb"></i> Suggestions:</h4>
        ${suggestions.map(s => `<div class="suggestion-item">${s}</div>`).join('')}
      `;
    }
  }
}

function showResult(resultDiv, iconElement, titleElement, messageElement, type, iconClass, title, message) {
  resultDiv.classList.remove("hidden", "error");
  
  if (type === "error") {
    resultDiv.classList.add("error");
  }
  
  iconElement.className = `fas ${iconClass}`;
  titleElement.innerText = title;
  messageElement.innerHTML = message;
  
  // Scroll to results
  setTimeout(() => {
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 100);
}

function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function isQuestion(text) {
  // Common question words in multiple languages
  const questionWords = [
    // German
    'wer', 'was', 'wo', 'wann', 'warum', 'wie', 'welche', 'welcher', 'welches',
    // French
    'qui', 'que', 'quoi', 'où', 'quand', 'pourquoi', 'comment', 'quel', 'quelle',
    // Italian
    'chi', 'che', 'cosa', 'dove', 'quando', 'perché', 'perchè', 'come', 'quale',
    // English (just in case)
    'who', 'what', 'where', 'when', 'why', 'how', 'which'
  ];
  
  const lowerText = text.toLowerCase();
  return questionWords.some(word => lowerText.startsWith(word));
}

// Add CSS for suggestions (inject dynamically)
if (!document.getElementById('checker-additional-styles')) {
  const style = document.createElement('style');
  style.id = 'checker-additional-styles';
  style.textContent = `
    #suggestions h4 {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--gray-800);
      margin-bottom: 0.75rem;
      font-size: 1rem;
    }
    
    #suggestions i {
      color: var(--warning);
    }
  `;
  document.head.appendChild(style);
}
