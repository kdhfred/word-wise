class TestMode {
    constructor(wordStorage) {
        this.wordStorage = wordStorage;
        this.words = this.shuffleWords([...this.wordStorage.getWords()]);
        this.currentIndex = 0;
        this.score = 0;
    }

    shuffleWords(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    render() {
        if (this.currentIndex >= this.words.length) {
            this.showResult();
            return;
        }

        const word = this.words[this.currentIndex];
        const sentence = word.sentence.replace(word.word, '_____');

        const html = `
            <div class="study-container">
                <h2>테스트 모드 (${this.currentIndex + 1}/${this.words.length})</h2>
                <p class="sentence">${sentence}</p>
                <p class="sentence-translation">${word.translation || '번역 준비 중...'}</p>
                <input type="text" id="testInput" placeholder="빈칸에 들어갈 단어를 입력하세요">
                <p class="meaning">의미: ${word.meaning}</p>
                <button id="submitAnswer">정답 제출</button>
            </div>
        `;

        document.getElementById('mainContent').innerHTML = html;
        this.addEventListeners();
    }

    addEventListeners() {
        document.getElementById('submitAnswer').addEventListener('click', () => this.checkAnswer());
    }

    checkAnswer() {
        const input = document.getElementById('testInput').value.toLowerCase();
        const currentWord = this.words[this.currentIndex];
        
        if (input === currentWord.word.toLowerCase()) {
            this.score++;
        } else {
            this.wordStorage.addWrongAnswer(currentWord);
        }

        this.currentIndex++;
        this.render();
    }

    getGrade() {
        const percentage = (this.score / this.words.length) * 100;
        if (percentage >= 90) return 'A';
        if (percentage >= 80) return 'B';
        if (percentage >= 70) return 'C';
        if (percentage >= 60) return 'D';
        return 'F';
    }

    showResult() {
        const html = `
            <div class="study-container">
                <h2>테스트 결과</h2>
                <p>맞은 개수: ${this.score}/${this.words.length}</p>
                <p>점수: ${Math.round((this.score / this.words.length) * 100)}점</p>
                <p>등급: ${this.getGrade()}</p>
                <button id="restartTest">다시 시작</button>
            </div>
        `;

        document.getElementById('mainContent').innerHTML = html;
        document.getElementById('restartTest').addEventListener('click', () => {
            const testMode = new TestMode(this.wordStorage);
            testMode.render();
        });
    }
} 