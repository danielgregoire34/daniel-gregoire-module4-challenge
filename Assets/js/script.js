var count = 0;
button = document.getElementById("ans1");
button2 = document.getElementById("ans2");
textHolder = document.getElementById("myText");


var timeID = document.getElementById("timeID");
var timer = document.querySelector(".time");
var main = document.getElementById("main");
var secondsLeft = 60;

function setTime() {
var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent =  "Time: " + secondsLeft ;

    if(secondsLeft === 0) {
        var startx = document.getElementById("general");        
        if (startx.style.display === "none") {
            startx.style.display = "block";
        } else {
            startx.style.display = "none";
        }
        clearInterval(timerInterval);

        finalScore();
    
    }

}, 1000);
}


function hideSection() {
    var startx = document.getElementById("quizhidden");
    if (startx.style.display === "none") {
        startx.style.display = "block";
    } else {
        startx.style.display = "none";
    }
    firstSection();
}

//First Section
function firstSection(){
    var firstx = document.getElementById("firsthidden");
    firstx.style.display ="block";
    setTime();
}
function firsthideSection(){
    var startx = document.getElementById("firsthidden");
    if (startx.style.display === "none") {
        startx.style.display = "block";
    } else {
        startx.style.display = "none";
    }
    secondSection();
    count--;
    textHolder.textContent = count;
}
function firsthideSectionAdding(){
    var startx = document.getElementById("firsthidden");
    if (startx.style.display === "none") {
        startx.style.display = "block";
    } else {
        startx.style.display = "none";
    }
    secondSection();
    count++;
    textHolder.textContent = count;
}


//Second Section
function secondSection(){
    var firstx = document.getElementById("secondhidden");
    firstx.style.display ="block";
}
function secondhideSection(){
    var startx = document.getElementById("secondhidden");
    if (startx.style.display === "none") {
        startx.style.display = "block";
    } else {
        startx.style.display = "none";
    }
    thirdSection();
    count--;
    textHolder.textContent = count;
}
function secondhideSectionAdding(){
    var startx = document.getElementById("secondhidden");
    if (startx.style.display === "none") {
        startx.style.display = "block";
    } else {
        startx.style.display = "none";
    }
    thirdSection();
    count++;
    textHolder.textContent = count;
}


//Third Section
function thirdSection(){
    var firstx = document.getElementById("thirdhidden");
    firstx.style.display ="block";
}
function thirdhideSection(){
    var startx = document.getElementById("thirdhidden");
    if (startx.style.display === "none") {
        startx.style.display = "block";
    } else {
        startx.style.display = "none";
    }
    fourthSection();
    count--;
    textHolder.textContent = count;
}
function thirdhideSectionAdding(){
    var startx = document.getElementById("thirdhidden");
    if (startx.style.display === "none") {
        startx.style.display = "block";
    } else {
        startx.style.display = "none";
    }
    fourthSection();
    count++;
    textHolder.textContent = count;
}



//Fourth Section
function fourthSection(){
    var firstx = document.getElementById("fourthhidden");
    firstx.style.display ="block";
}
function fourthhideSection(){
    var startx = document.getElementById("fourthhidden");
    if (startx.style.display === "none") {
        startx.style.display = "block";
    } else {
        startx.style.display = "none";
    }
    fifthSection();
    count--;
    textHolder.textContent = count;
}
function fourthhideSectionAdding(){
    var startx = document.getElementById("fourthhidden");
    if (startx.style.display === "none") {
        startx.style.display = "block";
    } else {
        startx.style.display = "none";
    }
    fifthSection();
    count++;
    textHolder.textContent = count;
}


//Fifth Section
function fifthSection(){
    var firstx = document.getElementById("fifthhidden");
    firstx.style.display ="block";
}
function fifthhideSection(){
    var startx = document.getElementById("fifthhidden");
    if (startx.style.display === "none") {
        startx.style.display = "block";
    } else {
        startx.style.display = "none";
    }
    finalScore();
    count--;
    textHolder.textContent = count;
}
function fifthhideSectionAdding(){
    var startx = document.getElementById("fifthhidden");
    if (startx.style.display === "none") {
        startx.style.display = "block";
    } else {
        startx.style.display = "none";
    }
    count++;
    textHolder.textContent = count;
    finalScore();   
}

//Final Score Section
function finalScore(){
    var firstx = document.getElementById("finalscore");
    firstx.style.display ="block";
    textHolder = count;
    timer.textContent = " ";
    timeID.style.display = "none";
}

//High Score Section
var saveButton = document.getElementById("save");
var userName = document.getElementById("username");

var userhighscore = document.getElementById("userhighscore");




saveButton.addEventListener("click", function(event){
    event.preventDefault();
    userScoreDisplay();
    saveLastScore();

});

function saveLastScore() {
var studentScores = {
    textHolder: textHolder.value,
    userName: userName.value.trim()
};
localStorage.setItem("studentScores", JSON.stringify(studentScores));
}


function userScoreDisplay(){
    var studentScore = JSON.parse(localStorage.getItem("studentScores"));

    textHolder.textContent;

    if(studentScore !== null){
        document.getElementById("userhighscore").innerHTML = studentScore.userName
    }else{
        return;
    }
    
}

function init() {
    userScoreDisplay();
}
init();

