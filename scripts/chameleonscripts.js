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