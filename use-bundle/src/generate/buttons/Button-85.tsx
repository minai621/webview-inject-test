import React from 'react';
import './Button-85.css';
import { randomString_85 } from '../utils';

const Button85 = () => {
  const handleClick = () => {
    console.log(randomString_85);
  };

  return <button className="button-85" onClick={handleClick}>PY4TA</button>;
};

export default Button85;