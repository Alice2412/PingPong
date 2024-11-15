let currentLanguage = localStorage.getItem('language') || 'zh';

function switchLanguage() {
    currentLanguage = currentLanguage === 'zh' ? 'en' : 'zh';
    localStorage.setItem('language', currentLanguage);
    updateContent();
}

function updateContent() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
    document.title = translations[currentLanguage]['page-title'];
}

document.addEventListener('DOMContentLoaded', updateContent); 