var maxPlayers = 8;
var questionIndex = 0;
var questions;
var correctAnswerBox;
var answers = ['A', 'B', 'C'];
var correctAnswerShown = true;

var shortAlarm = new Audio("sounds/gong_short.mp3");


var instructionSound1 = new Audio("sounds/fx_peekInstruction_sound1_SK.mp3");
var instructionSound2 = new Audio("sounds/fx_peekInstruction_sound2_SK.mp3");
var instructionSound3 = new Audio("sounds/fx_peekInstruction_sound3_SK.mp3");   
var instructionSound4 = new Audio("sounds/fx_peekInstruction_sound4_SK.mp3");

window.onload = function() {    
    setPlayers();
    setQuestion();
}

function nextQuestion() {
    if (correctAnswerShown || 
    (!correctAnswerShown) && (window.confirm("Are you sure you want a new question before looking up the correct answer?"))){ 
        
        setQuestion();
        incrementRoundCounter();
    }

}

async function setQuestion(){    
    //get new questions if needed
    if (questions == null || questionIndex >= questions.length){
        await getQuestions();
        questionIndex = 0;
    }

    hideCorrectAnswer();
    toggleTimer(false);

    newQ = questions[questionIndex];
    console.log(newQ.question.text + '\n' + newQ.correctAnswer + '\n\n' + newQ.incorrectAnswers[0] + '\n' + newQ.incorrectAnswers[1] + '\n' + newQ.incorrectAnswers[2]);

    //set question text
    document.getElementById("foxQuestion").innerHTML =newQ.question.text;
    
    //choose random answer box
    correctAnswerBox = answers[Math.floor(Math.random() * answers.length)];
    console.log(correctAnswerBox);
    var incorrectAnswerIndex = 0;

    //set answers text
    for (let index = 0; index < answers.length; index++) {
        if (answers[index] == correctAnswerBox){
            console.log("foxAnswer"+answers[index]+"text");
            document.getElementById("foxAnswer"+answers[index]+"text").innerHTML = newQ.correctAnswer;
        } else {
            console.log("foxAnswer"+answers[index]+"text");
            document.getElementById("foxAnswer"+answers[index]+"text").innerHTML = newQ.incorrectAnswers[incorrectAnswerIndex];
            incorrectAnswerIndex++;
        }    
    }
    correctAnswerShown = false;
    questionIndex++;
}



// API here https://the-trivia-api.com/docs/v2/#tag/Questions/operation/getRandomQuestions
async function getQuestions(category, difficulty, isNiche) {
    const response = await fetch('https://the-trivia-api.com/v2/questions?type=text_choice&difficulties=medium&limit=25', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
        }
    });    

    var data = await response.json();
    console.log(data);
    questions = data;
    console.log(questions.length);
}

function showAnswerButton(elem) {
    if (elem.innerHTML == "👀 Correct Answer") {
        toggleTimer(false);
        correctAnswerShown = true;
        showCorrectAnswer();
    } else {
        hideCorrectAnswer();
    }
}

function showCorrectAnswer() {
    elem = document.getElementById("show");    
    elem.innerHTML = "↩ All Answers";

    answerBox = document.getElementById("foxAnswersBox");
    answerBox.classList.add("correctAnswer");

    for (let index = 0; index < answers.length; index++) {
        if (answers[index] != correctAnswerBox){
            document.getElementById("foxAnswersBox"+answers[index]).style.display = "none";
        }
    }
}

function hideCorrectAnswer() {
    elem = document.getElementById("show");  
    elem.innerHTML = "👀 Correct Answer";
    
    answerBox = document.getElementById("foxAnswersBox");
    answerBox.classList.remove("correctAnswer");

    for (let index = 0; index < answers.length; index++) {
            document.getElementById("foxAnswersBox"+answers[index]).style.display = "block";
    }
}

async function instructionFlow() {
    
    await peek();
    toggleTimer(true);
    await timer(2,0);
}

