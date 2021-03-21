// Code Version 0.1
/*
var location1 = 3;
var location2 = 4;
var location3 = 5; //DECLARE three variables to  hold the location of each cell of the ship. Let’s call them location1, location2 and location3.
var guess; //DECLARE a variable to hold the user’s current guess. Let’s call it "guess".
var hits = 0; //DECLARE a variable to hold the number of hits. We’ll call it "hits" and set it to 0.
var guessesAmount = 0;//DECLARE a variable to hold the number of guesses. We’ll call it "guessesAmount" and set it to 0.
var isSunk = false;//DECLARE a variable to keep track of whether the ship is sunk or not. Let’s call it isSunk and set it to false.
//MAIN LOOP: while the ship is not sunk
//var stats =
while (isSunk == false) {
//GET the user’s guess
  guess = prompt("Ready, aim, fire! Enter a number from 0 to 6:");
//COMPARE the user’s input to valid input values
if (guess < 0 || guess > 6) {
  alert("Please enter a valid cell number!"); // if the user’s guess is invalid, TELL user to enter a valid number
} else {
guessesAmount = guessesAmount + 1;
 if (guess == location1 || guess == location2 || guess == location3) { //IF the user’s guess matches a location
   hits = hits + 1; // Increase number of hits
   alert("HIT!");
 } else {
   alert("MISS!");
 }
  if (hits == 3) {
    isSunk = true //SET isSunk to true
    alert("You sank my battleship!"); //TELL user “You sank my battleship!”
    }
  }
}
alert("You took " + guessesAmount + " shots to sing the ship! Which is " + (3/(guessesAmount/100)) + " percent accuracy.");
*/ //TELL user stats

//Issues with version 0.1:
// 1) Locations known, not random
// 2) Allows 3 hits at same location to sink ship

// Code Version 0.2
var randomLoc = Math.floor((Math.random () * 5));
var location1 = randomLoc;
var location2 = randomLoc + 1;
var location3 = randomLoc + 2; //DECLARE three variables to  hold the location of each cell of the ship. Let’s call them location1, location2 and location3.
var guess; //DECLARE a variable to hold the user’s current guess. Let’s call it "guess".
var hits = 0; //DECLARE a variable to hold the number of hits. We’ll call it "hits" and set it to 0.
var guessesAmount = 0;
var accuracy = 3/(guessesAmount/100);
var accuracyPercentage = Math.floor(accuracy);
// var accuracyPercentage = 3/(guessesAmount/100); - WOULD NOT WORK (UPDATE HERE)
//var accuracy = Math.floor(3 / (guessesAmount / 100));//DECLARE a variable to hold the number of guesses. We’ll call it "guessesAmount" and set it to 0.
var isSunk = false; //DECLARE a variable to keep track of whether the ship is sunk or not. Let’s call it isSunk and set it to false.
//MAIN LOOP: while the ship is not sunk
while (isSunk == false) {
//GET the user’s guess
  guess = prompt("Ready, aim, fire! Enter a number from 0 to 6:");
//COMPARE the user’s input to valid input values
if (guess < 0 || guess > 6) {
  alert("Please enter a valid cell number!"); // if the user’s guess is invalid, TELL user to enter a valid number
} else {
guessesAmount = guessesAmount + 1;
 if (guess == location1 || guess == location2 || guess == location3) { //IF the user’s guess matches a location
   hits = hits + 1; // Increase number of hits
   alert("HIT!");
 } else {
   alert("MISS!");
 }
  if (hits == 3) {
    isSunk = true //SET isSunk to true
    alert("You sank my battleship!"); //TELL user “You sank my battleship!”
    }
  }
}
alert("You took " + guessesAmount + " shots to sink the Battleship! Which is " + accuracyPercentage + " percent accuracy.");
//TELL user stats
