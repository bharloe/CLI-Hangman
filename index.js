var inquirer = require("inquirer");
var Movies = require("./js/movies");

var movieGen = new Movies();
var movie = movieGen.randomMovie();
// var hangman = hangmanGen(movie, letter);

// play();

function play() {
  console.log(movie);
  inquirer
    .prompt([
      {
        type: "input",
        name: "letter",
        message: "Guess a letter!\n" + hangman
      }
    ])
    .then(function(response) {
      if (movie.includes(response.letter)) {
        console.log("letter is in the word");
      } else {
        console.log("Wrong :(");
        play();
      }
    });
}

function hangmanGen(movie, letter) {
  var result = [];

  for (var i = 0; i < movie.length; i++) {
    if (movie[i] === " ") {
      result.push("_")
    } else {
      result.push(" _ ");
    }
  }

  // for (var i = 0; i < movie.length; i++) {
  //   if (movie[i] === letter) {
  //   } else if (movie[i] === " ") {
  //   } else {
  //     stringFront = movie.slice(0, i);
  //     stringBack = movie.slice(i + 1, movie.length);
  //     movie = stringFront + "_" + stringBack;
  //   }
  // }

  console.log(result);
  return result;
}

hangmanGen(movie, "l");
