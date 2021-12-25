const Modal = (props) => {
    return (
        <div className="modal fade" id="modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-hidden="true">
            <div className='modal-dialog modal-dialog-centered'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title text-dark'>Title</h5>
                    </div>
                    <div className='modal-body'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;