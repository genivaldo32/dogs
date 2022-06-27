import React from "react";
import Styles from "./Button.module.css";

export const Button = ({ children, ...props }) => {
  return (
    <button {...props} className={Styles.button}>
      {children}
    </button>
  );
};
