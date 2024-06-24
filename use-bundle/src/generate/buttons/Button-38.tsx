import React from 'react';
import './Button-38.css';
import { randomArray_38 } from '../utils';

const Button38 = () => {
  const handleClick = () => {
    console.log(randomArray_38);
  };

  return <button className="button-38" onClick={handleClick}>VI741</button>;
};

export default Button38;