// Kevin's Sanity Check
console.log("Your javascript file is linked correctly.");
// ---------------------------------------------------------------------------------------------------
// // // ### Exercise 1:
// // *Start of Code*
// // Variable Declaration
// let my_name = "Kevin";
// let my_id = "2112"
// let my_address = "Memphis, TN"
// // Template Literal String Creation
// let my_template_string = (`My name is ${my_name}
// My id is ${my_id}
// My address is ${my_address}.`);
// // Print Output to Console Log
// console.log(my_template_string);
// // *End of Code*
// ---------------------------------------------------------------------------------------------------
// // ### Exercise 2:
// // *Start of Code*
// // Copied Predeclared Variables From Instructions
// var contestant = "1_M_l337!";
// var score = "9001";
// // Use of Template Literal String To Alert User The OUTPUT
// let congrats2U = (`Congratulations ${contestant} !!, your score is ${score}`);
// alert(congrats2U);
// // *End of Code*
// ---------------------------------------------------------------------------------------------------
// ### Exercise 3:
// Variable Declartation and Prompts for User Input
// *Start of Code*
let userHomeTeam = prompt("Which Pro Basketball Squad Is Your Home Team?");
let userOpponent = prompt("Who Did They Play?");
let userHomeTeamScore = prompt(`How many points did the ${userHomeTeam} score? (Home Team Score)`);
let userOpponentScore = prompt(`How many points did the ${userOpponent} score? (Visiting Team Score)`);
parseInt(userHomeTeamScore);
parseInt(userOpponentScore);
// Winning Team Scenarios
// Tie Situation
if (userOpponentScore == userHomeTeamScore) {
    alert(`Looks like the ${userHomeTeam} and the ${userOpponent} have tied!
    
    FINAL SCORE:
    Home/${userHomeTeam}: ${userHomeTeamScore}
    Visitors/${userOpponent}: ${userOpponentScore}`);
    console.log("No Winner"); //Check Log for what conditional ran
}
// Home Team Wins
else if (userOpponentScore < userHomeTeamScore) {
    alert(`Looks like the ${userHomeTeam} have defeated the ${userOpponent}!
    
    FINAL SCORE:
    Home/${userHomeTeam}: ${userHomeTeamScore}
    Visitors/${userOpponent}: ${userOpponentScore}`);
    console.log("Home Team should be the declared winner."); //Check Log for what conditional ran
}
// Visiting Team Wins
else {
    alert(`Looks like the ${userOpponent} have defeated the ${userHomeTeam}!
    
    FINAL SCORE:
    Home/${userHomeTeam}: ${userHomeTeamScore}
    Visitors/${userOpponent}: ${userOpponentScore}`);
    console.log("Visiting Team should be the declared winner."); //Check Log for what conditional ran
}








