import { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Square from './components/squares';

let initialState=["X", "O", "", "", "", "", "", "", ""]
let squareValue=initialState;


function App() {
	return (
		<div className="container-fluid bg-dark text-white" style={{minHeight :'100vh'}}>
			<header className="display-3 text-center w-100 fw-bold py-4">
				Tic Tac Toe
			</header>
			<main className="mt-5 pb-5" style={{}}>
				<div className="squares d-flex justify-content-center align-items-center">
					<Square borderPosition="border-end border-bottom" value={squareValue[0]} />
					<Square borderPosition="border-end border-bottom" value={squareValue[1]} />
					<Square borderPosition="border-bottom" value={squareValue[2]} />
				</div>

				<div className="squares d-flex justify-content-center align-items-center">
					<Square borderPosition="border-end border-bottom" value={squareValue[3]} />
					<Square borderPosition="border-end border-bottom" value={squareValue[4]} />
					<Square borderPosition="border-bottom" value={squareValue[5]} />
				</div>

				<div className="squares d-flex justify-content-center align-items-center">
					<Square borderPosition="border-end" value={squareValue[6]} />
					<Square borderPosition="border-end" value={squareValue[7]} />
					<Square borderPosition="border-0" value={squareValue[8]} />
				</div>
				<div className="buttons">
					<button type="button" className="btn btn-lg btn-warning">Clear Board</button>
					<button type="button" className="btn btn-lg btn-light">Reset Game</button>
				</div>
			</main>
			<footer className="footer"><div className="fw-bolder text-dark">Made with <span className="text-danger" style={{fontSize: "25px"}}>&hearts;</span> by <a href="https://www.stackshekhu.cf/" target="_blank">SoloSheku</a></div></footer>
		</div>
	);
}

export default App;
