function peekFishyAnswer(){
    if (window.confirm("Are you sure you want to peek?")) {
        document.getElementById("fishPeek").style.visibility = "visible";            
    }
}

function newFishClue(){
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
    console.log(randPlayerNumber + "   " + sessionStorage.getItem("player"+randPlayerNumber[0]+"Name"));
    // console.log(secondPlayer + "   " + sessionStorage.getItem("player"+secondPlayer+"Name"));
    // document.getElementById("fishPlayer").p.innerHTML = clue.answer;
  
    document.getElementById("fishPlayer1").innerHTML = sessionStorage.getItem("player"+randPlayerNumber[0]+"Name");
    document.getElementById("fishPlayer2").innerHTML = "or " + sessionStorage.getItem("player"+randPlayerNumber[1]+"Name");

}

function randomSeed(){
    return Math.floor(Math.random() * (fishdata.length));
}

function randomPlayers(range){    
    var first = Math.floor(Math.random() * (range) + 1);
    var second = first
    while (second == first) {
        second = Math.floor(Math.random() * (range) + 1);
    }
    return [first, second];
}

function clearFishyAnswer(){
    document.getElementById("fishPeek").style.visibility = "hidden";
}