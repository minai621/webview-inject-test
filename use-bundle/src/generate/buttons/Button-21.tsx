import React from 'react';
import './Button-21.css';
import { randomNumber_21 } from '../utils';

const Button21 = () => {
  const handleClick = () => {
    console.log(randomNumber_21);
  };

  return <button className="button-21" onClick={handleClick}>5QNRY</button>;
};

export default Button21;