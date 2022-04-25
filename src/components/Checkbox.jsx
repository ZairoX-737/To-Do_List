import React from "react";
import '..//App.css';

export const Checkbox = ({ onClick, defaultChecked }) => (
    <input className="checkbox" type="checkbox" onClick={onClick} defaultChecked={defaultChecked} />
);