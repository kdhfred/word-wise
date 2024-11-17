class WordStorage {
    constructor() {
        this.initializeStorage();
    }

    initializeStorage() {
        if (!localStorage.getItem('words')) {
            console.log('Initializing storage with words:', initialWords);
            localStorage.setItem('words', JSON.stringify(initialWords));
        }
        if (!localStorage.getItem('selectedLevel')) {
            localStorage.setItem('selectedLevel', 'beginner');
        }
        if (!localStorage.getItem('wrongAnswers')) {
            localStorage.setItem('wrongAnswers', JSON.stringify([]));
        }
    }

    setLevel(level) {
        localStorage.setItem('selectedLevel', level);
    }

    getLevel() {
        return localStorage.getItem('selectedLevel') || 'beginner';
    }

    getWords() {
        try {
            const words = JSON.parse(localStorage.getItem('words'));
            const level = this.getLevel();
            console.log('Current level:', level);
            console.log('Available words:', words);
            return words && words[level] ? words[level] : [];
        } catch (error) {
            console.error('단어 데이터를 불러오는 중 오류가 발생했습니다:', error);
            return [];
        }
    }

    clearStorage() {
        localStorage.clear();
        this.initializeStorage();
    }

    getAllLevelWords() {
        try {
            return JSON.parse(localStorage.getItem('words')) || {};
        } catch (error) {
            console.error('전체 단어 데이터를 불러오는 중 오류가 발생했습니다:', error);
            return {};
        }
    }

    addWord(word, meaning, sentence) {
        const allWords = this.getAllLevelWords();
        const currentLevel = this.getLevel();
        if (!allWords[currentLevel]) {
            allWords[currentLevel] = [];
        }
        allWords[currentLevel].push({ word, meaning, sentence });
        localStorage.setItem('words', JSON.stringify(allWords));
    }

    addWrongAnswer(wordData) {
        try {
            const wrongAnswers = JSON.parse(localStorage.getItem('wrongAnswers')) || [];
            if (!wrongAnswers.find(item => item.word === wordData.word)) {
                wrongAnswers.push(wordData);
                localStorage.setItem('wrongAnswers', JSON.stringify(wrongAnswers));
            }
        } catch (error) {
            console.error('오답 추가 중 오류가 발생했습니다:', error);
        }
    }

    getWrongAnswers() {
        try {
            return JSON.parse(localStorage.getItem('wrongAnswers')) || [];
        } catch (error) {
            console.error('오답 데이터를 불러오는 중 오류가 발생했습니다:', error);
            return [];
        }
    }
} 