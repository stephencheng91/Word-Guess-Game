

var answer = ["m","a","d","o","n","n","a"];
var mem = ["_ ","_ ","_ ","_ ","_ ","_ ","_ "];


var word = document.getElementById("word");
var guessed = document.getElementById("userGuessed");
var guessCount = document.getElementById("guessCount");

 

document.onkeyup = function (event){

    guessed.textContent=event.key;
    var output ="";

    //Setting initial value
    var numGuess = 10;
    

    for(var i = 0; i < answer.length; i++){
        
        if(event.key === answer[i]){
            mem[i]=output+event.key;


        }else if(event.key !== answer[i] && numGuess > 0){
            numGuess = numGuess-1; 
        }

        document.getElementById("guessCount").innerHTML = numGuess;
        word.textContent = mem.join("");  
           
            
    }

 

    

 


    
};

