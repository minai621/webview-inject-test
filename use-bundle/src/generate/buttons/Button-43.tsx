import React from 'react';
import './Button-43.css';
import { randomString_43 } from '../utils';

const Button43 = () => {
  const handleClick = () => {
    console.log(randomString_43);
  };

  return <button className="button-43" onClick={handleClick}>1B8VV</button>;
};

export default Button43;