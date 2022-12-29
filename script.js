const ROCKCOLOR = `#d66b6b`;
const PAPERCOLOR = `#63c97d`;
const SCISSORSCOLOR = `#66a8c7`;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const buttons = document.querySelectorAll('button');

// On click, make bkg colour darker
rock.addEventListener('click', () => {
    playRound('rock');
    rock.style.backgroundColor = '#a84949';
    paper.style.backgroundColor = '#63c97d';
    scissors.style.backgroundColor = '#66a8c7';
});

paper.addEventListener('click', () => {
    playRound('paper');
    rock.style.backgroundColor = '#d66b6b';
    paper.style.backgroundColor = '#3d9453';
    scissors.style.backgroundColor = '#66a8c7';
});

scissors.addEventListener('click', () => {
    playRound('scissors');
    rock.style.backgroundColor = '#d66b6b';
    paper.style.backgroundColor = '#63c97d';
    scissors.style.backgroundColor = '#366b83';
});


const scorebar = document.querySelector('.scorebar');
const score = document.createElement('div');
scorebar.appendChild(score);

const message = document.querySelector('.message');

const yourChoice = document.querySelector('.yourChoice');
const img1 = document.createElement('img');
img1.classList.add('icon');
yourChoice.appendChild(img1);

const compChoice = document.querySelector('.compChoice');
const img2 = document.createElement('img');
img2.classList.add('icon');
compChoice.appendChild(img2);


// return the computer's choice of rock/paper/scissors
function getComputerChoice() {
    return ['rock', 'paper', 'scissors'][parseInt(Math.random() * 3)];
}

let playerScore = 0;
let computerScore = 0;
let tie = 0;

function playRound(playerSelection) {

    let computerSelection = getComputerChoice();

    renderYourImage(playerSelection);
    renderCompImage(computerSelection);


    if (playerSelection === computerSelection) {
        tie = ++tie;
        score.textContent = `W-L-T: ${playerScore}-${computerScore}-${tie}`;
        message.textContent = 'You tied the round!';
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore = ++playerScore;
        score.textContent = `W-L-T: ${playerScore}-${computerScore}-${tie}`;
        message.textContent = 'You won the round!';
    }
    else {
        computerScore = ++computerScore;
        score.textContent = `W-L-T: ${playerScore}-${computerScore}-${tie}`;
        message.textContent = 'You lost the round!';
    }
    
    winner(playerScore, computerScore, tie);
}

function renderYourImage(playerSelection) {
    if (playerSelection === 'rock') {
        img1.src = 'Images/Rock.png';
        img1.style.backgroundColor = ROCKCOLOR;
    }
    else if (playerSelection === 'paper') {
        img1.src = 'Images/Paper.png';
        img1.style.backgroundColor = PAPERCOLOR;
    }
    else {
        img1.src = 'Images/Scissors.png';
        img1.style.backgroundColor = SCISSORSCOLOR;
    }
    
    
}

function renderCompImage(compSelection) {
    if (compSelection === 'rock') {
        img2.src = './Images/Rock.png';
        img2.style.backgroundColor = ROCKCOLOR;
    }
    else if (compSelection === 'paper') {
        img2.src = './Images/Paper.png';
        img2.style.backgroundColor = PAPERCOLOR;
    }
    else {
        img2.src = './Images/Scissors.png';
        img2.style.backgroundColor = SCISSORSCOLOR;
    }
}


function winner(playerScore, computerScore, tie) {
    if (playerScore === 5) {
        message.textContent = 'You won the game of 5! Press "play again" to restart!'
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
    else if (computerScore === 5) {
        message.textContent = 'You lost the game of 5! Press "play again" to restart!';
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
}

// restart button
const restart = document.querySelector('.restart')
restart.addEventListener('click', () => {
    window.location.reload();
})