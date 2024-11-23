// 获取当前语言设置或默认为中文
let currentLanguage = localStorage.getItem('language') || 'cn';

// 初始化页面语言
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLanguage);
    updateLanguageButton();
});

// 切换语言函数
function toggleLanguage() {
    currentLanguage = currentLanguage === 'cn' ? 'en' : 'cn';
    setLanguage(currentLanguage);
    updateLanguageButton();
    localStorage.setItem('language', currentLanguage);
}

// 设置语言
function setLanguage(language) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
}

// 更新语言切换按钮文本
function updateLanguageButton() {
    const languageButton = document.querySelector('.language-switch');
    languageButton.textContent = currentLanguage === 'cn' ? 'English' : '中文';
} 