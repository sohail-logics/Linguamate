function initTenses() {
  const data = getData();
  if (!data || !data.tenses) {
    console.error("No tenses data available");
    return;
  }
  
  const tenses = data.tenses;
  const container = document.getElementById("tenses-topics");
  container.innerHTML = "";
  container.style.display = "grid"; // Ensure container is visible
  
  // Hide content panel
  document.getElementById("tense-content").classList.add("hidden");

  Object.keys(tenses).forEach(tense => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerText = formatTenseName(tense);
    div.onclick = () => showTense(formatTenseName(tense), tenses[tense]);
    container.appendChild(div);
  });
}

function showTense(title, examples) {
  const titleElement = document.getElementById("tense-title");
  const contentElement = document.getElementById("tense-explanation");
  const contentPanel = document.getElementById("tense-content");
  
  titleElement.innerText = title;
  contentElement.innerHTML = formatTenseExamples(examples);
  contentPanel.classList.remove("hidden");
  
  // Scroll to content
  setTimeout(() => {
    contentPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 100);
}

function formatTenseExamples(examples) {
  // Split by | to separate multiple examples
  const exampleList = examples.split('|').map(ex => ex.trim());
  
  let formatted = '<div class="tense-examples">';
  
  exampleList.forEach(example => {
    if (example) {
      // Check if example has translation in parentheses
      const hasTranslation = example.includes('(') && example.includes(')');
      
      if (hasTranslation) {
        // Split into main sentence and translation
        const match = example.match(/^(.+?)\s*\((.+?)\)(.*)$/);
        if (match) {
          const sentence = match[1].trim();
          const translation = match[2].trim();
          const rest = match[3].trim();
          
          formatted += `
            <div class="tense-example-card">
              <div class="tense-sentence">${sentence}</div>
              <div class="tense-translation">${translation}</div>
              ${rest ? `<div class="tense-note">${rest}</div>` : ''}
            </div>
          `;
        } else {
          formatted += `<div class="tense-example-card"><div class="tense-sentence">${example}</div></div>`;
        }
      } else {
        formatted += `<div class="tense-example-card"><div class="tense-sentence">${example}</div></div>`;
      }
    }
  });
  
  formatted += '</div>';
  
  return formatted;
}

function formatTenseName(tense) {
  // Capitalize first letter
  return tense.charAt(0).toUpperCase() + tense.slice(1);
}

// Add CSS for tense examples (inject dynamically)
if (!document.getElementById('tense-styles')) {
  const style = document.createElement('style');
  style.id = 'tense-styles';
  style.textContent = `
    .tense-examples {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    
    .tense-example-card {
      background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
      border-left: 4px solid var(--primary);
      padding: 1.25rem;
      border-radius: 0.75rem;
      transition: transform 0.2s ease;
    }
    
    .tense-example-card:hover {
      transform: translateX(5px);
    }
    
    .tense-sentence {
      font-family: 'Poppins', sans-serif;
      font-size: 1.3rem;
      font-weight: 600;
      color: var(--gray-900);
      margin-bottom: 0.5rem;
    }
    
    .tense-translation {
      color: var(--gray-600);
      font-size: 1.1rem;
      font-style: italic;
    }
    
    .tense-note {
      margin-top: 0.5rem;
      padding-top: 0.5rem;
      border-top: 1px solid var(--gray-300);
      color: var(--gray-600);
      font-size: 0.95rem;
    }
  `;
  document.head.appendChild(style);
}
