import React from 'react'
import '..//App.css'

const CompleteInfoButton = ({ handleClick, clicked, checked }) => {
  return (
    <>
      <button className='btn infoButton' onClick={handleClick}>
        Show amount of complete tasks
      </button>
      <div className='total-checkbox'>
        {clicked && `Total Checkbox Checked: ${checked}`}
      </div>
    </>
  )
}

export default CompleteInfoButton
