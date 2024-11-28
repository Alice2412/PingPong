// 获取用户之前选择的语言，如果没有则默认中文
let currentLanguage = localStorage.getItem('language') || 'zh';

// 页面加载时应用已保存的语言
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations(currentLanguage);
});

// 切换语言的函数
function switchLanguage() {
    currentLanguage = currentLanguage === 'zh' ? 'en' : 'zh';
    localStorage.setItem('language', currentLanguage);
    applyTranslations(currentLanguage);
}

// 应用翻译的函数
function applyTranslations(language) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
} 