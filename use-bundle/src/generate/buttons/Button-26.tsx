import React from 'react';
import './Button-26.css';
import { randomBoolean_26 } from '../utils';

const Button26 = () => {
  const handleClick = () => {
    console.log(randomBoolean_26);
  };

  return <button className="button-26" onClick={handleClick}>ZRPQJ</button>;
};

export default Button26;