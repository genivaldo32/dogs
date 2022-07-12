import React from "react";
import { Input } from "../Forms/Input";
import { Button } from "../Forms/Button";
import { useForm } from "../../Hooks/useForm";
import { useFetch } from "../../Hooks/useFetch";
import { PASSWORD_LOST } from "../../api";
import { Error } from "../Helpers/Error";

export const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        // url: "http://localhost:3000/login/perdeu",
        url: window.location.href.replace("perdeu", "resetar"),
      });
      const json = await request(url, options);
      console.log(json);
    }
  }
  return (
    <section>
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="email" {...login} />
          {loading ? (
            <Button>Enviando...</Button>
          ) : (
            <Button>Enviar e-mail</Button>
          )}
        </form>
      )}
      <Error error={error} />
    </section>
  );
};
