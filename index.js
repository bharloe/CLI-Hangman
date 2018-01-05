var inquirer = require("inquirer");
var Movies = require("./js/movies");

var movieGen = new Movies();
var movie = movieGen.randomMovie();

var hangman = hangmanGen(movie, ".");
console.log("\n" + hangman + "\n");

var guesses = [];

play();

function play() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "letter",
        message: "Guess a letter!\n"
      }
    ])
    .then(function(response) {
      if (movie.includes(response.letter)) {
        guesses.push(response.letter);
        hangman = hangmanGen(movie, guesses);

        console.log(hangman + "\n");
        console.log("              ");
        console.log("   Correct!   ");
        play();
      } else {
        console.log(hangman + "\n");
        console.log("   Wrong :(   ");

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

