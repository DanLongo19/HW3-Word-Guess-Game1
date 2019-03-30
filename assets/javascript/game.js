// Variables
var wordOptions = ["homerun" , "strikeout" , "single" , "double" , "triple" , "brewers"];
var chosenWord = "";
var lettersInWord = [];
var wrongLetters = [];
var numBlanks = 0;
var blanksArray =[]; 
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;
var letterCorrect = false;

//DOM elements 
var blanksEl = document.getElementById("blanks");

// Functions
function startGame(){
    chosenWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    console.log(chosenWord);
    lettersInWord = chosenWord.split("");
    console.log(lettersInWord);
    wrongLetters = lettersInWord.length;
    guessesLeft = 9;
    wrongLetters = 0;
    blanksArray = [];
    
    for (var i = 0; i < numBlanks.length; i++){
    blanksArray.push("_ ");
    }}

    // blanksEl.textContent = blanksArray.join("");
    // document.getElementById("guesses").innerHTML = guessesLeft;
    // document.getElementById("wins").innerHTML = winCount;
    // document.getElementById("losses").innerHTML = lossCount;
    // document.getElementById("spaces").innerHTML = blanksArray.join(" ");

function checkLetter(letter){
 
    for (var i=0; i<numBlanks; i++){
        if(chosenWord[i] == letter) {
            letterCorrect = true;
            
        }
    }
}
if (letterCorrect) {
    for (var i=0; i<numBlanks; i++){
        if(chosenWord[i] == letter) {
        blanksArray[i]  = letter;
         }
    }
}    
    // else {
        // wrongLetters.push(letter);
        // guessesLeft --
    

function gameOver(){}
// console.log("Win Count: " + winCount + " | "Loss Count: " + lossCount + " | "Guesses Left: " + guessesLeft)

        document.getElementById("guesses").innerHTML = guessesLeft;
        document.getElementById("spaces").innerHTML = blanksArray.join();
        document.getElementById("wrong").innerHTML = wrongLetters.join();

    if(lettersInWord.toString() == blanksArray.toString()) {
        winCount++;
        alert("You Win!");

        document.getElementById("wins").innerHTML = winCount;

        startGame()
    }
    else if (guessesLeft = 0) {
        lossCount++;
        alert("You Lost!");
    }
        document.getElementById("losses").innerHTML = lossCount;

    console.log(numBlanks);
    console.log(blanksArray);

// What happens (call functions to make something happen)
startGame();

//changes
// document.getElementById("wordGuess").innerHTML = blanksArray.join(" ");


//For Later
      document.onkeyup = function(event) {
        var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
        confirmLetter(letterGuessed);
        gameOver();
}
// USE THIS FOR HW
// $(".letter-button").on("click", function () {
    // console.log("clicked", $(this).attr("data-letter"));
    //  var fridgeMagnet = $("<div>");
    // fridgeMagnet.addClass("letter fridge-color");
    // fridgeMagnet.text($(this).attr("data-letter"));
    // $("#display").append(fridgeMagnet);