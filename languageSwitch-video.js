// 获取当前语言设置或默认为中文
let currentLanguage = localStorage.getItem('language') || 'cn';

// 初始化页面时应用已保存的语言设置
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations(currentLanguage);
    updateButtonText();
});

// 切换语言的函数
function toggleLanguage() {
    currentLanguage = currentLanguage === 'cn' ? 'en' : 'cn';
    localStorage.setItem('language', currentLanguage);
    applyTranslations(currentLanguage);
    updateButtonText();
}

// 更新语言切换按钮的文本
function updateButtonText() {
    const button = document.querySelector('.language-switch');
    button.textContent = currentLanguage === 'cn' ? 'English' : '中文';
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

// 添加相关链接的翻译
translations.cn.relatedTerms = "体育术语";
translations.cn.relatedTitles = "运动员称号";
translations.en.relatedTerms = "Sports Terms";
translations.en.relatedTitles = "Athlete Titles"; 