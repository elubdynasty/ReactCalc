const Btn = props => {
    console.log(props)
    return (
        
        <div className={`button-wrapper ${isNaN(props.children) ? 'operator': ''} ${props.label || ''}` }
        onClick={() => props.handleClick(props.children)}
        >
            {props.children}
        </div>
    )
}

export default Btn