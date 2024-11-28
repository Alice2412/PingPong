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
}

// 页面加载时应用已保存的语言设置
document.addEventListener('DOMContentLoaded', () => {
    updateContent();
}); 