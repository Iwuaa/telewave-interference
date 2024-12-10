window.onload = function() {
    setPlayers();

    newClue();
}

var maxPlayers = 8;

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
        // console.log(sh.id);

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

function setPlayers(){

    // names
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
    if (localStorage.getItem("player5Name") === null){
        localStorage.setItem("player5Name", "Player 5");
    }
    if (localStorage.getItem("player6Name") === null){
        localStorage.setItem("player6Name", "Player 6");
    }
    if (localStorage.getItem("player7Name") === null){
        localStorage.setItem("player7Name", "Player 7");
    }
    if (localStorage.getItem("player8Name") === null){
        localStorage.setItem("player8Name", "Player 8");
    }
    
    document.getElementById('player1Name').innerHTML = localStorage.getItem("player1Name");
    document.getElementById('player2Name').innerHTML = localStorage.getItem("player2Name");	
    document.getElementById('player3Name').innerHTML = localStorage.getItem("player3Name");	
    document.getElementById('player4Name').innerHTML = localStorage.getItem("player4Name");	
    document.getElementById('player5Name').innerHTML = localStorage.getItem("player5Name");
    document.getElementById('player6Name').innerHTML = localStorage.getItem("player6Name");	
    document.getElementById('player7Name').innerHTML = localStorage.getItem("player7Name");	
    document.getElementById('player8Name').innerHTML = localStorage.getItem("player8Name");	
    
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
    document.getElementById("player5Name").addEventListener("input", function(el) {
        localStorage.setItem("player5Name", document.getElementById('player5Name').innerHTML);
    });
    document.getElementById("player6Name").addEventListener("input", function(el) {
        localStorage.setItem("player6Name", document.getElementById('player6Name').innerHTML);
    });
    document.getElementById("player7Name").addEventListener("input", function(el) {
        localStorage.setItem("player7Name", document.getElementById('player7Name').innerHTML);
    });
    document.getElementById("player8Name").addEventListener("input", function(el) {
        localStorage.setItem("player8Name", document.getElementById('player8Name').innerHTML);
    });

    // scores
    if (localStorage.getItem("player1Score_SHEEPLE") === null){
        localStorage.setItem("player1Score_SHEEPLE", 0);
    }
    if (localStorage.getItem("player2Score_SHEEPLE") === null){
        localStorage.setItem("player2Score_SHEEPLE", 0);
    }
    if (localStorage.getItem("player3Score_SHEEPLE") === null){
        localStorage.setItem("player3Score_SHEEPLE", 0);
    }
    if (localStorage.getItem("player4Score_SHEEPLE") === null){
        localStorage.setItem("player4Score_SHEEPLE", 0);
    }
    if (localStorage.getItem("player5Score_SHEEPLE") === null){
        localStorage.setItem("player5Score_SHEEPLE", 0);
    }
    if (localStorage.getItem("player6Score_SHEEPLE") === null){
        localStorage.setItem("player6Score_SHEEPLE", 0);
    }
    if (localStorage.getItem("player7Score_SHEEPLE") === null){
        localStorage.setItem("player7Score_SHEEPLE", 0);
    }
    if (localStorage.getItem("player8Score_SHEEPLE") === null){
        localStorage.setItem("player8Score_SHEEPLE", 0);
    }

    document.getElementById('player1Score').value = localStorage.getItem("player1Score_SHEEPLE");
    document.getElementById('player2Score').value = localStorage.getItem("player2Score_SHEEPLE");	
    document.getElementById('player3Score').value = localStorage.getItem("player3Score_SHEEPLE");	
    document.getElementById('player4Score').value = localStorage.getItem("player4Score_SHEEPLE");	
    document.getElementById('player5Score').value = localStorage.getItem("player5Score_SHEEPLE");
    document.getElementById('player6Score').value = localStorage.getItem("player6Score_SHEEPLE");	
    document.getElementById('player7Score').value = localStorage.getItem("player7Score_SHEEPLE");	
    document.getElementById('player8Score').value = localStorage.getItem("player8Score_SHEEPLE");	

    for (let player = 1; player < maxPlayers+1; player++) {
        
        document.getElementById("player"+ player+"Score").addEventListener("input", function(el) {
            updateScoreinStorage(player);   
        });        
    }
}

function updateScoreinStorage(playerNumber) {    
    localStorage.setItem("player"+ playerNumber+"Score_SHEEPLE", document.getElementById("player"+ playerNumber+"Score").value);
}

function scoreButtonsClick(element, up, player) {
    if (up == 'up') {
        element.parentNode.querySelector('[type=number]').stepUp();
        
    } else {
        element.parentNode.querySelector('[type=number]').stepDown();        
    }
    updateScoreinStorage(player);    
} 