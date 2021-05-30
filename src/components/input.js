import React from 'react'

 const Input = props => {
     console.log(props)
    return (
        <div className='input'>
            <h1>{props.input}</h1>
        </div>
    )
}

export default Input