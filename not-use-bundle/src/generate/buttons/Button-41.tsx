import React from 'react';
import './Button-41.css';
import { randomString_41 } from '../utils';

const Button41 = () => {
  const handleClick = () => {
    console.log(randomString_41);
  };

  return <button className="button-41" onClick={handleClick}>H1WEN</button>;
};

export default Button41;