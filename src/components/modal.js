export const Modal = (props) => {
    return (
        <div className="modal fade" id="player-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-hidden="true">
            <div className='modal-dialog modal-dialog-centered modal-sm'>
                <div className='modal-content'>
                    <div className='modal-header bg-danger'>
                        <h5 className='modal-title text-center fw-bold fs-4 w-100 text-white '>Players</h5>
                        <button type="button" class="btn-close d-none" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className='modal-body'>
                        <form className="text-dark fw-bold" onSubmit={props.onSubmit}>
                            <div className="form-group mb-3">
                                <label for="player-1">Player 1</label>
                                <input type="text" class="form-control" name="player-1" id="player-1" placeholder="Player 1" onChange={props.onChangePlayer1} />
                            </div>
                            <div className="form-group mb-3">
                                <label for="player-2">Player 2</label>
                                <input type="text" class="form-control" name="player-2" id="player-2" placeholder="Player 2" onChange={props.onChangePlayer2} />
                            </div>
                            <div className="form-group mb-3 text-center">
                                <button type="submit" class="btn btn-dark fw-bold">Start Game</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )  
}

export const InfoModal = (props) => {
    return (
        <div className="modal fade" id="info-modal" tabIndex="-1" aria-hidden="true">
            <div className='modal-dialog modal-dialog-centered modal-sm'>
                <div className='modal-content'>
                    <div className={`modal-header ${props.player===null?'bg-dark':'bg-success'}`}>
                        <h5 className='modal-title text-center fw-bold fs-4 w-100 text-white '>Match Result</h5>
                    </div>
                    <div className='modal-body'>
                        {props.player===null &&
                            <Alert alertType="alert-dark" message="Match Draw" />
                        }
                        {props.player!==null && 
                            <Alert alertType="alert-success" message={`${props.player} won the match`} />
                        }
                    </div>
                    <div className="modal-footer d-flex justify-content-center">
                        <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal" aria-label="Close">Dismiss</button>
                    </div>
                </div>
            </div>
        </div>
    )  
}

export const TurnModal = (props) => {
    return (
        <div className="modal fade" id="turn-modal" tabIndex="-1" aria-hidden="true">
            <div className='modal-dialog modal-dialog-centered modal-sm'>
                <div className='modal-content'>
                <div className='modal-header bg-info'>
                        <h5 className='modal-title text-center fw-bold fs-4 w-100 text-white '>Game</h5>
                    </div>
                    <div className='modal-body'>
                        <Alert alertType="alert-info" message={`${props.player} will start`} />
                    </div>
                </div>
            </div>
        </div>
    )  
}

const Alert = (props) => {
    return (
        <div className={`alert ${props.alertType} fs-4`}>{props.message}</div>
    )
}

// export Modal;
// export InfoModal;