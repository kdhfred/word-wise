class WordList {
    constructor(wordStorage) {
        this.wordStorage = wordStorage;
        this.words = this.wordStorage.getWords();
    }

    render() {
        const html = `
            <div class="study-container">
                <h2>단어 목록</h2>
                <div class="search-container">
                    <input type="text" id="searchInput" placeholder="단어 검색">
                </div>
                <div class="word-list">
                    ${this.renderWords()}
                </div>
                <div class="add-word-form">
                    <h3>새 단어 추가</h3>
                    <input type="text" id="newWord" placeholder="단어">
                    <input type="text" id="newMeaning" placeholder="의미">
                    <input type="text" id="newSentence" placeholder="예문">
                    <button id="addWordBtn">단어 추가</button>
                </div>
            </div>
        `;

        document.getElementById('mainContent').innerHTML = html;
        this.addEventListeners();
    }

    renderWords() {
        return this.words.map((word, index) => `
            <div class="word-item">
                <p><strong>${word.word}</strong> - ${word.meaning}</p>
                <p>${word.sentence}</p>
                <button onclick="wordList.deleteWord(${index})">삭제</button>
            </div>
        `).join('');
    }

    addEventListeners() {
        document.getElementById('searchInput').addEventListener('input', (e) => this.searchWords(e.target.value));
        document.getElementById('addWordBtn').addEventListener('click', () => this.addNewWord());
    }

    searchWords(query) {
        const filteredWords = this.wordStorage.getWords().filter(word => 
            word.word.toLowerCase().includes(query.toLowerCase()) ||
            word.meaning.includes(query)
        );
        this.words = filteredWords;
        document.querySelector('.word-list').innerHTML = this.renderWords();
    }

    addNewWord() {
        const word = document.getElementById('newWord').value;
        const meaning = document.getElementById('newMeaning').value;
        const sentence = document.getElementById('newSentence').value;

        if (word && meaning && sentence) {
            this.wordStorage.addWord(word, meaning, sentence);
            this.words = this.wordStorage.getWords();
            this.render();
        } else {
            alert('모든 필드를 입력해주세요.');
        }
    }

    deleteWord(index) {
        const words = this.wordStorage.getWords();
        words.splice(index, 1);
        localStorage.setItem('words', JSON.stringify(words));
        this.words = words;
        this.render();
    }
} 