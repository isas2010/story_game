<!DOCTYPE html>
2
<html>
3
<head>
4
<title>Story Game</title>
5
<link rel="stylesheetdy>
6
 
7
<div id="gameArea">
8
 
9
<div id="character"></div>
10
 
11
<div id="popup" class="hidden"></div>
12
 
13
</div>
14
 
15
game.jsscript>
16
 
17
</body>
18
</html>


//move the character
const character = document.getElementById("character");
const popup = document.getElementById("popup");

let x = 20;
let y = 300;

const speed = 10;

document.addEventListener("keydown", (e) => {

    switch(e.key){

        case "ArrowUp":
            y -= speed;
            break;

        case "ArrowDown":
            y += speed;
            break;

        case "ArrowLeft":
            x -= speed;
            break;

        case "ArrowRight":
            x += speed;
            break;
    }

    character.style.left = x + "px";
    character.style.top = y + "px";

    checkStoryPoints();
});

// Tigger Story text
function checkStoryPoints(){

    if(x > 200 && x < 250){

        popup.classList.remove("hidden");
        popup.innerText =
        "This is where the story begins.";
    }

    if(x > 500 && x < 550){

        popup.classList.remove("hidden");
        popup.innerText =
        "A major challenge appeared.";
    }

    if(x > 800 && x < 850){

        popup.classList.remove("hidden");
        popup.innerText =
        "The hero learned something new.";
    }
    if(x > window.innerWidth - 80){

    window.location.href = "page2.html";

}
}
