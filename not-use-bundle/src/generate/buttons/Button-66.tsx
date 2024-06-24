import React from 'react';
import './Button-66.css';
import { randomDate_66 } from '../utils';

const Button66 = () => {
  const handleClick = () => {
    console.log(randomDate_66);
  };

  return <button className="button-66" onClick={handleClick}>XPT0M</button>;
};

export default Button66;