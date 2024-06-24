import React from 'react';
import './Button-96.css';
import { randomNumber_96 } from '../utils';

const Button96 = () => {
  const handleClick = () => {
    console.log(randomNumber_96);
  };

  return <button className="button-96" onClick={handleClick}>U4N8Q</button>;
};

export default Button96;