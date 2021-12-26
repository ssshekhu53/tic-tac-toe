import { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Square from './components/squares';
import Modal from './components/modal';

let initialState=["", "", "", "", "", "", "", "", ""];
let initialPlayer=[{name: 'Player 1', points: 0}, {name: 'Player 2', points: 0}];

function App() {
	let [squareValue, setSquareValue]=useState(initialState);
	let [turn, setTurn]=useState(true);
	let [players, setPlayers]=useState(initialPlayer);
	let [gameState, setGameState]=useState(true);
	let [playerTurn, setPlayerTurn]=useState(0);

	function onBoxClick(index) {
		let temp=Array.from(squareValue);
		if(temp[index]=='') {
			temp[index]=turn?'X':'O';
			setSquareValue(temp);
			setTurn(!turn);
		}
	}

	function clearBoard() {
		setSquareValue(initialState);
		setTurn(true);
	}

	function resetGame() {
		setSquareValue(initialState);
		setTurn(true);
		setPlayers(initialPlayer);
		init();
	}

	useEffect(() => {
        let winner = checkWinner();
		let tempPlayer=players;
        if (winner) {
			if(winner=='X') {
				alert(`Ta da! ${tempPlayer[playerTurn].name} won the Game!`);
				tempPlayer[playerTurn].points++;
			}
			else {
				alert(`Ta da! ${tempPlayer[playerTurn==0?1:0].name} won the Game!`);
				tempPlayer[playerTurn==0?1:0].points++;
			}
			clearBoard();
			setPlayers(tempPlayer);
			alert(`${players[playerTurn==0?1:0].name} will start`);
			setPlayerTurn(playerTurn==0?1:0);
        }
		else if(squareValue.indexOf('')==-1) {
			alert('Match draw');
			clearBoard();
			alert(`${players[playerTurn==0?1:0].name} will start`);
			setPlayerTurn(playerTurn==0?1:0);
		}
    }, [squareValue]);

	useEffect(() => {
		init();
	}, []);

	const checkWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for(let i=0; i<lines.length; i++) {
            const [a, b, c]=lines[i];
            if (squareValue[a] && squareValue[a]===squareValue[b] && squareValue[a]===squareValue[c]) {
                return squareValue[a];
            }
        }
        return null;
    }

	function init() {
		let temp=Array.from(players);
		do {
			temp[0].name=prompt('Enter Player 1 name');
		}while(temp[0].name.trim().length==0 || temp[0].name==null);

		do {
			temp[1].name=prompt('Enter Player 2 name');
		}while(temp[1].name.trim().length==0 || temp[1].name==null);

		temp[0].points=0;
		temp[1].points=0;
		setPlayers(temp);
		setGameState(false);
		alert(`${players[playerTurn].name} will start`);
	}

	return (
		<div className="container-fluid bg-dark text-white" style={{minHeight :'100vh'}}>
			<header className="fs-1 text-center w-100 fw-bold py-1">
				Tic Tac Toe
				<hr/>
			</header>
			<main className="mt-5 pb-5" style={{}}>
				<div className='players mb-5 d-flex'>
				<div className='card text-dark text-center me-2'>
							<div className='card-header bg-primary text-white fw-bold'>{players[0].name} ({playerTurn?'O':'X'})</div>
							<div className='card-body fw-bold'><i>{players[0].points}</i></div>
						</div>
						<div className='card text-dark text-center ms-auto'>
							<div className='card-header bg-success text-white fw-bold'>{players[1].name} ({playerTurn?'X':'O'})</div>
							<div className='card-body fw-bold'><i>{players[1].points}</i></div>
						</div>
					{/* <div className='col-sm-2 d-flex justify-content-center pb-2'>
						<div className='card text-dark text-center'>
							<div className='card-header bg-primary text-white fw-bold'>{players[0].name} ({playerTurn?'O':'X'})</div>
							<div className='card-body fw-bold'><i>{players[0].points}</i></div>
						</div>
					</div>
					<div className='col-sm-8'></div>
					<div className='col-sm-2 d-flex justify-content-center'>
						<div className='card text-dark text-center'>
							<div className='card-header bg-success text-white fw-bold'>{players[1].name} ({playerTurn?'X':'O'})</div>
							<div className='card-body fw-bold'><i>{players[1].points}</i></div>
						</div>
					</div> */}
				</div>
				<div className="squares d-flex justify-content-center align-items-center">
					<Square borderPosition="border-end border-bottom" value={squareValue[0]} onClick={() => { onBoxClick(0) }} />
					<Square borderPosition="border-end border-bottom" value={squareValue[1]} onClick={() => { onBoxClick(1) }} />
					<Square borderPosition="border-bottom" value={squareValue[2]} onClick={() => { onBoxClick(2) }} />
				</div>

				<div className="squares d-flex justify-content-center align-items-center">
					<Square borderPosition="border-end border-bottom" value={squareValue[3]} onClick={() => { onBoxClick(3) }} />
					<Square borderPosition="border-end border-bottom" value={squareValue[4]} onClick={() => { onBoxClick(4) }} />
					<Square borderPosition="border-bottom" value={squareValue[5]} onClick={() => { onBoxClick(5) }} />
				</div>

				<div className="squares d-flex justify-content-center align-items-center">
					<Square borderPosition="border-end" value={squareValue[6]} onClick={() => { onBoxClick(6) }} />
					<Square borderPosition="border-end" value={squareValue[7]} onClick={() => { onBoxClick(7) }} />
					<Square borderPosition="border-0" value={squareValue[8]} onClick={() => { onBoxClick(8) }} />
				</div>
				<div className="buttons mb-5 pb-5">
					<button type="button" className="btn btn-lg btn-warning" onClick={clearBoard}>Clear Board</button>
					<button type="button" className="btn btn-lg btn-light" onClick={resetGame}>Reset Game</button>
				</div>
			</main>
			<footer className="footer"><div className="fw-bolder text-dark">Made with <span className="text-danger" style={{fontSize: "25px"}}>&hearts;</span> by <a href="https://www.stackshekhu.cf/" target="_blank">SoloSheku</a></div></footer>
			<Modal />
		</div>
	);
}

export default App;
