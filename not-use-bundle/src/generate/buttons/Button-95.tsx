import React from 'react';
import './Button-95.css';
import { randomString_95 } from '../utils';

const Button95 = () => {
  const handleClick = () => {
    console.log(randomString_95);
  };

  return <button className="button-95" onClick={handleClick}>6JMLQ</button>;
};

export default Button95;