var count = 0;
button = document.getElementById("ans1");
button2 = document.getElementById("ans2");
textHolder = document.getElementById("myText");

textHolder.innerHTML = count;



// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 3;

function setTime() {
  // Sets interval in variable
var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent =  "Time: " + secondsLeft ;

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
    textHolder.innerHTML = count--;
}
function firsthideSectionAdding(){
    var startx = document.getElementById("firsthidden");
    if (startx.style.display === "none") {
        startx.style.display = "block";
    } else {
        startx.style.display = "none";
    }
    secondSection();
    textHolder.innerHTML = count++;
    console.log("working" + count);
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
    textHolder.innerHTML = count--;
}
function secondhideSectionAdding(){
    var startx = document.getElementById("secondhidden");
    if (startx.style.display === "none") {
        startx.style.display = "block";
    } else {
        startx.style.display = "none";
    }
    thirdSection();
    textHolder.innerHTML = count++;
    console.log("working" + count);
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
    textHolder.innerHTML = count--;
}
function thirdhideSectionAdding(){
    var startx = document.getElementById("thirdhidden");
    if (startx.style.display === "none") {
        startx.style.display = "block";
    } else {
        startx.style.display = "none";
    }
    fourthSection();
    textHolder.innerHTML = count++;
    console.log("working" + count);
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
    textHolder.innerHTML = count--;
}
function fourthhideSectionAdding(){
    var startx = document.getElementById("fourthhidden");
    if (startx.style.display === "none") {
        startx.style.display = "block";
    } else {
        startx.style.display = "none";
    }
    fifthSection();
    textHolder.innerHTML = count++;
    console.log("working" + count);
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
    textHolder.innerHTML = count--;
}
function fifthhideSectionAdding(){
    var startx = document.getElementById("fifthhidden");
    if (startx.style.display === "none") {
        startx.style.display = "block";
    } else {
        startx.style.display = "none";
    }
    textHolder.innerHTML = count++;
    console.log("working" + count);
    finalScore();   
}





function finalScore(){
    var firstx = document.getElementById("finalscore");
    firstx.style.display ="block";
    textHolder = count;
    timeEl.textContent = " ";
}
