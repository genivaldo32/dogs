import React from "react";
import Styles from "./Footer.module.css";
import { ReactComponent as Dogs } from "../Assets/dogs-footer.svg";

export const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <Dogs />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  );
};
