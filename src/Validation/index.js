import React from 'react'

const Validation = (props) => {
    return (
        <div>
            <p>{props.size > 5 ? 'Text is too long' : 'Text is to Short'}</p>
        </div>
    )
}

export default Validation