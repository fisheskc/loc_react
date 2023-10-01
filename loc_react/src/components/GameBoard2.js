import React, {Fragment} from 'react'
import Cell from './Cell';
import cellsgrid from './cellsgrid';

import classes from './Style.module.css'

const GameBoard = (props) => {
  
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

const board = {
  1: "X",
  2: "O",
  3: " ",
}

// plumb this into game board
let findWinningPatterns = (arr) => {
  let newArrWinPat = []
  let cellSpr = [...cells]
  // loops through the winning patterns
  let winPat = winningPatterns[0]
  // console.log(`This in winpat: ${winPat}`)
    return cellSpr.map((cellSpace) => {
      console.log(`This in cellSpace: ${cellSpace.id}${cellSpace.value}`)
      let firstPlayer = cellSpace.value;
      if(firstPlayer && cellSpace.value===undefined) return;
      let cellValue = cellSpace.id;
      for(let i=0; i<winPat.length; i++) {
        console.log(winPat[i])
     
      // console.log(`This is firstPlayer: ${firstPlayer} ${cellSpace.value}`);
      if(firstPlayer && cellSpace.value===undefined) return;
      // let foundWinPat = true;
      if(cellValue ===winPat[i] && cellValue ===winPat[i] && cellValue ===winPat[i]) {
        console.log("Winning numbers")
      }
      }
    })
  }
 

 
function clickCell(e) {
  console.log("Clicked here")
  let cellNumber = e.target.dataset.number
  // console.log(cellNumber)
  // cellNumber = 5;
  let displayValue = player
  let newPlayer = (player === 'X') ? 'O' : 'X'
  console.log("This is cell id")
  cells[cellNumber-1].value = displayValue
  // console.log(cellNumber)
  // console.log(`This is cell ${cellNumber}`)
  // console.log(cells)
  // console.log("This is player")
  // console.log(player)

  setCells([...cells])
  console.log("This is findWinningPatterns(cellNumber)")
  console.log(findWinningPatterns())
 
  setPlayer(newPlayer) 

}
 
const cellElements = () => {
  // console.log("This is cellElements")
  // console.log(cells)
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
            {cellElements()}  
        </div>
      </Fragment>
    ) 
}
export default GameBoard;








