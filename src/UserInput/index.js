import React from 'react'

const UserOutput = (props) => {
    return (
        <div>
            <input onChange={props.change} value={props.username}/>
        </div>
    )
}

export default UserOutput