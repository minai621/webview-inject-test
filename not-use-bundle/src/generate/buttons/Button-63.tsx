import React from 'react';
import './Button-63.css';
import { randomNumber_63 } from '../utils';

const Button63 = () => {
  const handleClick = () => {
    console.log(randomNumber_63);
  };

  return <button className="button-63" onClick={handleClick}>Q3A74</button>;
};

export default Button63;