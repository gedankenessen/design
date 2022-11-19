import React from 'react';
import './Button.css';

export const Button = ({
  text, theme, disabled = false, ...props
}) => (
  <button {...props} disabled={disabled} className="design-button">{text}</button>
)
