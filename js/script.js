var countPlayer1 = 0;
var countPlayer2 = 0;
var currentPlayer = 1;
var player1NameElement, player2NameElement;

window.addEventListener("load", function() {
    setTimeout(function open(event) {
        openPopup();
    }, 1000);
});

// Function to open the pop-up
function openPopup() {
    var popup = document.getElementById("popupContainer");
    popup.style.display = "block";
    player1NameElement = document.getElementById("player1NameElement"); 
    player2NameElement = document.getElementById("player2NameElement");
}

// Function to handle player name input and start the game
function nextPlayer() {
    var player1Name = document.getElementById("player1Name").value;
    if (player1Name === "") {
        alert("Please enter Player 1's name.");
    } else {
        player1NameElement.textContent = player1Name;
        var player2Input = document.getElementById("player2Input");
        player2Input.style.display = "block";
    }
}

function startGame() {
    var player2Name = document.getElementById("player2Name").value;
    if (player2Name === "") {
        alert("Please enter Player 2's name.");
    } else {
        player2NameElement.textContent = player2Name;
        closePopup();
    }
}

function showGameEnd(winnerName, score1, score2) {
    var gameEnd = document.getElementById("gameEnd");
    var info = document.getElementById("userinfo");
    var winnerNameElement = document.getElementById("winnerName");
    var scoresElement = document.getElementById("scores");
    winnerNameElement.textContent = "Winner: " + winnerName;
    scoresElement.textContent = "Scores - " + player1NameElement.textContent + ": " + score1 + ", " + player2NameElement.textContent + ": " + score2;
    gameEnd.style.display = "block";
    info.style.display = "none";
    openPopup();
}

// Function to close the popup and reset the game end section
function closePopup() {
    var popup = document.getElementById("popupContainer");
    var gameEnd = document.getElementById("gameEnd");
    var winnerNameElement = document.getElementById("winnerName");
    var scoresElement = document.getElementById("scores");
    winnerNameElement.textContent = "";
    scoresElement.textContent = "";
    popup.style.display = "none";
}

function goalkeeper() {
    var b = document.getElementById("b2");
    var g = (Math.floor(Math.random() * 7)+1);
    var g1 = g;
    if (g === 1) {
    b.style.animation = "gl0 1s";
    } else if (g === 2) {
    b.style.animation = "gl1 1s";
    } else if (g === 3) {
    b.style.animation = "gl2 1s";
    } else if (g === 4) {
    b.style.animation = "gc1 1s";
    } else if (g === 5) {
    b.style.animation = "gr0 1s";
    } else if (g === 6) {
    b.style.animation = "gr1 1s";
    } else if (g === 7) {
    b.style.animation = "gr2 1s";
    }
    return g1;
}

function goal() {
    var o = (Math.floor(Math.random() * 5)+1);
    if (o === 1) {
    document.getElementById("b1").style.animation = "Outside1 1s";
    } else if (o === 2) {
    document.getElementById("b1").style.animation = "Outside2 1s";
    } else if (o === 3) {
    document.getElementById("b1").style.animation = "Outside3 1s";
    } else if (o === 4) {
    document.getElementById("b1").style.animation = "Outside4 1s";
    } else if (o === 5) {
    document.getElementById("b1").style.animation = "Outside5 1s";
    }
    return o;
}

function switchTurn() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
}

function updateScores(goalScored) {
    if (currentPlayer === 1) {
        if (goalScored) {
            countPlayer1++;
            document.getElementById("GoalDone1").textContent = "Goal!!!";
            document.getElementById("GoalDone2").textContent = "Goal!!!";
        } else {
            document.getElementById("GoalDone1").textContent = "Saved!!!";
            document.getElementById("GoalDone2").textContent = "Saved!!!";
        }
        document.getElementById("Player1Score").textContent = countPlayer1;
        if (countPlayer1 === 10) {
            showGameEnd(player1NameElement.textContent, countPlayer1, countPlayer2);
        }
    } else {
        if (goalScored) {
            countPlayer2++;
            document.getElementById("GoalDone1").textContent = "Goal!!!";
            document.getElementById("GoalDone2").textContent = "Goal!!!";
        } else {
            document.getElementById("GoalDone1").textContent = "Saved!!!";
            document.getElementById("GoalDone2").textContent = "Saved!!!";
        }
        document.getElementById("Player2Score").textContent = countPlayer2;
        if (countPlayer2 === 10) {
            showGameEnd(player2NameElement.textContent, countPlayer1, countPlayer2);
        }
    }
}

function leftTop() {
    document.getElementById("b1").style.animation = "left0 1s";
    var g1 = goalkeeper();
    var goalScored = g1 !== 1;
    updateScores(goalScored);
    switchTurn();
}

function rightTop() {
    document.getElementById("b1").style.animation = "right0 1s";
    var g1 = goalkeeper();
    var goalScored = g1 !== 5;
    updateScores(goalScored);
    switchTurn();
}

function centerTop() {
    document.getElementById("b1").style.animation = "center0 1s";
    var g1 = goalkeeper();
    var goalScored = g1 !== 4;
    updateScores(goalScored);
    switchTurn();
}

function leftMiddle() {
    document.getElementById("b1").style.animation = "left2 1s";
    var g1 = goalkeeper();
    var goalScored = g1 !== 2;
    updateScores(goalScored);
    switchTurn();
}

function rightMiddle() {
    document.getElementById("b1").style.animation = "right2 1s";
    var g1 = goalkeeper();
    var goalScored = g1 !== 6;
    updateScores(goalScored);
    switchTurn();
}

function centerMiddle() {
    document.getElementById("b1").style.animation = "center2 1s";
    var g1 = goalkeeper();
    var goalScored = g1 !== 4;
    updateScores(goalScored);
    switchTurn();
}

function leftBottom() {
    document.getElementById("b1").style.animation = "left1 1s";
    var g1 = goalkeeper();
    var goalScored = g1 !== 3;
    updateScores(goalScored);
    switchTurn();
}

function rightBottom() {
    document.getElementById("b1").style.animation = "right1 1s";
    var g1 = goalkeeper();
    var goalScored = g1 !== 7;
    updateScores(goalScored);
    switchTurn();
}

function centerBottom() {
    document.getElementById("b1").style.animation = "center1 1s";
    var g1 = goalkeeper();
    var goalScored = g1 !== 4;
    updateScores(goalScored);
    switchTurn();
}