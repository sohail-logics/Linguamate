let currentLanguage = "";
let currentLevel = "";

document.addEventListener("DOMContentLoaded", () => {
  setupClicks();
  setupKeyboardShortcuts();
  animateOnScroll();
});

function setupClicks() {
  // Language selection
  document.querySelectorAll(".language-card").forEach(card => {
    card.onclick = () => {
      currentLanguage = card.dataset.lang;
      updateSelectionBadge();
      showSection("level-selection");
    };
  });

  // Level selection
  document.querySelectorAll(".level-card").forEach(card => {
    card.onclick = () => {
      currentLevel = card.dataset.level;
      updateSelectionBadge();
      showSection("main-menu");
    };
  });

  // Module selection
  document.querySelectorAll(".module-card").forEach(card => {
    card.onclick = () => {
      const module = card.dataset.module;
      showSection(module + "-module");
      initModule(module);
    };
  });

  // Back buttons
  document.querySelectorAll(".back-btn").forEach(btn => {
    btn.onclick = () => {
      // Determine which section to go back to
      const currentSection = document.querySelector(".section.active");
      const currentId = currentSection.id;
      
      if (currentId === "level-selection") {
        showSection("language-selection");
        currentLanguage = "";
        updateSelectionBadge();
      } else if (currentId === "main-menu") {
        showSection("level-selection");
        currentLevel = "";
        updateSelectionBadge();
      } else {
        showSection("main-menu");
      }
    };
  });
}

function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    const activeSection = document.querySelector('.section.active');
    
    // Escape key to go back
    if (e.key === 'Escape') {
      const backBtn = activeSection.querySelector('.back-btn');
      if (backBtn) {
        backBtn.click();
      }
    }
  });
}

function showSection(id) {
  // Remove active class from all sections
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  
  // Add active class to target section
  const targetSection = document.getElementById(id);
  if (targetSection) {
    targetSection.classList.add("active");
    
    // Scroll to top smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}

function updateSelectionBadge() {
  const badge = document.getElementById("current-selection");
  
  if (currentLanguage && currentLevel) {
    const langName = currentLanguage.charAt(0).toUpperCase() + currentLanguage.slice(1);
    badge.innerText = `${langName} • ${currentLevel}`;
    badge.style.display = 'block';
  } else if (currentLanguage) {
    const langName = currentLanguage.charAt(0).toUpperCase() + currentLanguage.slice(1);
    badge.innerText = langName;
    badge.style.display = 'block';
  } else {
    badge.innerText = '';
    badge.style.display = 'none';
  }
}

function getData() {
  if (!window.languageData) {
    console.error("Language data not loaded! Make sure data.js is loaded.");
    return null;
  }
  
  if (!currentLanguage || !currentLevel) {
    console.error("Language or level not selected!", {currentLanguage, currentLevel});
    return null;
  }
  
  const data = window.languageData[currentLanguage]?.[currentLevel];
  
  if (!data) {
    console.error(`No data found for ${currentLanguage} ${currentLevel}`);
  } else {
    console.log(`Successfully loaded data for ${currentLanguage} ${currentLevel}`, Object.keys(data));
  }
  
  return data;
}

function initModule(module) {
  const data = getData();
  if (!data) return;
  
  switch(module) {
    case "vocabulary":
      initVocabulary();
      break;
    case "grammar":
      initGrammar();
      break;
    case "tenses":
      initTenses();
      break;
    case "phrases":
      initPhrases();
      break;
    case "quiz":
      initQuiz();
      break;
    case "checker":
      initChecker();
      break;
  }
}

function animateOnScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1
  });

  // Observe all cards
  document.querySelectorAll('.card, .module-card, .language-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
  });
}

// Utility function to create topic cards
function createTopicCard(text, onClick) {
  const div = document.createElement("div");
  div.className = "card";
  div.innerText = text;
  div.onclick = onClick;
  return div;
}

// Utility function to show content
function showContent(titleElement, contentElement, title, content) {
  titleElement.innerText = title;
  contentElement.innerText = content;
  contentElement.parentElement.classList.remove("hidden");
  
  // Scroll to content
  setTimeout(() => {
    contentElement.parentElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 100);
}
