var inquirer = require("inquirer");
var Movies = require("./js/movies");

var movieGen = new Movies();
var movie = movieGen.randomMovie();
var hangman = hangmanGen(movie, letter);

play();

function play() {
  console.log(movie);
  ;

  inquirer
    .prompt([
      {
        type: "input",
        name: "letter",
        message: "Guess a letter!\n"+hangman
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
  var gameString = movie;
  if (gameString[i] === letter) {
    
  }

}

