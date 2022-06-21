import React from "react";
import Styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as Dogs } from "../Assets/dogs.svg";
import { UserContext } from "../UserContext";

export const Header = () => {
  const { data, userLogOut } = React.useContext(UserContext);

  return (
    <header className={Styles.header}>
      <nav className={`${Styles.nav} container`}>
        <Link className={Styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link className={Styles.login} to="/conta">
            {data.nome}
            <button onClick={userLogOut}>Sair</button>
          </Link>
        ) : (
          <Link className={Styles.login} to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};