async function peek() {
    instructionSound1.play();
    await sleep(3000);
    
    showCorrectAnswer();
    instructionSound2.play();   
    await sleep(8000);

    instructionSound3.play();   
    await sleep(1000);  
    hideCorrectAnswer();
    await sleep(5000);  

    instructionSound4.play();
    await sleep(2000);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function timer(tMin, tSec) {   
    return new Promise((resolve,reject) => { 
        if ($('#timer-countdown').length) {
            function countdown( elementName, minutes, seconds )
            {
                console.log('timer');
                var element, endTime, hours, mins, msLeft, time;
                function twoDigits( n )
                {
                    return (n <= 9 ? "0" + n : n);
                }
                function updateTimer()
                {
                    msLeft = endTime - (+new Date);
                    if ( msLeft < 1000 ) {
                        element.innerHTML = "Time is up! Vote now!";
                        //play sound
                        setTimeout(() => {
                            shortAlarm.play();
                            
                            console.log('waited');
                            return resolve();
                        }, 200); 
                        
                                            
                    } else {
                        time = new Date( msLeft );
                        hours = time.getUTCHours();
                        mins = time.getUTCMinutes();
                        element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
                        setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
                    }
                }
                element = document.getElementById( elementName );
                endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
                updateTimer();
            }
            countdown( "timer-countdown", tMin, tSec );
        }
    })
    
}

function toggleTimer(show) {
    var timer = document.getElementById("timer-container"); 
    if (show == true) {
        timer.style.display = "block";
    } else {
        timer.style.display = "none";
    }
}

function incrementRoundCounter() {  
    var roundCounter = document.getElementById("roundCounter"); 
    var currentRound = parseInt(roundCounter.innerHTML);
    (currentRound == 6) ?  currentRound = 1 : currentRound++;
    roundCounter.innerHTML = currentRound;
    
}

function resetScore(){
    var scores = document.getElementsByClassName("scoreInput");
    if (window.confirm("Are you sure you want to reset scoreboard?")) {
        for (let i = 0; i < scores.length; i++) {
            scores[i].value = 0;
            updateScoreinStorage(i+1);
        }
    }

    
}

function addPlayer(){
    var hiddenPlayers = document.querySelectorAll(".playerCell.hidden");
    console.log(hiddenPlayers);
    if (hiddenPlayers.length != 0 ){
        hiddenPlayers[0].classList.remove("hidden");
        playerSelector();
    }
}

function removePlayer(){
    var visPlayers = document.querySelectorAll(".playerCell:not(.hidden)");
    console.log(visPlayers);
    if (visPlayers.length != 0 ){
        visPlayers[visPlayers.length-1].classList.add("hidden");
        playerSelector();
    }
    
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
    if (localStorage.getItem("player1Score_FX") === null){
        localStorage.setItem("player1Score_FX", 0);
    }
    if (localStorage.getItem("player2Score_FX") === null){
        localStorage.setItem("player2Score_FX", 0);
    }
    if (localStorage.getItem("player3Score_FX") === null){
        localStorage.setItem("player3Score_FX", 0);
    }
    if (localStorage.getItem("player4Score_FX") === null){
        localStorage.setItem("player4Score_FX", 0);
    }
    if (localStorage.getItem("player5Score_FX") === null){
        localStorage.setItem("player5Score_FX", 0);
    }
    if (localStorage.getItem("player6Score_FX") === null){
        localStorage.setItem("player6Score_FX", 0);
    }
    if (localStorage.getItem("player7Score_FX") === null){
        localStorage.setItem("player7Score_FX", 0);
    }
    if (localStorage.getItem("player8Score_FX") === null){
        localStorage.setItem("player8Score_FX", 0);
    }

    document.getElementById('player1Score').value = localStorage.getItem("player1Score_FX");
    document.getElementById('player2Score').value = localStorage.getItem("player2Score_FX");	
    document.getElementById('player3Score').value = localStorage.getItem("player3Score_FX");	
    document.getElementById('player4Score').value = localStorage.getItem("player4Score_FX");	
    document.getElementById('player5Score').value = localStorage.getItem("player5Score_FX");
    document.getElementById('player6Score').value = localStorage.getItem("player6Score_FX");	
    document.getElementById('player7Score').value = localStorage.getItem("player7Score_FX");	
    document.getElementById('player8Score').value = localStorage.getItem("player8Score_FX");	

    for (let player = 1; player < maxPlayers+1; player++) {
        
        document.getElementById("player"+ player+"Score").addEventListener("input", function(el) {
            updateScoreinStorage(player);   
        });        
    }
}

function updateScoreinStorage(playerNumber) {    
    localStorage.setItem("player"+ playerNumber+"Score_FX", document.getElementById("player"+ playerNumber+"Score").value);
}

function scoreButtonsClick(element, up, player) {
    if (up == 'up') {
        element.parentNode.querySelector('[type=number]').stepUp();
        
    } else {
        element.parentNode.querySelector('[type=number]').stepDown();        
    }
    updateScoreinStorage(player);    
} 