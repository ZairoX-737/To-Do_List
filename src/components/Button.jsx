import React from "react";

export const Button = ({ onClick, children, className }) => (
  <button className={className} type="button" onClick={onClick}>{children}</button>
);
