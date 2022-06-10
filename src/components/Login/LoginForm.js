import React from "react";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(ev) {
    ev.preventDefault();
    fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
      });
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          type="text"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button>Enviar</button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};
