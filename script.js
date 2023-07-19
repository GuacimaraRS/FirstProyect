import { Player } from "./player.js";
import { Enemy } from "./enemy.js";

const board = document.getElementById('board');
let mosquito = new Player(0, 200, board);

let enemyMoveId;
let playerMoveId;

function start(){
    mosquito.createMosquito();
    playerMoveId = setInterval(playerMove, 50);
    enemyMoveId = setInterval(createEnemy, 1000)
}


function playerMove() {
    mosquito.move();
}

function createEnemy(){
   
    let randomY = Math.floor(Math.random() * 10) * 50
    let enemy = new Enemy(950, randomY, board);
    enemy.insertFlySwatter()
     setInterval(enemy.move)
    
}


window.addEventListener('keydown', function(e) {
    switch (e.key) {
        case 'ArrowRight':
            mosquito.directionX = 1;
            break;
        case 'ArrowLeft':
            mosquito.directionX = -1;
            break;
        case 'ArrowUp':
            mosquito.directionY = -1;
            break;
        case 'ArrowDown':
            mosquito.directionY = 1;
            break;
    }
});

window.addEventListener('keyup', function(e) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        mosquito.directionX = 0;
    }
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        mosquito.directionY = 0;
    }
});


start()