var Movies = require("./movies");
var inquirer = require("inquirer");

var movieGen = new Movies();

function HangmanGame() {
  this.movie = movieGen.randomMovie();

  this.movieArr = [];

  this.guesses = [];

  this.play = function() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "letter",
          message: "Guess a letter!"
        }
      ])
      .then(function(response) {
        console.log(this.movie);
        if (this.movie.includes(response.letter)) {
          do {
            var index = this.movieArr.indexOf(response.letter);
            this.movieArr.splice(index, 1);
          } while (this.movieArr.indexOf(response.letter) > -1);

          if (this.movieArr.length === 0) {
            nextWord();
            return;
          }

          this.guesses.push(response.letter);
          this.hangman = hangmanGen(movie, this.guesses);

          console.log(this.hangman);
          console.log(" Correct!");

          play();
        } else {
          console.log(this.hangman);
          console.log(" Wrong :(");

          play();
        }
      });
  };

  this.hangmanGen = function(movie, guesses) {
    var resultArr = [];
    var result = "";

    for (var i = 0; i < movie.length; i++) {
      if (movie[i] === " ") {
        resultArr.push("    ");
      } else {
        resultArr.push(" _ ");
      }
    }

    for (var a = 0; a < guesses.length; a++) {
      for (var i = 0; i < movie.length; i++) {
        if (movie[i] === guesses[a]) {
          resultArr[i] = " " + guesses[a] + " ";
        }
      }
    }

    for (var i = 0; i < resultArr.length; i++) {
      result += resultArr[i];
    }

    return result;
  };

  this.hangman = this.hangmanGen(this.movie, ["."]);

  this.createMovieArray = function() {
    for (var i = 0; i < this.movie.length; i++) {
      if (this.movie[i] === " ") {
      } else {
        this.movieArr.push(this.movie[i]);
        console.log(this.movieArr);
      }
    }
  };

  this.nextWord = function() {
    console.log("\n==============");
    console.log("   You Win!   ");
    console.log("==============");

    this.movie = this.movieGen.randomMovie();
    this.hangman = hangmanGen(movie, ".");
    console.log("\n" + this.hangman + "\n");

    this.guesses = [];
    this.movieArr = [];
    createMovieArray();

    play();
  };
}

module.exports = HangmanGame;
