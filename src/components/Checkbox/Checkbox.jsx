import React from 'react';
import './Checkbox.css';

// TODO: Rethink if impl. needed, default style is already very pretty
export const Checkbox = ({ disabled, error, ...props }) => (
  <input
    {...props}
    disabled={disabled}
    type="checkbox"
    className={
      disabled
        ? 'design-checkbox-disabled'
        : error
          ? 'design-checkbox-error'
          : 'design-checkbox'
    } />
)
