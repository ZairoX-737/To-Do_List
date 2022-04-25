import React from 'react'
import '..//App.css'
import { Button } from './Button';

export const Input = ({ value, onChange, onClick}) => (
    <div className="addInput_container" id="list-addInput">
      <input className="addInput" type="text" placeholder="Add new To-Do" value={value} onChange={onChange}/>
      <Button className={'btn submit-button'} type="button" onClick={onClick} >Add</Button>
    </div>
)
export default Input;