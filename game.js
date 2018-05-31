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

function checkWin() {
  combos = [[1,2,3], [3,4,5], [6,7,8], [1,5,9], [3,5,7], [1,4,7], [2,5,8], [3,6,9]];
  for(let i = 0; i < combos.length; i += 1) {
    if (board[combos[i][0]] === 'X' && board[combos[i][1]] === 'X' && board[combos[i][2]] === 'X') {
      console.log(' X wins!');
    }
    if (board[combos[i][0]] === 'O' && board[combos[i][1]] === 'O' && board[combos[i][2]] === 'O') {
      console.log(' O wins!');
    }
  } 
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
  prompt.get([`move`], function (err, result) {
    board[result.move] = player;
    showBoard();
    checkWin();
    nextMove(++count);
  });
}

nextMove();
