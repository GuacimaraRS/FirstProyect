import { Player } from "./player.js";

const board = document.getElementById('board');
let mosquito = new Player(0, 200, board);

function start(){
    mosquito.createMosquito();
  
}




start()