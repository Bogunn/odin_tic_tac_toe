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
        let box = document.createElement('div');
        box.classList.add('box');
        box.setAttribute('id',`${index1}${index2}`)
        box.addEventListener('click',addSybmol.bind(index1,index2))
        gameSpace.appendChild(box); 
    })
       
)}


const addSybmol = ()=>{
    box = document.querySelectorAll('.box');
    box.forEach(box=> box.addEventListener('click',(e)=>{
       let boxId = e.target.id;
       let indexes = boxId.split('')
        let index1 = parseInt(indexes[0]);
        let index2 = parseInt(indexes[1]);

       symbol = box.innerHTML = "X";
       gameBoard[index1].splice(index2,1,symbol)
       console.log(gameBoard)
    })) 
    
} 