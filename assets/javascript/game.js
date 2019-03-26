

var answer = ["m","a","d","o","n","n","a"];
var mem = ["_ ","_ ","_ ","_ ","_ ","_ ","_ "];


var word = document.getElementById("word");
var guessed = document.getElementById("userGuessed");
var guessCount = document.getElementById("guessCount");
//Setting initial value
var numGuess = 10;
var charGuess = [];

//Create a reset function
function reset(){

    mem = ["_ ","_ ","_ ","_ ","_ ","_ ","_ "];
    numGuess = 10;
    charGuess = [];
}
 

document.onkeyup = function (event){

    document.getElementById("guessCount").innerHTML = numGuess;
    var output ="";
    var enterChar = event.key;

    for(var i = 0; i < answer.length; i++){
        
        if(event.key === answer[i]){
            mem[i]=output+enterChar;
        }
        word.textContent = mem.join("");
                  
    }

    if(numGuess > 0 && !answer.includes(enterChar) && !charGuess.includes(enterChar)){
        numGuess -= 1; 
        charGuess.push(enterChar);
        guessed.textContent=charGuess; 
    }else if(numGuess>0 && mem.join("")===answer.join("")){
        alert("Winner!!!")
        reset();
    }else if(numGuess === 0){
        alert("You have loss the game");
        alert("Game reset");
        reset();
    }
    
};
