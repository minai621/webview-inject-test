import React from 'react';
import './Button-19.css';
import { randomString_19 } from '../utils';

const Button19 = () => {
  const handleClick = () => {
    console.log(randomString_19);
  };

  return <button className="button-19" onClick={handleClick}>BJ075</button>;
};

export default Button19;