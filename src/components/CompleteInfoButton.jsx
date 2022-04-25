import React from 'react'
import '..//App.css'

const CompleteInfoButton = ({onClick}) => {
    return(
        <>
            <button className='btn infoButton' onClick={onClick}>Show amount of complete tasks</button>
        </>
    )
}

export default CompleteInfoButton;