import React from 'react';
import './Button-91.css';
import { randomNumber_91 } from '../utils';

const Button91 = () => {
  const handleClick = () => {
    console.log(randomNumber_91);
  };

  return <button className="button-91" onClick={handleClick}>H18SC</button>;
};

export default Button91;