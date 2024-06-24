import React from 'react';
import './Button-100.css';
import { randomDate_100 } from '../utils';

const Button100 = () => {
  const handleClick = () => {
    console.log(randomDate_100);
  };

  return <button className="button-100" onClick={handleClick}>NKFT2</button>;
};

export default Button100;