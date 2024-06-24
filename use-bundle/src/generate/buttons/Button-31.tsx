import React from 'react';
import './Button-31.css';
import { randomArray_31 } from '../utils';

const Button31 = () => {
  const handleClick = () => {
    console.log(randomArray_31);
  };

  return <button className="button-31" onClick={handleClick}>2AXS5</button>;
};

export default Button31;