import React from 'react';
import './Button-78.css';
import { randomDate_78 } from '../utils';

const Button78 = () => {
  const handleClick = () => {
    console.log(randomDate_78);
  };

  return <button className="button-78" onClick={handleClick}>APFUT</button>;
};

export default Button78;