// snake ui


$(function(){
  game = makeSnakeGame();
  game.init();
  createBoardUI();
  runLoop();
});

GAME_LOOP = 100;

$('html').keydown(function (event) {
  console.log('you presseed keycode:' + event.keyCode);
  switch(event.keyCode) {
    case 38:
      game.snake.turn('up');
      break;
    case 40:
      game.snake.turn('down');
      break;
    case 37:
      game.snake.turn('left');
      break;
    case 39:
      game.snake.turn('right');
      break;
  }
  window.setTimeout(GAME_LOOP);
  updateBoardUI();
});

function runLoop() {
  if( !(game.isDead())) {
    window.setTimeout(runLoop, GAME_LOOP);
    game.snake.stepCycle();
    updateBoardUI();
  }
}


function createBoardUI() {
  console.log(game);
  for(row = 0; row < game.board.board.length; row++ ){
    for(col = 0; col < game.board.board[0].length; col++ ) {
      $('.snake').append(
        $('<div></div>')
          .addClass('grid')
          .addClass('r'+row+'c'+col)
      )
    }
  }
  updateBoardUI();
}

function updateBoardUI() {
  for(row = 0; row < game.board.board.length; row++ ){
    for(col = 0; col < game.board.board[0].length; col++ ) {
      if ( game.containsCoordinates(game.snake.body, [row, col])){
        $('.r'+row+'c'+col)
          .addClass('snake-body')
          .removeClass('apple')
      } else if ( game.containsCoordinates(game.apple, [row, col])) {
        $('.r'+row+'c'+col)
          .addClass('apple');
      } else {
        $('.r'+row+'c'+col)
          .removeClass('snake-body')
          .removeClass('apple')
      }
    }
  }
}

