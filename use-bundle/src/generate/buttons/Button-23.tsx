import React from 'react';
import './Button-23.css';
import { randomDate_23 } from '../utils';

const Button23 = () => {
  const handleClick = () => {
    console.log(randomDate_23);
  };

  return <button className="button-23" onClick={handleClick}>D1PAS</button>;
};

export default Button23;