const Modal = (props) => {
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

export default Modal;