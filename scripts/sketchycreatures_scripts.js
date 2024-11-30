
var alarm = new Audio("img/notification_gong.wav");
alarm.volume = 0.7;
var shortAlarm = new Audio("img/gong_short.mp3");
shortAlarm.volume = 0.7;
const baseTextPrompt = "create short prompt for image generation for a mutant monster - it should have a number of bizarre features of monsters, beasts, animals, plants or items, but in weird combinations, it can wear something or nothing, whimsical or grotesque, eerie, obscure, fun, describe its features not color, be precise and concise in the description, mo more that for main features";
    

window.onload = function() {
    var monster = document.getElementById("monster");
    monster.onload = function () {
        console.log('img loaded');	
        monsterReady();
    };
    newMonster();
}

function monsterLoading() {
    var spinner = document.getElementById("spinner");
    spinner.style.display = "inline";
    var peekBtn = document.getElementById("peek");
    peekBtn.classList.add("disabled-btn");
    var showBtn = document.getElementById("show");
    showBtn.classList.add("disabled-btn");
}

function monsterReady() {
    var spinner = document.getElementById("spinner");
    spinner.style.display = "none";
    var peekBtn = document.getElementById("peek");
    peekBtn.classList.remove("disabled-btn");
    var showBtn = document.getElementById("show");
    showBtn.classList.remove("disabled-btn");
}

function setPlayersData() {
    var value = document.getElementById('RM-Players').value;
    console.log(value);
    localStorage.setItem("RMPlayers", value);
    setTokens();
    
};

async function peek() {
    var x = document.getElementById("monster-cont");
    x.style.display = "flex"; 
    var monster = document.getElementById("monster");
    monster.style.display = "inline";
    var timer_cont = document.getElementById("timer-container");
    timer_cont.style.display = "block";
    x.scrollIntoView();
    await timer(0,20, true);
    hideMonster();
    window.scrollTo(0,0);
}

async function describeTimer() {
    
    var x = document.getElementById("monster-cont");
    x.style.display = "flex"; 
    var timer_cont = document.getElementById("timer-container");
    timer_cont.style.display = "block";
    var monster = document.getElementById("monster");
    monster.style.display = "none";

    
    await timer(2,0, false);
    
}

function timer(tMin, tSec, shortSound) {   
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
                        element.innerHTML = "Time is up!";
                        setTimeout(() => {
                            if (shortSound) {
                                shortAlarm.play();
                            }
                            else {                                
                                alarm.play();
                            }
                            console.log('waited');
                            return resolve();
                        }, 1000); 
                        
                                            
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


function showMonster() {    
    var x = document.getElementById("monster-cont");
    x.style.display = "flex";   
    var monster = document.getElementById("monster");
    monster.style.display = "inline";
    x.scrollIntoView();
    var timer = document.getElementById("timer-container");
    timer.style.display = "none";

}

function hideMonster() {
    var x = document.getElementById("monster-cont");
    x.style.display = "none";    
}

async function newMonster(model='?model=flux', nologo='&nologo=true', enhance='&enhance=true') {

    monsterLoading();
    hideMonster();
    var baseurl = "https://pollinations.ai/p/";    
    var monsterFeatures = await postImgPrompt();
    // var imgStyle = "\nA 2D hand-drawn style with bold, clean outlines and vibrant, flat colors. The design is cartoonish and exaggerated, featuring quirky shapes and imaginative details. The texture mimics marker or ink drawings, with a slightly chaotic and whimsical vibe that combines humor and mild eeriness.\nWhite background";

    var imgStyle = "\n2D hand-drawn cartoon style with bold lines, flat vibrant colors, and quirky, exaggerated features. The designs mix humor and mild grotesqueness, with asymmetry and surreal details creating playful yet slightly eerie creatures.\nDark forest background"

    const prompt = baseurl + monsterFeatures + imgStyle + model + nologo + enhance;

    var url = encodeURI(prompt);
    console.log("IMAGE PROMPT \n" + prompt);
    var img = document.getElementById("monster");
    img.setAttribute("src", url);
}


function randomSeed(){
    return  Math.random() * 10000;
}

async function postImgPrompt() {
    const basePrompt = baseTextPrompt;
    //"create short prompt for image generation for a monster - it should have bizarre random features, mainly classic monster features but in weird combinations, funny, eerie, describe its features not color";
    const randomStr = Math.random().toString(36).slice(2, 7);
    const prompt = basePrompt + "\n" + randomStr;
    const seed = randomSeed();

    console.log('PROMPT:\n'+ prompt);
    
    const response = await fetch('https://text.pollinations.ai/', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: prompt}
        ],
        seed: seed,
        jsonMode: false,
        model: 'open-ai'
        }),
    });

    var data = await response.text();
    // console.log(data);
    var result = data.replace('"', '').replace("'", "");
    console.log(result);
    return result;
}

