class StudyMode {
  constructor(wordStorage) {
    this.wordStorage = wordStorage;
    this.currentWordIndex = 0;
    this.words = this.wordStorage.getWords() || [];
    this.currentGuess = "";
    this.isAnswerChecking = false; // 정답 체크 중복 방지
  }

  render() {
    if (!this.words || this.words.length === 0) {
      document.getElementById("mainContent").innerHTML = `
                <div class="study-container">
                    <h2>단어 학습</h2>
                    <p>현재 선택된 레벨에 학습할 단어가 없습니다.</p>
                </div>
            `;
      return;
    }

    const word = this.words[this.currentWordIndex];
    const sentence = word.sentence.replace(word.word, "_____");
    const hiddenWord = this.getHiddenWord(word.word, this.currentGuess);

    const html = `
            <div class="study-container">
                <h2>단어 학습</h2>
                <p class="sentence">${sentence}</p>
                <p class="sentence-translation">${word.translation || '번역 준비 중...'}</p>
                <input type="text" id="wordInput" placeholder="빈칸에 들어갈 단어를 입력하세요">
                <p class="hidden-word">${hiddenWord}</p>
                <p class="meaning">의미: ${word.meaning}</p>
                <p class="hint">엔터를 눌러 정답을 확인하세요</p>
                <button id="checkAnswer" class="primary-button">정답 확인</button>
            </div>
        `;

    document.getElementById("mainContent").innerHTML = html;
    this.addEventListeners();
  }

  getHiddenWord(word, guess) {
    return word
      .split("")
      .map((letter, index) => {
        if (
          index < guess.length &&
          guess[index].toLowerCase() === letter.toLowerCase()
        ) {
          return letter;
        }
        return "_";
      })
      .join(" ");
  }

  addEventListeners() {
    if (!this.words || this.words.length === 0) return;

    const input = document.getElementById("wordInput");
    const checkButton = document.getElementById("checkAnswer");

    // 입력 이벤트
    input.addEventListener("input", (e) => {
      this.currentGuess = e.target.value;
      const word = this.words[this.currentWordIndex];
      const hiddenWord = this.getHiddenWord(word.word, this.currentGuess);
      document.querySelector(".hidden-word").textContent = hiddenWord;
    });

    // 엔터 키 이벤트
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        this.checkAnswer(this.currentGuess);
      }
    });

    // 버튼 클릭 이벤트
    checkButton.addEventListener("click", () => {
      this.checkAnswer(this.currentGuess);
    });

    // 입력 필드에 포커스
    input.focus();
  }

  checkAnswer(input) {
    if (this.isAnswerChecking) return; // 이미 체크 중이면 중복 실행 방지

    const currentWord = this.words[this.currentWordIndex];

    if (input.toLowerCase() === currentWord.word.toLowerCase()) {
      this.isAnswerChecking = true; // 체크 시작

      // 정답 처리
      const hiddenWord = document.querySelector(".hidden-word");
      hiddenWord.textContent = currentWord.word;
      hiddenWord.classList.add("correct-answer", "celebration");

      // 축하 효과 생성
      this.createConfetti();

      // 입력 필드 비활성화
      const inputField = document.getElementById("wordInput");
      const checkButton = document.getElementById("checkAnswer");
      inputField.disabled = true;
      checkButton.disabled = true;

      // 2초 후 다음 단어로 자동 이동
      setTimeout(() => {
        this.nextWord();
        this.isAnswerChecking = false; // 체크 종료
      }, 2000);
    } else if (
      input.length >= currentWord.word.length &&
      input.toLowerCase() !== currentWord.word.toLowerCase()
    ) {
      // 틀린 답이고 입력한 글자 수가 정답 이상일 때
      this.wordStorage.addWrongAnswer(currentWord);
    }
  }

  createConfetti() {
    const colors = ["#FF6B6B", "#6200EE", "#4CAF50", "#FFC107", "#2196F3"];
    for (let i = 0; i < 20; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDelay = Math.random() * 0.5 + "s";
      document.body.appendChild(confetti);

      confetti.addEventListener("animationend", () => {
        confetti.remove();
      });
    }
  }

  nextWord() {
    const hiddenWord = document.querySelector(".hidden-word");
    if (hiddenWord) {
      hiddenWord.classList.remove("correct-answer", "celebration");
    }

    this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
    this.currentGuess = "";
    this.render();
  }
}
