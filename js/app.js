class App {
    constructor() {
        this.wordStorage = new WordStorage();
        this.initializeApp();
        this.initializeTheme();
    }

    initializeApp() {
        // 레벨 선택 이벤트 리스너
        document.getElementById('levelSelect').value = this.wordStorage.getLevel();
        document.getElementById('levelSelect').addEventListener('change', (e) => {
            this.wordStorage.setLevel(e.target.value);
            this.showStudyMode();
        });

        // 버튼 이벤트 리스너들
        const buttons = {
            'studyBtn': () => this.showStudyMode(),
            'testBtn': () => this.showTestMode(),
            'searchBtn': () => this.showWordList(),
            'wrongNoteBtn': () => this.showWrongNote()
        };

        // 각 버튼에 이벤트 리스너 추가
        Object.entries(buttons).forEach(([id, handler]) => {
            document.getElementById(id).addEventListener('click', () => {
                this.setActiveTab(id);
                handler();
            });
        });

        // 기본적으로 학습 모드 활성화
        this.setActiveTab('studyBtn');
        this.showStudyMode();
    }

    setActiveTab(activeId) {
        // 모든 탭에서 active 클래스 제거
        const tabs = ['studyBtn', 'testBtn', 'searchBtn', 'wrongNoteBtn'];
        tabs.forEach(id => {
            document.getElementById(id).classList.remove('active');
        });
        // 선택된 탭에 active 클래스 추가
        document.getElementById(activeId).classList.add('active');
    }

    initializeTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        
        const themeToggle = document.getElementById('themeToggle');
        themeToggle.textContent = savedTheme === 'light' ? '☀️' : '🌙';
        
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            themeToggle.textContent = newTheme === 'light' ? '☀️' : '🌙';
        });
    }

    showStudyMode() {
        const studyMode = new StudyMode(this.wordStorage);
        studyMode.render();
    }

    showTestMode() {
        const testMode = new TestMode(this.wordStorage);
        testMode.render();
    }

    showWordList() {
        const wordList = new WordList(this.wordStorage);
        wordList.render();
    }

    showWrongNote() {
        const wrongNote = new WrongNote(this.wordStorage);
        wrongNote.render();
    }
}

// 앱 시작
window.addEventListener('DOMContentLoaded', () => {
    new App();
}); 