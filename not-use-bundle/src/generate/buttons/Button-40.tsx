import React from 'react';
import './Button-40.css';
import { randomDate_40 } from '../utils';

const Button40 = () => {
  const handleClick = () => {
    console.log(randomDate_40);
  };

  return <button className="button-40" onClick={handleClick}>D5WUW</button>;
};

export default Button40;