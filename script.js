document.addEventListener('DOMContentLoaded', () => {
    const themes = {
        animals: ['🦄', '🐸', '🌟', '🚀', '🎨', '🍎', '🌈', '🏆'],
        space: ['🚀', '🌕', '🛸', '🌟', '👽', '🛰️', '🌌', '🔭'],
        food: ['🍎', '🍕', '🍔', '🍉', '🍇', '🍓', '🍒', '🍩']
    };
    let cardsChosen = [];
    let cardsChosenIds = [];
    let cardsMatched = [];
    let score = 0;
    let timerInterval;
    let timeLeft = 0;

    const cardContainer = document.getElementById('card-container');
    const scoreDisplay = document.getElementById('score');
    const timerDisplay = document.getElementById('timer');
    const levelSelect = document.getElementById('level');
    const modeSelect = document.getElementById('mode');
    const emojiSizeInput = document.getElementById('emoji-size');
    const themeSelect = document.getElementById('theme');

    function createCards() {
        const level = levelSelect.value;
        const cardCount = getCardCount(level);
        const theme = themeSelect.value;
        const shuffledEmojis = shuffleArray([...themes[theme], ...themes[theme]].slice(0, cardCount));
        cardContainer.innerHTML = ''; // Clear existing cards

        shuffledEmojis.forEach((emoji, index) => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.setAttribute('data-id', index);
            card.setAttribute('data-value', emoji);
            card.style.backgroundColor = getRandomColor(); // Assign a random color
            card.style.fontSize = `${emojiSizeInput.value}rem`; // Set emoji size
            card.addEventListener('click', flipCard);
            cardContainer.appendChild(card);
        });

        // Adjust grid size based on level
        cardContainer.className = `card-container ${level}`;
    }

    function getCardCount(level) {
        switch (level) {
            case 'easy':
                return 16;
            case 'medium':
                return 36;
            case 'hard':
                return 64;
            default:
                return 16;
        }
    }

    function shuffleArray(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function flipCard() {
        const clickedCard = this;
        if (clickedCard.classList.contains('flipped') || cardsChosen.length === 2) return;

        clickedCard.classList.add('flipped');
        clickedCard.textContent = clickedCard.getAttribute('data-value');
        cardsChosen.push(clickedCard.getAttribute('data-value'));
        cardsChosenIds.push(clickedCard.getAttribute('data-id'));

        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('.card');
        const [firstId, secondId] = cardsChosenIds;
        if (cardsChosen[0] === cardsChosen[1]) {
            cards[firstId].classList.add('matched');
            cards[secondId].classList.add('matched');
            score++;
            scoreDisplay.textContent = score;
            cardsMatched.push(cardsChosen[0]);
        } else {
            cards[firstId].classList.remove('flipped');
            cards[firstId].textContent = ''; // Remove text for non-matched cards
            cards[secondId].classList.remove('flipped');
            cards[secondId].textContent = ''; // Remove text for non-matched cards
        }
        cardsChosen = [];
        cardsChosenIds = [];

        // Check for game end
        if (cardsMatched.length === cardContainer.children.length / 2) {
            clearInterval(timerInterval);
            alert('Congratulations! You won!');
        }
    }

    function startTimedMode() {
        timeLeft = 60; // 60 seconds for timed mode
        timerDisplay.textContent = `Time left: ${timeLeft}s`;
        timerInterval = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = `Time left: ${timeLeft}s`;
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                alert('Time\'s up! Game over.');
            }
        }, 1000);
    }

    function handleLevelChange() {
        score = 0;
        scoreDisplay.textContent = score;
        cardsMatched = [];
        clearInterval(timerInterval);
        createCards();
    }

    function handleModeChange() {
        if (modeSelect.value === 'timed') {
            startTimedMode();
        } else {
            clearInterval(timerInterval);
            timerDisplay.textContent = '';
        }
    }

    function handleEmojiSizeChange() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.style.fontSize = `${emojiSizeInput.value}rem`;
        });
    }

    // Event listeners
    levelSelect.addEventListener('change', handleLevelChange);
    modeSelect.addEventListener('change', handleModeChange);
    emojiSizeInput.addEventListener('input', handleEmojiSizeChange);
    themeSelect.addEventListener('change', handleLevelChange);

    // Initialize game
    createCards();
});
