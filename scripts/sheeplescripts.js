window.onload = function() {
    if (localStorage.getItem("player1Name") === null){
        localStorage.setItem("player1Name", "Player 1");
    }
    if (localStorage.getItem("player2Name") === null){
        localStorage.setItem("player2Name", "Player 2");
    }
    if (localStorage.getItem("player3Name") === null){
        localStorage.setItem("player3Name", "Player 3");
    }
    if (localStorage.getItem("player4Name") === null){
        localStorage.setItem("player4Name", "Player 4");
    }

    
    document.getElementById('player1Name').innerHTML = localStorage.getItem("player1Name");
    document.getElementById('player2Name').innerHTML = localStorage.getItem("player2Name");	
    document.getElementById('player3Name').innerHTML = localStorage.getItem("player3Name");	
    document.getElementById('player4Name').innerHTML = localStorage.getItem("player4Name");	
    
    document.getElementById("player1Name").addEventListener("input", function(el) {
        localStorage.setItem("player1Name", document.getElementById('player1Name').innerHTML);
    });
    document.getElementById("player2Name").addEventListener("input", function(el) {
        localStorage.setItem("player2Name", document.getElementById('player2Name').innerHTML);
    });
    document.getElementById("player3Name").addEventListener("input", function(el) {
        localStorage.setItem("player3Name", document.getElementById('player3Name').innerHTML);
    });
    document.getElementById("player4Name").addEventListener("input", function(el) {
        localStorage.setItem("player4Name", document.getElementById('player4Name').innerHTML);
    });

    newClue();
}

var audio = new Audio('img/beee.mp3');

function newClue(){
    var clue = randomSeed();
    console.log(clue);

    document.getElementById("sheepleQ").innerHTML = clue;   

}

function randomSeed(){
    var randIndex = Math.floor(Math.random() * (sheepledata.length))
    return sheepledata[randIndex];
}


function resetScore(){
    var scores = document.getElementsByClassName("scoreInput");
    if (window.confirm("Are you sure you want to reset scoreboard?")) {
        for (let i = 0; i < scores.length; i++) {
            scores[i].value = 0;
        }

        resetBlackSheep();        
    }   
}

function setBlackSheep(id) {

    document.querySelectorAll('.sheep').forEach(function(sh) {
        console.log(sh.id);

        if (sh.id == id) {
            sh.classList.add("black");
            sh.classList.remove("white");
            audio.play();
            
        } else {                
            sh.classList.add("white");
            sh.classList.remove("black");
        }
    });
   
}

function resetBlackSheep() {
    document.querySelectorAll('.sheep').forEach(function(sh) {                 
        sh.classList.add("white");
        sh.classList.remove("black");            
    });
}