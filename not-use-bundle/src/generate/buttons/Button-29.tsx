import React from 'react';
import './Button-29.css';
import { randomDate_29 } from '../utils';

const Button29 = () => {
  const handleClick = () => {
    console.log(randomDate_29);
  };

  return <button className="button-29" onClick={handleClick}>JVS4N</button>;
};

export default Button29;