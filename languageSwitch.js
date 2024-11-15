let currentLanguage = localStorage.getItem('language') || 'zh';

function setLanguage(language) {
    currentLanguage = language;
    localStorage.setItem('language', language);
    
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[language][key];
    });
    
    // 更新切换按钮文本
    const switchButton = document.querySelector('.language-switch');
    switchButton.textContent = translations[language]['switchLang'];
}

function toggleLanguage() {
    const newLanguage = currentLanguage === 'zh' ? 'en' : 'zh';
    setLanguage(newLanguage);
}

// 页面加载时设置语言
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLanguage);
}); 