import React from 'react';
import './Button-52.css';
import { randomNumber_52 } from '../utils';

const Button52 = () => {
  const handleClick = () => {
    console.log(randomNumber_52);
  };

  return <button className="button-52" onClick={handleClick}>FK3L1</button>;
};

export default Button52;