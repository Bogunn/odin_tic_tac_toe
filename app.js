const score = document.querySelector('.score');
const gameSpace = document.querySelector('.game-space')
const gameBoard = [
    ['','',''],
    ['','',''],
    ['','','']
]
const PlayerFactory = (playerName, playerNumber) =>{
    
}

const displayGameBoard = ()=>{

    gameBoard.forEach((row,index1) => row.forEach((space,index2) =>{
        console.log(index1,index2)
        let box = document.createElement('div');
        box.classList.add('box');
        gameSpace.appendChild(box); 
    })
        
    )}