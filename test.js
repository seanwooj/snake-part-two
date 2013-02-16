// test

var wholeGame = require('./snake.js');
var s = console.log;

board = wholeGame.makeBoard();
board.init(20);

snake = wholeGame.makeSnake();
snake.init();

s(snake.body);
s(snake.getHeadDirection());

snake.changePos('up');
s(snake.body);
snake.changePos('left');
s(snake.body);
snake.changePos('down');
s(snake.body);
snake.changePos('left');
s(snake.body);
snake.changePos('down');
s(snake.body);
snake.changePos('left');
s(snake.body);
snake.changePos('dowm');
s(snake.body);
snake.changePos('right');
s(snake.body);

// board tests
s('board tests');
s('');
s(board.board);
s(board.board.length);

// game tests
snakeGame = wholeGame.makeSnakeGame();
snakeGame.init();
s(snakeGame.snake.body);

// test containsCoordinates
s(snakeGame.containsCoordinates(snakeGame.snake.body, [11,10]));