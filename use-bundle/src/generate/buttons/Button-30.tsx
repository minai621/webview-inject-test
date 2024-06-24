import React from 'react';
import './Button-30.css';
import { randomString_30 } from '../utils';

const Button30 = () => {
  const handleClick = () => {
    console.log(randomString_30);
  };

  return <button className="button-30" onClick={handleClick}>P9YNG</button>;
};

export default Button30;