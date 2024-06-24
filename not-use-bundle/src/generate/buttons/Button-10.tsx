import React from 'react';
import './Button-10.css';
import { randomDate_10 } from '../utils';

const Button10 = () => {
  const handleClick = () => {
    console.log(randomDate_10);
  };

  return <button className="button-10" onClick={handleClick}>T1OYE</button>;
};

export default Button10;