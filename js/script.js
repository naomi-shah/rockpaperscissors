// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var userChoice;
var computerChoice;
var winner;
var randomNumber = 0;
$("#shoot").click(function(){
    userChoice = $("#input").val();
    $("#userChoice").text(userChoice);
    randomNumber = Math.random();
   
   if(randomNumber <= 0.9999 && randomNumber >= 0.6666){
       computerChoice = "rock";
       $("#computerChoice").text(computerChoice);
   } else if(randomNumber <0.6666 && randomNumber>= 0.3333){
       computerChoice = "paper";
       $("#computerChoice").text(computerChoice);
   } else if(randomNumber< 0.3333 && randomNumber >= 0){
       computerChoice = "scissors";
       $("#computerChoice").text(computerChoice);
   }
   
   if(userChoice===computerChoice){
       $("#result").text("Tie");
   }else if(userChoice === "rock" && computerChoice === "paper"){
       $("#result").text("Computer Wins!");
   }else if(userChoice === "rock" && computerChoice === "scissors"){
       $("#result").text("User Wins!");
   }else if(userChoice === "paper" && computerChoice === "rock"){
       $("#result").text("User Wins!");
   }else if(userChoice === "paper" && computerChoice === "scissors"){
       $("#result").text("Computer Wins!");
   }else if(userChoice === "scissors" && computerChoice === "paper"){
       $("#result").text("User Wins!");
   }else if(userChoice === "scissors" && computerChoice === "rock"){
       $("#result").text("Computer Wins!");
   } else{
       $("#result").text("USER INPUT ERROR");
   }

    function resetform() {
        document.getElementById("input").reset();
    }
});




// DOCUMENT READY FUNCTION BELOW

