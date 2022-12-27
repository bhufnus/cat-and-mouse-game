// Your code here

let gameOver = false;

const PlayerDimensions = {
    height: document.getElementById('player').clientHeight,
    width: document.getElementById('player').clientWidth
}


const GameDimensions = {
    height: document.getElementById('game').clientHeight,
    width: document.getElementById('game').clientWidth
}

function movePlayerLeft(){
    const leftNumbers = player.style.left.replace("px","");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        player.style.left = `${left - 5}px`

    }
}

function movePlayerRight(){
    const rightNumbers = player.style.left.replace("px","");
        const right = parseInt(rightNumbers, 10);

    if (right < GameDimensions.width - PlayerDimensions.width) {
            player.style.left = `${right + 5}px`
    }
}

function movePlayerDown(){
    const bottomNumbers = player.style.bottom.replace("px","");
    const bottom = parseInt(bottomNumbers, 10);

    if (bottom > 0) {
        player.style.bottom = `${bottom - 5}px`
    }
}

function movePlayerUp() {
    const topNumbers = player.style.bottom.replace("px","");
    const top = parseInt(topNumbers,10);

    if (top < GameDimensions.height - PlayerDimensions.height) {
        player.style.bottom = `${top + 5}px`
    }
}

function moveMouseUp(){
    const mouseTop = parseInt(mouse.style.bottom.replace("px",""))
    if (mouseTop < GameDimensions.height) {
        mouse.style.bottom = `${mouseTop + 10}px`
    }
}

function moveMouseDown(){
    const mouseBottom = parseInt(mouse.style.bottom.replace("px",""))
    if (mouseBottom > 0) {
        mouse.style.bottom = `${mouseBottom - 10}px`
    }
}

function moveMouseLeft(){
    const mouseLeft = parseInt(mouse.style.left.replace("px",""));

    if (mouseLeft > 0) {
        mouse.style.left = `${mouseLeft - 10}px`

    }
}

function moveMouseRight(){
    const mouseRight = parseInt(mouse.style.left.replace("px",""));

    if (mouseRight < GameDimensions.width) {
        mouse.style.left = `${mouseRight + 10}px`

    }
}

function moveMouse(playerPosition, mousePosition) {
    console.log("MOVE");
}

function mouseIdleMovement(){
    let randomNumber = Math.floor(Math.random() * 4);

    switch(randomNumber){
        case 0:
            moveMouseDown();
            break;
        case 1:
            moveMouseUp();
            break;
        case 2:
            moveMouseLeft();
            break;
        case 3:
            moveMouseRight();
            break;
    }
}

function endGame(){
    console.log("END GAME");
    gameOver = true;
    ending.style.visibility = "visible"
    mouse.style.backgroundImage = "url()";
    mouse.style.backgroundColor = "#F83106"
    
}


document.addEventListener("keydown", function (event) {
    if (!gameOver){
    
    if (event.key === "ArrowLeft") {
        mouseIdleMovement();
        movePlayerLeft();
    }

    if (event.key === "ArrowRight") {
        mouseIdleMovement();
        movePlayerRight();
    }
    if (event.key === "ArrowUp"){
        mouseIdleMovement();
        movePlayerUp();
    }
    if (event.key === "ArrowDown"){
        mouseIdleMovement();
        movePlayerDown();
    }

   
    let playerPosition = {
        vertical: parseInt(player.style.bottom.replace("px","")),
        horizontal: parseInt(player.style.left.replace("px",""))
    }

    let mousePosition = {
        vertical: parseInt(mouse.style.bottom.replace("px","")),
        horizontal: parseInt(mouse.style.left.replace("px",""))
    }

    if (playerPosition.vertical === mousePosition.vertical && playerPosition.horizontal === mousePosition.horizontal){
        console.log("SAME POSITION")
        endGame();
    }

    
    // move mouse if player is 60px away
    // if (playerPosition.vertical - mousePosition.vertical < 60){
    //     moveMouseDown();
    // }

    // if (playerPosition.horizontal - mousePosition.horizontal < 60) {
    //     moveMouseLeft();
    // }

    if (playerPosition.vertical - mousePosition.vertical < 60 && playerPosition.horizontal - mousePosition.horizontal < 60) {
        moveMouse(playerPosition, mousePosition);
    }

  
    console.log("Player Pos", playerPosition);
    console.log("Mouse Pos", mousePosition);
    }
})
