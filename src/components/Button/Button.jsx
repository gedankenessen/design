import React from 'react';
import './Button.css';

export const Button = ({
  text, disabled = false, ...props
}) => (
  <button
    {...props}
    disabled={disabled}
    className={!disabled ? "design-button" : "design-button-disabled"}>{text}</button>
)
