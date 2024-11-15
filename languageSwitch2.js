document.addEventListener('DOMContentLoaded', () => {
    // 初始化语言
    let currentLang = localStorage.getItem('language') || 'zh';
    
    // 添加语言切换按钮
    const languageButton = document.createElement('button');
    languageButton.className = 'language-switch';
    languageButton.textContent = currentLang === 'zh' ? 'English' : '中文';
    document.querySelector('.header').appendChild(languageButton);
    
    // 切换语言功能
    function switchLanguage() {
        currentLang = currentLang === 'zh' ? 'en' : 'zh';
        localStorage.setItem('language', currentLang);
        updateContent();
        languageButton.textContent = currentLang === 'zh' ? 'English' : '中文';
    }
    
    // 更新页面内容
    function updateContent() {
        try {
            // 更新标题
            document.title = translations[currentLang].title;
            document.querySelector('.header h1').textContent = translations[currentLang].pageTitle;
            
            // 更新菜单
            const menuItems = document.querySelectorAll('.menu-item');
            menuItems[0].textContent = translations[currentLang].menu.home;
            menuItems[1].textContent = translations[currentLang].menu.games;
            menuItems[2].textContent = translations[currentLang].menu.players;
            menuItems[3].textContent = translations[currentLang].menu.more;
            menuItems[4].textContent = translations[currentLang].menu.history;
            
            // 更新文章内容
            const article = document.querySelector('.article-content');
            article.querySelector('h2').textContent = translations[currentLang].article.mainTitle;
            
            // 更新发展阶段标题
            const phaseTitle = article.querySelector('h3');
            if (phaseTitle) {
                phaseTitle.textContent = `1. ${translations[currentLang].article.phase}`;
            }
            
            // 更新各个阶段内容
            const phases = article.querySelectorAll('p');
            if (phases.length >= 6) {
                const phasePrefix = currentLang === 'zh' ? 
                    ['第一阶段（1926年至1951年）：', '第二阶段（1952年至1959年）：', 
                     '第三阶段（1959年至1969年）：', '第四阶段（1971年至1979年）：',
                     '第五阶段（1981年至1988年）：', '第六阶段（1991年以后）：'] :
                    ['Phase 1 (1926-1951): ', 'Phase 2 (1952-1959): ',
                     'Phase 3 (1959-1969): ', 'Phase 4 (1971-1979): ',
                     'Phase 5 (1981-1988): ', 'Phase 6 (After 1991): '];
                
                for (let i = 0; i < 6; i++) {
                    phases[i].innerHTML = `<strong>${phasePrefix[i]}</strong>${translations[currentLang].article['phase' + (i+1)]}`;
                }
            }
            
            // 更新时间线标题
            const timelineTitle = article.querySelectorAll('h3')[1];
            if (timelineTitle) {
                timelineTitle.textContent = `2. ${translations[currentLang].article.timeline}`;
            }
            
            // 更新相关链接
            const relatedLinks = document.querySelectorAll('.related-link');
            relatedLinks[0].textContent = translations[currentLang].relatedLinks.history;
            relatedLinks[1].textContent = translations[currentLang].relatedLinks.chinaDev;
            
            // 更新时间线内容
            const timelineEvents = article.querySelectorAll('.article-content p');
            const startIndex = 6; // 时间线事件开始的索引
            for (let i = startIndex; i < timelineEvents.length; i++) {
                const eventIndex = i - startIndex;
                if (translations[currentLang].article.timelineEvents[`event${eventIndex + 1}`]) {
                    timelineEvents[i].textContent = translations[currentLang].article.timelineEvents[`event${eventIndex + 1}`];
                }
            }
            
            console.log('Language switched successfully to:', currentLang);
        } catch (error) {
            console.error('Error updating content:', error);
        }
    }
    
    // 添加事件监听
    languageButton.addEventListener('click', switchLanguage);
    
    // 初始化页面内容
    updateContent();
}); 