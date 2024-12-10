var maxPlayers = 8;
window.onload = function() {
    
    setPlayers();

    newTopic();
}

function newCoordinates(){
    var coordinates = rollDice();
    // console.log(coordinates);
    document.getElementById("d6CoordImg").src="icons/dice/d6-"+coordinates.d6+".png";
    document.getElementById("d8CoordImg").src="icons/dice/d8-"+coordinates.d8+".png";
}

function rollDice(){
    var d6 = Math.floor(Math.random() * (6) + 1);
    var d8 = Math.floor(Math.random() * (8) + 1);
    return {"d6":d6, "d8":d8};
}

function newTopic(){
    newCoordinates();  
    var clue = chameleonData[randomSeed()];
    // console.log(clue);
    document.getElementById("chamTopic").innerHTML = clue.category;

    

    for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <= 4; j++) {
            var index = 4*i + j - 5;
            // console.log(index + "   " + clue.items[index]);
            
            document.getElementById("chamTable").rows[i].cells[j].innerHTML = clue.items[index];
        }
    }
}

function randomSeed(){
    return Math.floor(Math.random() * (chameleonData.length));
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
    if (localStorage.getItem("player1Score_CH") === null){
        localStorage.setItem("player1Score_CH", 0);
    }
    if (localStorage.getItem("player2Score_CH") === null){
        localStorage.setItem("player2Score_CH", 0);
    }
    if (localStorage.getItem("player3Score_CH") === null){
        localStorage.setItem("player3Score_CH", 0);
    }
    if (localStorage.getItem("player4Score_CH") === null){
        localStorage.setItem("player4Score_CH", 0);
    }
    if (localStorage.getItem("player5Score_CH") === null){
        localStorage.setItem("player5Score_CH", 0);
    }
    if (localStorage.getItem("player6Score_CH") === null){
        localStorage.setItem("player6Score_CH", 0);
    }
    if (localStorage.getItem("player7Score_CH") === null){
        localStorage.setItem("player7Score_CH", 0);
    }
    if (localStorage.getItem("player8Score_CH") === null){
        localStorage.setItem("player8Score_CH", 0);
    }

    document.getElementById('player1Score').value = localStorage.getItem("player1Score_CH");
    document.getElementById('player2Score').value = localStorage.getItem("player2Score_CH");	
    document.getElementById('player3Score').value = localStorage.getItem("player3Score_CH");	
    document.getElementById('player4Score').value = localStorage.getItem("player4Score_CH");	
    document.getElementById('player5Score').value = localStorage.getItem("player5Score_CH");
    document.getElementById('player6Score').value = localStorage.getItem("player6Score_CH");	
    document.getElementById('player7Score').value = localStorage.getItem("player7Score_CH");	
    document.getElementById('player8Score').value = localStorage.getItem("player8Score_CH");	

    for (let player = 1; player < maxPlayers+1; player++) {
        
        document.getElementById("player"+ player+"Score").addEventListener("input", function(el) {
            updateScoreinStorage(player);   
        });        
    }
}

function updateScoreinStorage(playerNumber) {    
    localStorage.setItem("player"+ playerNumber+"Score_CH", document.getElementById("player"+ playerNumber+"Score").value);
}

function scoreButtonsClick(element, up, player) {
    if (up == 'up') {
        element.parentNode.querySelector('[type=number]').stepUp();
        
    } else {
        element.parentNode.querySelector('[type=number]').stepDown();        
    }
    updateScoreinStorage(player);    
} 