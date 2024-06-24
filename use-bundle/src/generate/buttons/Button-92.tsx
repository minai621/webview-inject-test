import React from 'react';
import './Button-92.css';
import { randomNumber_92 } from '../utils';

const Button92 = () => {
  const handleClick = () => {
    console.log(randomNumber_92);
  };

  return <button className="button-92" onClick={handleClick}>DVYK7</button>;
};

export default Button92;