async function getImgPrompt() {
    const site = "https://text.pollinations.ai/";
    const prompt = "create short prompt for image generation for a monster - it should have bizarre random features, mainly classic monster features but in weird combinations, funny, eerie, describe its features not color";
    const randomStr = Math.random().toString(36).slice(2, 7);
    const url = encodeURI(site + prompt + "\n" + randomStr);

    console.log(url);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      var data = await response.text();
      var answer = data.replace('"', '');
      var answer = answer.replace("'", '');
      console.log(answer);
      return answer;

    } catch (error) {
      console.error(error.message);
    }
}
  


////////////////////////////////////////////////////


// function selectQuestion(qNumber){
//     var q1 = document.getElementById("RM-Q1");
//     var q2 = document.getElementById("RM-Q2");

//     if (qNumber == 1) {
//         q1.classList.add("selected");
//         q1.classList.remove("unselected");
//         q1.setAttribute("onclick", "deselectQuestion()");

//         q2.classList.add("unselected");
//         q2.classList.remove("selected");

//     } else {        
//         q2.classList.add("selected");
//         q2.classList.remove("unselected");
//         q2.setAttribute("onclick", "deselectQuestion()");

//         q1.classList.add("unselected");
//         q1.classList.remove("selected");
//     }
// }

// function deselectQuestion(){
//     var q1 = document.getElementById("RM-Q1");
//     var q2 = document.getElementById("RM-Q2");

//     q1.classList.remove("selected");
//     q1.classList.remove("unselected");
//     q1.setAttribute("onclick", "selectQuestion(1)");

//     q2.classList.remove("unselected");
//     q2.classList.remove("selected");
//     q2.setAttribute("onclick", "selectQuestion(2)");

// }

// function setTokens() {
//     var players = localStorage.getItem("RMPlayers");
//     console.log(players);

//     var tokens = document.getElementsByClassName("token");

//     if (players > tokens.length){
//         const diff = players - tokens.length;
//         console.log(diff);

//         for (let index = 0; index < diff; index++) {
//             var rand = Math.floor(Math.random() * (4)) + 1;
//             var elem = document.createElement("img");
//             elem.setAttribute("src", "img/cute"+rand+".png");
//             elem.setAttribute("height", "200");
//             elem.setAttribute("alt", "token");
//             elem.classList.add("token", "bunny");
//             document.getElementById("RM-tokens").appendChild(elem);
//         }
//     }

//     else if (players<tokens.length){        
//         const diff = tokens.length - players;
//         console.log(diff);
//         console.log(tokens);

//         for (let index = 1; index <= diff; index++) {
//             var lastToken = tokens[tokens.length-index];
//             lastToken.remove();
//         }
//     }    
// }

// function explosion() {
//     var bunnies = document.getElementsByClassName("bunny");
//     var img = bunnies[0];
//     img.setAttribute("src", "img/explosion.png");
//     img.classList.add("exploded");
//     img.classList.remove("bunny");
//     if (bunnies.length == 0) {
//         boom.play();
//     }
// }

// //FIXME NOT WORKING for some reason - element is sent but attributes do not change
// function reverseExplosion() {
//     all = document.getElementsByClassName("exploded");
//     if (all.length !=0) {

//         console.log("reverse explosion triggered");
//         elem = all[all.length - 1];
//         console.log(elem);    
        
//         var rand = Math.floor(Math.random() * (4)) + 1;
//         elem.setAttribute("src", "img/cute"+rand+".png");
//         elem.classList.remove("exploded");
//         elem.classList.add("bunny");
        
//     }
   
// }


// /////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////


// function newClue(){
//     var questions = randomSeed();
//     var q1 = CC_data[questions[0]];
//     var q2 = CC_data[questions[1]];
//     console.log(q1, q2);

//     var q1Containter = document.getElementById("RM-Q1");
//     q1Containter.classList.remove("selected");
//     q1Containter.classList.remove("unselected");
//     document.getElementById("RM-Q1-question").innerHTML = q1.question;   
//     document.getElementById("RM-Q1-from").innerHTML = q1.from;   
//     document.getElementById("RM-Q1-to").innerHTML = q1.to; 

//     var q2Containter = document.getElementById("RM-Q2");
//     q2Containter.classList.remove("unselected");
//     q2Containter.classList.remove("selected");  
//     document.getElementById("RM-Q2-question").innerHTML = q2.question;   
//     document.getElementById("RM-Q2-from").innerHTML = q2.from;   
//     document.getElementById("RM-Q2-to").innerHTML = q2.to;   
// }

// function randomSeed(){
//     var q1 = Math.floor(Math.random() * (CC_data.length));
//     var q2 = q1;
//     while(q1 == q2){
//         q2 = Math.floor(Math.random() * (CC_data.length));
//     }

//     console.log("q1: " + q1 + "     q2: "+q2);
//     return [q1, q2];
// }

// function resetScore(){ 
//     if (window.confirm("Are you sure you want to reset scoreboard?")) {
//         const tokenContainer = document.getElementById("RM-tokens");
//         tokenContainer.innerHTML = '';
//         setTokens();
//     }
// }