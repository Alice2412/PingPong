// 当前语言存储在 localStorage 中
let currentLanguage = localStorage.getItem('language') || 'zh';

// 初始化页面语言
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLanguage);
    updateButtonText();
});

// 切换语言函数
function toggleLanguage() {
    currentLanguage = currentLanguage === 'zh' ? 'en' : 'zh';
    setLanguage(currentLanguage);
    localStorage.setItem('language', currentLanguage);
    updateButtonText();
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

// 更新按钮文字
function updateButtonText() {
    const button = document.querySelector('.language-switch');
    button.textContent = currentLanguage === 'zh' ? 'English' : '中文';
} 