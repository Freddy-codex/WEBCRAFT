const words = ['hangman', 'javascript', 'programming', 'developer', 'coding'];
let selectedWord = '';
let guessedWord = [];
let wrongLetters = [];
let incorrectGuesses = 0;
const maxIncorrectGuesses = 10;

function newGame() {
  selectedWord = words[Math.floor(Math.random() * words.length)];
  guessedWord = Array(selectedWord.length).fill('_');
  wrongLetters = [];
  incorrectGuesses = 0;
  display();
}

function display() {
  document.getElementById('word-display').textContent = guessedWord.join(' ');
  document.getElementById('wrong-letters').textContent = wrongLetters.length > 0
    ? `Wrong Letters: ${wrongLetters.join(', ')}`
    : '';

  if (incorrectGuesses === maxIncorrectGuesses) {
    alert(`Sorry, you've reached the maximum incorrect guesses. The word was: ${selectedWord}`);
    newGame();
  }
}

function checkGuess(letter) {
  if (selectedWord.includes(letter)) {
    selectedWord.split('').forEach((char, index) => char === letter ? guessedWord[index] = letter : null);
    display();
  } else if (!wrongLetters.includes(letter)) {
    wrongLetters.push(letter);
    incorrectGuesses++;
    display();
  }

  if (!guessedWord.includes('_')) {
    alert('Congratulations! You guessed the word!');
    newGame();
  }
}

document.getElementById('new-game-btn').addEventListener('click', newGame);

document.addEventListener('keydown', (event) => {
  const letter = event.key.toLowerCase();
  if (/[a-z]/.test(letter) && guessedWord.includes('_')) checkGuess(letter);
});

newGame();