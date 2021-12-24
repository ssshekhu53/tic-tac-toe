import { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Square from './components/squares';

let initialState=["", "", "", "", "", "", "", "", ""];

function App() {
	let [squareValue, setSquareValue]=useState(initialState);
	let [turn, setTurn]=useState(true);

	function onBoxClick(index) {
		let temp=Array.from(squareValue);
		temp[index]=turn?'X':'O';
		setSquareValue(temp);
		setTurn(!turn);
	}

	function clearBoard() {
		setSquareValue(initialState);
		setTurn(true);
	}

	useEffect(() => {
        let winner = checkWinner();
        if (winner) {
            clearBoard();
            alert(`Ta da ! ${winner} won the Game !`)
        }
		else if(squareValue.indexOf('')==-1) {
			clearBoard();
			alert('Match draw');
		}
    }, [squareValue])

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
        // console.log('Class: App, Function: checkWinner ==', squareValue[0], squareValue[1], squareValue[2]);
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squareValue[a] && squareValue[a] === squareValue[b] && squareValue[a] === squareValue[c]) {
                return squareValue[a];
            }
        }
        return null;
    }


	return (
		<div className="container-fluid bg-dark text-white" style={{minHeight :'100vh'}}>
			<header className="display-3 text-center w-100 fw-bold py-4">
				Tic Tac Toe
			</header>
			<main className="mt-5 pb-5" style={{}}>
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
				<div className="buttons">
					<button type="button" className="btn btn-lg btn-warning" onClick={clearBoard}>Clear Board</button>
					<button type="button" className="btn btn-lg btn-light" onClick={clearBoard}>Reset Game</button>
				</div>
			</main>
			<footer className="footer"><div className="fw-bolder text-dark">Made with <span className="text-danger" style={{fontSize: "25px"}}>&hearts;</span> by <a href="https://www.stackshekhu.cf/" target="_blank">SoloSheku</a></div></footer>
		</div>
	);
}

export default App;
