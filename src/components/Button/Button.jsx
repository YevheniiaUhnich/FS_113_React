import React from "react";
import { FaMobileScreenButton } from "react-icons/fa6";
import s from "./Button.module.css";

const Button = ({ children }) => {
  return (
    <button>
      <FaMobileScreenButton className={s.icon} /> {children}
    </button>
  );
};

export default Button;
