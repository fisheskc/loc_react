import React from 'react'

const PlayerMoves = () => {

    const [playerTurn, setPlayerTurn] = React.useState(["X", "O"]);

        setPlayerTurn((currPlayer) => {
          console.log("This is currPlayer.player")
          if(currPlayer.length> 1) {
              currPlayer.shift();
              return currPlayer
          } else {
              return "X"
          }
        })
      
  return (
    <div>PlayerMoves</div>
  )
}

export default PlayerMoves