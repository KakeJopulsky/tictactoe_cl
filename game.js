const prompt = require('prompt');

const board = {
  1: '',
  2: '',
  3: '',
  4: '',
  5: '',
  6: '',
  7: '',
  8: '',
  9: ''
};

function newGame() {
  for(let square in board) { board[square] = ''; };
  console.log('Would you like to start a new game? y or n');
  prompt.get([`answer`], (err, result) => {
    if (result.answer === 'y') { nextMove(); }
    if (result.answer === 'n') { process.exit() }
    else { 
      console.log('Invalid input!');
      newGame();
    }
  });
}

function checkWin() {
  combos = [[1,2,3], [3,4,5], [6,7,8], [1,5,9], [3,5,7], [1,4,7], [2,5,8], [3,6,9]];
  for(let i = 0; i < combos.length; i += 1) {
    if (board[combos[i][0]] === 'X' && board[combos[i][1]] === 'X' && board[combos[i][2]] === 'X') {
      return true;
    }
    if (board[combos[i][0]] === 'O' && board[combos[i][1]] === 'O' && board[combos[i][2]] === 'O') {
      return true;
    }
  }
  return false; 
}

function showBoard() {
  console.log('\n' +
        ' ' + board[1] + ' | ' + board[2] + ' | ' + board[3] + '\n' +
        ' ---------\n' +
        ' ' + board[4] + ' | ' + board[5] + ' | ' + board[6] + '\n' +
        ' ---------\n' +
        ' ' + board[7] + ' | ' + board[8] + ' | ' + board[9] + '\n');

}
showBoard();

function nextMove(count) {
  prompt.start();
  let player = 'X';
  count = count || 0
  count % 2 === 0 ? player = 'X' : player = 'O';
  console.log(`${player}'s turn!`);
  prompt.get([`move`], (err, result) => {
    board[result.move] = player;
    showBoard();
    if(checkWin()) {
      console.log(`${player} wins!`);
      player = 'X';
      newGame();
    }
    nextMove(++count);
  });
}

nextMove();
