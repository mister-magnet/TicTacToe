const gameBoard = document.querySelector('.game-board');
const cells = document.querySelectorAll('.cell');
const resetButton = document.querySelector('#reset-button');

let currentPlayer = 'X';
let gameStatus = Array(9).fill(null);

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (gameStatus[index] === null) {
            gameStatus[index] = currentPlayer;
            cell.textContent = currentPlayer;
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            checkGameStatus();
        }
    });
});

resetButton.addEventListener('click', () => {
    gameStatus = Array(9).fill(null);
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
});

function checkGameStatus() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
        if (gameStatus[combination[0]] !== null &&
            gameStatus[combination[0]] === gameStatus[combination[1]] &&
            gameStatus[combination[0]] === gameStatus[combination[2]]) {
            alert(`Player ${gameStatus[combination[0]]} wins!`);
            return;
        }
    }

    if (!gameStatus.includes(null)) {
        alert('It\'s a draw!');
    }
}
