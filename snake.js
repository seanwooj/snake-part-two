if (!(typeof require)) {
  require('./underscore-min.js');
}

function makeSnakeGame() {
  return {
    snake: undefined,
    board: undefined,
    apple: undefined,

    init: function() {
      this.snake = makeSnake();
      this.snake.init();
      this.board = makeBoard();
      this.board.init(20);
      this.createApple();
    },

    containsCoordinates: function(arrayOfCoords, targetCoords) {
      trueToggle = false;
      for(i = 0; i < arrayOfCoords.length; i++ ) {
        if ( arrayOfCoords[i].toString() === targetCoords.toString()) {
          trueToggle = true;
        }
      }
      return trueToggle;
    },

    createApple: function() {
      // array is double wrapped in order to allow contains coordinate to work
      this.apple = [[Math.floor((Math.random() * 20)), Math.floor((Math.random() * 20))]]
    }
  }
}

function makeBoard() {
  return {
    board: undefined,

    init: function(size){
      this.board = [];
      for( i = 0; i < size; i++ ) {
        this.board[i] = [];
        for ( j = 0; j < size; j++ ) {
          this.board[i].push("");
        }
      }
    }
  }
}


function makeSnake(){
  return {
    body: undefined,

    init: function() {
      this.body= [ [10, 10], [10, 9], [10, 8], [10, 7], [10, 6] ] // right
      // this.body= [ [10, 6], [10, 7], [10, 8], [10, 9], [10, 10] ] // left
      // this.body= [ [10, 10], [9, 10], [8, 10], [7, 10], [6, 10] ] // down
      // this.body= [ [6, 10], [7, 10], [8, 10], [9, 10], [10, 10] ] // down
    },

    getHeadDirection: function() {
      var head = this.body[0];
      var second = this.body[1];

      // left or right
      if (!(head[0] - second[0])) {
        if (head[1] > second[1]) {
          return 'right';
        } else {
          return 'left';
        }
      } else {
        if (head[0] > second[0]) {
          return 'down'
        } else {
          return 'up'
        }
      }
    },

    getTailDirection: function() {

    },

    stepCycle: function() {
      direction = this.getHeadDirection();
      this.changePos(direction);
    },

    changePos: function(direction) {
      head = this.body[0];
      switch(direction) {
        case 'left':
          this.body.unshift([head[0], head[1] - 1]);
          break;
        case 'right':
          this.body.unshift([head[0], head[1] + 1]);
          break;
        case 'down':
          this.body.unshift([head[0] + 1, head[1]]);
          break;
        case 'up':
          this.body.unshift([head[0] - 1, head[1]]);
          break;
      }
      this.body.pop();
    },

    turn: function(desiredDirection) {
      currentDirection = this.getHeadDirection();
      if ( currentDirection == 'right' && desiredDirection == 'left' || currentDirection == 'right' && desiredDirection == 'right') {
        // nothing
      } else if ( currentDirection == 'left' && desiredDirection == 'right' || currentDirection == 'left' && desiredDirection == 'left') {
        // nothing
      } else if ( currentDirection == 'up' && desiredDirection == 'down' || currentDirection == 'up' && desiredDirection == 'up') {
        // nothing
      } else if ( currentDirection == 'down' && desiredDirection == 'up' || currentDirection == 'down' && desiredDirection == 'down') {
        // nothing
      } else {
        this.changePos(desiredDirection);
      }
    }
  }
}


// module.exports = {
//   makeBoard: makeBoard,
//   makeSnake: makeSnake,
//   makeSnakeGame: makeSnakeGame,
//   makeApple: makeApple
// }
