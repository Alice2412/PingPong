let currentLanguage = localStorage.getItem('language') || 'zh';

document.addEventListener('DOMContentLoaded', () => {
    applyTranslations(currentLanguage);
});

function switchLanguage() {
    currentLanguage = currentLanguage === 'zh' ? 'en' : 'zh';
    localStorage.setItem('language', currentLanguage);
    applyTranslations(currentLanguage);
}

function applyTranslations(language) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
} 