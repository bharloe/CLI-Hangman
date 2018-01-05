var Game = require("./js/game");

var game = new Game();

// var intro = game.hangmanGen(this.movie, ".");
// console.log("\n" + intro + "\n");

game.movie;
game.createMovieArray();

game.play();