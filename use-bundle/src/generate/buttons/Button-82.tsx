import React from 'react';
import './Button-82.css';
import { randomDate_82 } from '../utils';

const Button82 = () => {
  const handleClick = () => {
    console.log(randomDate_82);
  };

  return <button className="button-82" onClick={handleClick}>CH4AN</button>;
};

export default Button82;