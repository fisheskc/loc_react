import React from 'react';
// import GameBoard from './GameBoard';


export const PlayersTurn = (props) =>  {
    const [playerTurn, setPlayerTurn] = React.useState({player1Token: "", player2Token: ""});
    
    const playerMove=(id) => {
		if(props.id % 2 !==0) {
           setPlayerTurn(playerTurn[0])
        } else {
           setPlayerTurn(playerTurn[1])
        }
	}

}

export default PlayersTurn;




