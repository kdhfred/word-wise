class WrongNote {
    constructor(wordStorage) {
        this.wordStorage = wordStorage;
        this.wrongAnswers = this.wordStorage.getWrongAnswers();
    }

    render() {
        const html = `
            <div class="study-container">
                <h2>오답 노트</h2>
                ${this.wrongAnswers.length > 0 ? this.renderWrongAnswers() : '<p>아직 오답이 없습니다.</p>'}
            </div>
        `;

        document.getElementById('mainContent').innerHTML = html;
    }

    renderWrongAnswers() {
        return this.wrongAnswers.map(word => `
            <div class="word-item">
                <p><strong>${word.word}</strong> - ${word.meaning}</p>
                <p>${word.sentence}</p>
            </div>
        `).join('');
    }
} 