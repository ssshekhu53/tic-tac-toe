const Square = (props) => {
    return (
        <div className={`square border-white d-flex justify-content-center align-items-center ${props.borderPosition}`} onClick={props.onClick}>{props.value}</div>
    )
}

export default Square;