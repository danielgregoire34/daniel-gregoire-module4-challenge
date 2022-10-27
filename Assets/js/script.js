
function scoreNumberFunction() {
    var thefinalScore = 0;
    console.log("its working");
    document.getElementById("myText").innerHTML = thefinalScore;
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
function firstSection(){
    var firstx = document.getElementById("firsthidden");
    firstx.style.display ="block";
}
function firsthideSection(){
    var startx = document.getElementById("firsthidden");
    if (startx.style.display === "none") {
        startx.style.display = "block";
    } else {
        startx.style.display = "none";
    }
    secondSection();
}
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
}
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
}
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
}
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
    thefinalScore=4;
    finalScore();
}

function finalScore(){
    var firstx = document.getElementById("finalscore");
    firstx.style.display ="block";
    
}
