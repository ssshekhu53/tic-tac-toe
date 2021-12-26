const Square = (props) => {
    return (
        <div className={`square border-white d-flex justify-content-center align-items-center ${props.borderPosition} ${props.value=='X'?'text-info':'text-warning'}`} onClick={props.onClick}>{props.value}</div>
    )
}

export default Square;