import { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './App.css'
import Square from './components/squares';
import { Modal, InfoModal, TurnModal } from './components/modal';

let initialState=["", "", "", "", "", "", "", "", ""];
let initialPlayer=[{name: null, points: 0}, {name: null, points: 0}];

function App() {
	let [squareValue, setSquareValue]=useState(initialState);
	let [turn, setTurn]=useState(true);
	let [players, setPlayers]=useState(initialPlayer);
	let [gameState, setGameState]=useState(true);
	let [playerTurn, setPlayerTurn]=useState(0);
	let [playerWon, setPlayerWon]=useState();

	function onBoxClick(index) {
		let temp=Array.from(squareValue);
		if(temp[index]==='') {
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
		setPlayerTurn(0);
		init();
	}

	useEffect(() => {
        let winner = checkWinner();
		let tempPlayer=players;
        if (winner) {
			if(winner==='X') {
				setPlayerWon(tempPlayer[playerTurn].name);
				tempPlayer[playerTurn].points++;
			}
			else {
				setPlayerWon(tempPlayer[playerTurn===0?1:0].name);
				tempPlayer[playerTurn===0?1:0].points++;
			}
			document.getElementById('info-modal-btn').click();
			clearBoard();
			setPlayers(tempPlayer);
			setPlayerTurn(playerTurn===0?1:0);
			document.getElementById('info-modal').addEventListener('hidden.bs.modal', function() {
				document.getElementById('turn-modal-btn').click();
			});
        }
		else if(squareValue.indexOf('')===-1) {
			setPlayerWon(null);
			document.getElementById('info-modal-btn').click();
			clearBoard();
			setPlayerTurn(playerTurn===0?1:0);
			document.getElementById('info-modal').addEventListener('hidden.bs.modal', function() {
				document.getElementById('turn-modal-btn').click();
			});
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

	function onChangePlayer1(e) {
		let temp=Array.from(players);
		temp[0].name=e.target.value;
		setPlayers(temp);
	}

	function onChangePlayer2(e) {
		let temp=Array.from(players);
		temp[1].name=e.target.value;
		setPlayers(temp);
	}

	function onSubmit(e) {
		e.preventDefault();
		if(players[0].name===null || players[1].name===null)
			return;
		document.querySelector('#player-modal .btn-close').click();
		document.getElementById('player-modal').addEventListener('hidden.bs.modal', function() {
		document.getElementById('turn-modal-btn').click();
		});
	}

	function init() {
		document.getElementById('modal-btn').click();
		setGameState(false);
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
					<button type="button" class="d-none" id="modal-btn" data-bs-toggle="modal" data-bs-target="#player-modal">Open</button>
					<button type="button" class="d-none" id="info-modal-btn" data-bs-toggle="modal" data-bs-target="#info-modal">Open</button>
					<button type="button" class="d-none" id="turn-modal-btn" data-bs-toggle="modal" data-bs-target="#turn-modal">Open</button>
				</div>
			</main>
			<footer className="footer"><div className="fw-bolder text-dark">Made with <span className="text-danger" style={{fontSize: "25px"}}>&hearts;</span> by <a href="https://www.stackshekhu.cf/" target="_blank">SoloSheku</a></div></footer>
			<Modal onChangePlayer1={onChangePlayer1} onChangePlayer2={onChangePlayer2} onSubmit={onSubmit} />
			<InfoModal player={playerWon} />
			<TurnModal player={players[playerTurn].name} />
		</div>
	);
}

export default App;
