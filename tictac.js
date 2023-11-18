// Create a 3x3 empty board
const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  
  let currentPlayer = 'X';
  
  // Function to check for a winner
  function checkWinner() {
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] === currentPlayer &&
        board[i][1] === currentPlayer &&
        board[i][2] === currentPlayer
      ) {
        return true; // Row
      }
      if (
        board[0][i] === currentPlayer &&
        board[1][i] === currentPlayer &&
        board[2][i] === currentPlayer
      ) {
        return true; // Column
      }
    }
  
    if (
      board[0][0] === currentPlayer &&
      board[1][1] === currentPlayer &&
      board[2][2] === currentPlayer
    ) {
      return true; // Diagonal
    }
    if (
      board[0][2] === currentPlayer &&
      board[1][1] === currentPlayer &&
      board[2][0] === currentPlayer
    ) {
      return true; // Diagonal
    }
  
    return false; // No winner
  }
  
  // Function to handle a player's move
  function makeMove(row, col) {
    if (board[row][col] === '' && !checkWinner()) {
      board[row][col] = currentPlayer;
      renderBoard();
      if (checkWinner()) {
        alert(`Player ${currentPlayer} wins!`);
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }
  
  // Function to render the game board
  function renderBoard() {
    const boardElement = document.getElementById('board');
    boardElement.innerHTML = '';
  
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.textContent = board[i][j];
        cell.addEventListener('click', () => makeMove(i, j));
        boardElement.appendChild(cell);
      }
    }
  }

  renderBoard();
// Function to restart the game
function restartGame() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        board[i][j] = '';
      }
    }
    currentPlayer = 'X';
    renderBoard();
  }
  
  document.getElementById('res').addEventListener('click', restartGame);
  
  // Initial render
  renderBoard();
  
  
  document.getElementById('res').addEventListener('click', restartGame);

  // Initial render
  renderBoard();