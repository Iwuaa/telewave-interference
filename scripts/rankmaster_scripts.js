function setPlayersData() {
    var value = document.getElementById('RM-Players').value;
    console.log(value);
    localStorage.setItem("RMPlayers", value);
    setTokens();
};

window.onload = function() {
    
    if (localStorage.getItem("RMPlayers") === null){
        localStorage.setItem("RMPlayers", "4");
    }
    document.getElementById('RM-Players').value = localStorage.getItem("RMPlayers");

    document.getElementById("RM-Players").addEventListener("change", function(el) {
        setPlayersData();
    });

    var stepButtons = document.getElementsByClassName("stepButton");
    for (var i = 0; i < stepButtons.length; i++) {
        stepButtons[i].addEventListener('click', function(el) {
            setPlayersData();
        });
    }

    setTokens();
}

function selectQuestion(qNumber){
    var q1 = document.getElementById("RM-Q1");
    var q2 = document.getElementById("RM-Q2");

    if (qNumber == 1) {
        q1.classList.add("selected");
        q1.classList.remove("unselected");

        q2.classList.add("unselected");
        q2.classList.remove("selected");

    } else {        
        q2.classList.add("selected");
        q2.classList.remove("unselected");

        q1.classList.add("unselected");
        q1.classList.remove("selected");
    }
}

function setTokens() {
    var players = localStorage.getItem("RMPlayers");
    console.log(players);

    var tokens = document.getElementsByClassName("token");

    if (players > tokens.length){
        const diff = players - tokens.length;
        console.log(diff);

        for (let index = 0; index < diff; index++) {
            var elem = document.createElement("img");
            elem.setAttribute("src", "img/bunny.png");
            elem.setAttribute("height", "200");
            elem.setAttribute("alt", "token");
            elem.classList.add("token", "bunny");
            document.getElementById("RM-tokens").appendChild(elem);
        }
    }

    else if (players<tokens.length){        
        const diff = tokens.length - players;
        console.log(diff);
        console.log(tokens);

        for (let index = 1; index <= diff; index++) {
            var lastToken = tokens[tokens.length-index];
            lastToken.remove();
        }
    }    
}

function explosion() {
    var img = document.getElementsByClassName("bunny")[0];
    img.setAttribute("src", "img/explosion.png");
    img.classList.add("exploded");
    img.classList.remove("bunny");
    img.setAttribute("onclick","reverseExplosion(this)");
}

//NOT WORKING for some reason - element is sent but attributes do not change
function reverseExplosion(elem) {
    console.log("reverse explosion triggered");
    if (elem == undefined)
        elem = document.getElementsByClassName("exploded")[0];
    
    console.log(elem);
    
    elem.setAttribute("src", "img/bunny.png");
    elem.classList.remove("exploded");
    elem.classList.add("bunny");
    elem.removeAttribute("onclick");
}


/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

//TODO
function newClue(){
    var clue = fishdata[randomSeed()];
    console.log(clue);

    document.getElementById("fishQuestion").innerHTML = clue.question;   
    document.getElementById("fishAnswer").innerHTML = clue.answer;
    clearFishyAnswer();

    var players = document.getElementsByClassName("playerCell");
    //   console.log(players[0]);
    //    console.log(players[3]);
    //    console.log(players[4]);
    
    var randPlayerNumber = randomPlayers(players.length);
  
    console.log(randPlayerNumber + players.length)
    
    // var chosenPlayer = players[randPlayerNumber].getElementsByTagName('p').value;
    console.log(randPlayerNumber + "   " + localStorage.getItem("player"+randPlayerNumber[0]+"Name"));
    // console.log(secondPlayer + "   " + localStorage.getItem("player"+secondPlayer+"Name"));
    // document.getElementById("fishPlayer").p.innerHTML = clue.answer;
  
    document.getElementById("fishPlayer1").innerHTML = localStorage.getItem("player"+randPlayerNumber[0]+"Name");
    document.getElementById("fishPlayer2").innerHTML = "or " + localStorage.getItem("player"+randPlayerNumber[1]+"Name");

}

function resetScore(){ //TODO
    if (window.confirm("Are you sure you want to reset scoreboard?")) {
        const tokenContainer = document.getElementById("RM-tokens");
        tokenContainer.innerHTML = '';
        setTokens();
    }
}