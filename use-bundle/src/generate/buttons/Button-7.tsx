import React from 'react';
import './Button-7.css';
import { randomDate_7 } from '../utils';

const Button7 = () => {
  const handleClick = () => {
    console.log(randomDate_7);
  };

  return <button className="button-7" onClick={handleClick}>8C6G1</button>;
};

export default Button7;