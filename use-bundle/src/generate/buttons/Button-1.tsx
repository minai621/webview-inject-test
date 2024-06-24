import React from "react";
import { randomString_1 } from "../utils";
import "./Button-1.css";

const Button1 = ({ label }: { label: string }) => {
  const handleClick = () => {
    console.log(randomString_1);
  };

  return (
    <button className="button-1" onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button1;
