import React from 'react';
import './Button-76.css';
import { randomBoolean_76 } from '../utils';

const Button76 = () => {
  const handleClick = () => {
    console.log(randomBoolean_76);
  };

  return <button className="button-76" onClick={handleClick}>CSELZ</button>;
};

export default Button76;