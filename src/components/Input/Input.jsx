import React from 'react';
import './Input.css';

// TODO: Add text elipsis (e.g "hello from...")
export const Input = ({ disabled, error, ...props }) => (
  <input
    {...props}
    type="text"
    className={
      disabled
        ? 'design-input-disabled'
        : error
          ? 'design-input-error'
          : 'design-input'
    } />
)
