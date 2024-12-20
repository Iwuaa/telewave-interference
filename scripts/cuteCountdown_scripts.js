function setPlayersData() {
    var value = document.getElementById('RM-Players').value;
    console.log(value);
    localStorage.setItem("RMPlayers", value);
    setTokens();
};


var boom = new Audio('img/boom.mp3');
boom.volume = 0.7;

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
    newClue();
}

function selectQuestion(qNumber){
    var q1 = document.getElementById("RM-Q1");
    var q2 = document.getElementById("RM-Q2");

    if (qNumber == 1) {
        q1.classList.add("selected");
        q1.classList.remove("unselected");
        q1.setAttribute("onclick", "deselectQuestion()");

        q2.classList.add("unselected");
        q2.classList.remove("selected");

    } else {        
        q2.classList.add("selected");
        q2.classList.remove("unselected");
        q2.setAttribute("onclick", "deselectQuestion()");

        q1.classList.add("unselected");
        q1.classList.remove("selected");
    }
}

function deselectQuestion(){
    var q1 = document.getElementById("RM-Q1");
    var q2 = document.getElementById("RM-Q2");

    q1.classList.remove("selected");
    q1.classList.remove("unselected");
    q1.setAttribute("onclick", "selectQuestion(1)");

    q2.classList.remove("unselected");
    q2.classList.remove("selected");
    q2.setAttribute("onclick", "selectQuestion(2)");

}

function setTokens() {
    var players = localStorage.getItem("RMPlayers");
    console.log(players);

    var tokens = document.getElementsByClassName("token");

    if (players > tokens.length){
        const diff = players - tokens.length;
        console.log(diff);

        for (let index = 0; index < diff; index++) {
            var rand = Math.floor(Math.random() * (4)) + 1;
            var elem = document.createElement("img");
            elem.setAttribute("src", "img/cute"+rand+".png");
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
    var bunnies = document.getElementsByClassName("bunny");
    var img = bunnies[0];
    img.setAttribute("src", "img/explosion.png");
    img.classList.add("exploded");
    img.classList.remove("bunny");
    if (bunnies.length == 0) {
        boom.play();
    }
}

//FIXME NOT WORKING for some reason - element is sent but attributes do not change
function reverseExplosion() {
    all = document.getElementsByClassName("exploded");
    if (all.length !=0) {

        console.log("reverse explosion triggered");
        elem = all[all.length - 1];
        console.log(elem);    
        
        var rand = Math.floor(Math.random() * (4)) + 1;
        elem.setAttribute("src", "img/cute"+rand+".png");
        elem.classList.remove("exploded");
        elem.classList.add("bunny");
        
    }
   
}


/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////


function newClue(){
    var questions = randomSeed();
    var q1 = CC_data[questions[0]];
    var q2 = CC_data[questions[1]];
    console.log(q1, q2);

    var q1Containter = document.getElementById("RM-Q1");
    q1Containter.classList.remove("selected");
    q1Containter.classList.remove("unselected");
    document.getElementById("RM-Q1-question").innerHTML = q1.question;   
    document.getElementById("RM-Q1-from").innerHTML = q1.from;   
    document.getElementById("RM-Q1-to").innerHTML = q1.to; 

    var q2Containter = document.getElementById("RM-Q2");
    q2Containter.classList.remove("unselected");
    q2Containter.classList.remove("selected");  
    document.getElementById("RM-Q2-question").innerHTML = q2.question;   
    document.getElementById("RM-Q2-from").innerHTML = q2.from;   
    document.getElementById("RM-Q2-to").innerHTML = q2.to;   
}

function randomSeed(){
    var q1 = Math.floor(Math.random() * (CC_data.length));
    var q2 = q1;
    while(q1 == q2){
        q2 = Math.floor(Math.random() * (CC_data.length));
    }

    console.log("q1: " + q1 + "     q2: "+q2);
    return [q1, q2];
}

function resetScore(){ 
    if (window.confirm("Are you sure you want to reset scoreboard?")) {
        const tokenContainer = document.getElementById("RM-tokens");
        tokenContainer.innerHTML = '';
        setTokens();
    }
}