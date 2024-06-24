import React from 'react';
import './Button-60.css';
import { randomDate_60 } from '../utils';

const Button60 = () => {
  const handleClick = () => {
    console.log(randomDate_60);
  };

  return <button className="button-60" onClick={handleClick}>FXCLM</button>;
};

export default Button60;