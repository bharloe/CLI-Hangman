var inquirer = require("inquirer");
var Movies = require("./js/movies");

var movieGen = new Movies();
var movie = movieGen.randomMovie();

var hangman = hangmanGen(movie, ".");
console.log("\n" + hangman + "\n");

var guesses = [];
var movieArr = [];

createMovieArray()
play();

function createMovieArray() {
  for (var i = 0; i < movie.length; i++) {
    if (movie[i] === " ") {
    } else {
      movieArr.push(movie[i]);
    }
  }
}

function play() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "letter",
        message: "Guess a letter!"
      }
    ])
    .then(function(response) {
      if (movie.includes(response.letter)) {
        do {
          var index = movieArr.indexOf(response.letter);
          movieArr.splice(index, 1);
        } while (movieArr.indexOf(response.letter) > -1);

        if (movieArr.length === 0) {
          nextWord();
          return;
        }

        guesses.push(response.letter);
        hangman = hangmanGen(movie, guesses);

        console.log(hangman);
        console.log(" Correct!");

        play();
      } else {

        console.log(hangman);
        console.log(" Wrong :(");

        play();
      }
    });
}

function hangmanGen(movie, guesses) {
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
}

function nextWord() {
  console.log("\n==============");
  console.log("   You Win!   ");
  console.log("==============");

  movie = movieGen.randomMovie();
  hangman = hangmanGen(movie, ".");
  console.log("\n" + hangman + "\n");

  guesses = [];
  movieArr = [];
  createMovieArray();

  play();
}