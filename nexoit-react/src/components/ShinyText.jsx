import React from 'react';

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  return (
    <span
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
      style={{ animationDuration: `${speed}s`, fontWeight: '600' }}
    >
      {text}
    </span>
  );
};

export default ShinyText;
