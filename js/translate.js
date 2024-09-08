const translations = {
    hu: {
      heading: "Welcome",
      paragraph: "This is a simple website with a language toggle feature."
    },
    en: {
      heading: "Bienvenido",
      paragraph: "Este es un sitio web simple con una función de cambio de idioma."
    }
  };





  // Set default language based on the user's browser language or fallback to English
const defaultLanguage = navigator.language.startsWith('hu') ? 'hu' : 'en';
setLanguage(defaultLanguage);

// Function to set the language
function setLanguage(language) {
  const elementsToTranslate = document.querySelectorAll("[id]");

  // Loop through each translatable element and update text
  elementsToTranslate.forEach(el => {
    const translationKey = el.id;
    el.textContent = translations[language][translationKey];
  });

  // Store the selected language in localStorage to persist across sessions
  localStorage.setItem('language', language);
}

// Load saved language preference when page loads
window.onload = () => {
  const savedLanguage = localStorage.getItem('language') || defaultLanguage;
  setLanguage(savedLanguage);
};