import React, {useReducer} from 'react'

import PlayersTurn from "../components/PlayersTurn";

// reduces the use of using props from PlayersTurn
const defaultPlayerState = {
    playerSymbol: ["X", "O"],
    players: [{player1Token: "", player2Token: ""}],
    score: ""
}
// playerReducer passed to showplayerTurns as a pointer, changing current play moves state,
//action adding X or zero to player 
// action changing from player 1 to 2
const playerReducer = (state, action) => {
    if(action.type === 'ADD') {
    
    const updatedPlayerMovesOne = state.players[0] += action.playerSymbol[0]
    console.log("This is updatedPlayerMovesOne")
    console.log(updatedPlayerMovesOne)      
    const updatedPlayerMovesTwo = state.players[1] += action.playerSymbol[1]
    console.log("This is updatedPlayerMovesTwo")
    console.log(updatedPlayerMovesTwo) 
    return [...updatedPlayerMovesOne, ...updatedPlayerMovesTwo];
    }
}

const PlayerTurnProvider = (props) => {
    console.log("This is PlayerTurnProvider")
    // react hook, playerReducer function, just a pointer for it, will be executed by React itself
    const [playerState, dispatchCellAction] = useReducer(playerReducer, defaultPlayerState);
    // console.log(players: props.playerToken[0])
   
    const showplayerTurns = (playerToken) => {
      props.players.playerToken[0] === "X"
      return playerToken.length===0 ? "X" : "O"
     }
   
   

 
const playerContext = {
  playerSymbol: playerState.playerSymbol,
  players: playerState.players
}

return (
    <div>
      <PlayersTurn.Provider value={playerContext}>
      {props.children}
      </PlayersTurn.Provider>
    </div>

  ) 
}
export default PlayerTurnProvider;