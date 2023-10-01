import React from 'react'

import GamePlay from './components/GamePlay';
import GameBoard from './components/GameBoard';

// import Cell from './components/Cell';

export default function App() {
	
	return (
        <main>
			<h1>Knots and Crosses</h1>
			<GamePlay />
			<GameBoard />
			
        </main>
    )

};

