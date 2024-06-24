import React from 'react';
import './Button-93.css';
import { randomDate_93 } from '../utils';

const Button93 = () => {
  const handleClick = () => {
    console.log(randomDate_93);
  };

  return <button className="button-93" onClick={handleClick}>BLMFL</button>;
};

export default Button93;