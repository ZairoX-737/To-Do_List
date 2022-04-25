import React from 'react';
import '..//App.css';
import { Checkbox } from "./Checkbox";
import { Button } from "./Button";

const List = ({list, onChangeBox, handleDel, showChangeTime }) => {
    return (
        <div className="list-items">
            {list.map(item => (
                <>
                <div className="todo-item"
                    key={item.id}
                    style={{ background: item.done ? "#f7c7d7" : null }}
                >
                    <Checkbox
                        onClick={() => onChangeBox(item)}
                        defaultChecked={item.done}
                    />{" "}
                    {item.name}
                    <Button className={'btn time-button'} onClick={() => showChangeTime(item)} >Time</Button>
                    <Button className={"btn delete-button"} onClick={() => handleDel(item)}>Del</Button>
                </div>
                </>
            ))}
            
        </div>
        

    );
};

export default List;