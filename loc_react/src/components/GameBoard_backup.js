import React, {Fragment} from 'react'
import Cell from './Cell';
import cellsgrid from './cellsgrid';

import classes from './Style.module.css'

const GameBoard = (props,id) => {
  
  // const [score, setScore] = React.useState("");
  // const [gameBoardSpace, setGameBoardSpace] = React.useState(["-", "-", "-", "-", "-", "-", "-", "-", "-"]); 
  const [player, setPlayer] = React.useState("X");
 
  const [cells, setCells] = React.useState(cellsgrid);

  let winningPatterns = [
    [1, 5, 9],
    [1, 2, 3],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7],
    [4, 5, 6],
    [7, 8, 9]
  ];

  // const board = {
  //   0: "X",
  //   1: "O",
  //   2: " ",
  // }
  // XBoard is player X
// let XBoard = board[1]
// console.log(`This is X in Board ${XBoard}`)
// // YBoard is player Y
// let OBoard = board[2]
  // console.log(`This is O in Board ${OBoard}`)

  // let winPat = winningPatterns[0]
  // console.log(`This is winPat ${winPat}`)


  function clickCell(e) {
    console.log("Clicked here")
    let cellNumber = e.target.dataset.number
    // console.log(cellNumber)
    // cellNumber = 5;
    let displayValue = player
    let newPlayer = (player === 'X') ? 'O' : 'X'
    // console.log("This is cell id")
    cells[cellNumber-1].value = displayValue
    console.log(cellNumber)
    console.log(`This is cell ${cellNumber}`)
    console.log(cells)
    // console.log("This is player")
    // console.log(player)

    setCells([...cells])
    console.log("This is findWinningPatterns(cellNumber)")
    // console.log(findWinningPatterns())
    console.log(setPlayer(newPlayer)) 
  }

  let winPattern = winningPatterns[0]
  let gameOver = '';
  let count = 0
  let findWinningPatterns = (player) => {

  cells.map((cellSpace) => {
    
   for (let pattern of winPattern) { 
    console.log(`This is winPattern: ${winPattern}`) 
    console.log(`This is pattern: ${pattern}`) 
    let patternOne = pattern[0]
    let patternTwo = pattern[1]
    let patternThree = pattern[2]
 
    console.log(`This is cellSpace: ${cellSpace.value}  ${cellSpace.id}`)  
    console.log(`This is patternOne: ${patternOne}`) 

    if(cellSpace.value === player && cellSpace.id === pattern) {
        console.log(cellSpace.id) 
        console.log(`This is player: ${player}`)
        
        count++
        console.log(`This is count ${count}`)
        if(count === 3) {
          //  gameOver = cellSpace.value
          console.log("game over")
        }
      } else if(cellSpace.value === player && cellSpace.id === patternOne) {
        console.log(`This is player: ${player}`)
        
        console.log(`This is count ${count}`)
        count++;  
        if(count === 3) {
          // gameOver = cellSpace.value
          console.log("game over")
       }      
      } else {
        console.log(false)
      }
      }
  })
    // console.log(`This is player: ${player}`)
    return `count is: ${count} ${player}` 
  }


 
  const cellElements = (id) => {
  // console.log("This is cellElements")
   console.log(cells)
    return cells.map((cell)=> (  
    <Cell
      key={cell.id} 
      id={cell.id}
      clickCell={clickCell}
      value = {cell.value}
      />
    ))
  }
    return (
      <Fragment>
        <div className={classes.container}>
            {cellElements(id)}  
        </div>
        <div>
            {findWinningPatterns(player)}
        </div>
      </Fragment>
    ) 
}
export default GameBoard;









