import Styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as Dogs } from "../Assets/dogs.svg";

export const Header = () => {
  return (
    <header className={Styles.header}>
      <nav className={`${Styles.nav} container`}>
        <Link className={Styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        <Link className={Styles.login} to="/login">
          Login / Criar
        </Link>
      </nav>
    </header>
  );
};
