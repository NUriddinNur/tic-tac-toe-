const cell = document.querySelectorAll('.cell')
const restart = document.querySelector('.game--restart')

let hPlayer = 'X'
let aiPlayer = 'O' 


let game = []
gamelength = 9
game.fill(undefined)


startGame(cell)

restart.addEventListener('click', restartG)

function restartG() {
    gamelength = 9
    game.fill(undefined)
    for (let i = 0; i < cell.length; i++) {
        cell[i].textContent = ""
        cell[i].style.color = "#04c0b2"
    }
    document.querySelector('.endgame').style.display = 'none'
}

function startGame(cell) {
    for (let i = 0; i < cell.length; i++) {
        cell[i].addEventListener('click', (e) => {
            if (game[i]) {
                return
            }
            e.target.textContent = hPlayer;
            game[e.target.getAttribute('index')] = hPlayer
            if(checkWin(hPlayer)) {
                declarereWinner("You win!")
                return
            }
            aiWalk()
            if(checkWin(aiPlayer)) {
                declarereWinner("Ai win!")
                return
            }
        })
    }
}

function aiWalk(n = random()) {
    if(!game[n]) {
        game[n] = aiPlayer
        round = 1
        cell[n].textContent = aiPlayer
        return
    }
    else {
        aiWalk()
    }
    
}

function checkWin(player) {
    if (game[0] === player && game[1] === player && game[2] == player){
        cell[0].style.color = 'red'
        cell[1].style.color = 'red'
        cell[2].style.color = 'red'
        return true
    }
    else if (game[3] === player && game[4] === player && game[5] == player){
        cell[3].style.color = 'red'
        cell[4].style.color = 'red'
        cell[5].style.color = 'red'
        return true
    }
    else if (game[6] === player && game[7] === player && game[8] == player){
        cell[6].style.color = 'red'
        cell[7].style.color = 'red'
        cell[8].style.color = 'red'
        return true
    }
    else if (game[0] === player && game[3] === player && game[6] == player){
        cell[0].style.color = 'red'
        cell[3].style.color = 'red'
        cell[6].style.color = 'red'
        return true
    }
    else if (game[1] === player && game[4] === player && game[7] == player){
        cell[1].style.color = 'red'
        cell[4].style.color = 'red'
        cell[7].style.color = 'red'
        return true
    }
    else if (game[2] === player && game[5] === player && game[8] == player){
        cell[2].style.color = 'red'
        cell[5].style.color = 'red'
        cell[8].style.color = 'red'
        return true
    }
    else if (game[0] === player && game[4] === player && game[8] == player){
        cell[0].style.color = 'red'
        cell[4].style.color = 'red'
        cell[8].style.color = 'red'
        return true
    }
    else if (game[2] === player && game[4] === player && game[6] == player){
        cell[2].style.color = 'red'
        cell[4].style.color = 'red'
        cell[6].style.color = 'red'
        return true
    }else {
        return false
    }
}


function random() {
    return Math.floor(Math.random() * 9);
}

function declarereWinner(who) {
    document.querySelector('.endgame').style.display = 'block'
    document.querySelector('.endgame .text').innerHTML = who; 
}