import React from 'react';
import './Button-25.css';
import { randomArray_25 } from '../utils';

const Button25 = () => {
  const handleClick = () => {
    console.log(randomArray_25);
  };

  return <button className="button-25" onClick={handleClick}>FAZUR</button>;
};

export default Button25;