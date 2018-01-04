var inquirer = require(inquirer);


inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Who are you???"
    }
]).then(function(user) {
    // If the user guesses the password...
    if (user.myPassword === "myHouse") {
      console.log("==============================================");
      console.log("==============================================");
    }
    // If the user doesn't guess the password...
    else {
      console.log("==============================================");
      console.log("==============================================");
    }
  });