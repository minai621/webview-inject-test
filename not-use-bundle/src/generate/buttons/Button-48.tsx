import React from 'react';
import './Button-48.css';
import { randomArray_48 } from '../utils';

const Button48 = () => {
  const handleClick = () => {
    console.log(randomArray_48);
  };

  return <button className="button-48" onClick={handleClick}>YMHSG</button>;
};

export default Button48;