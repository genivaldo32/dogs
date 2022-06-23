import React from "react";
import { USER_POST } from "../../api";
import { useForm } from "../../Hooks/useForm";
import { Button } from "../Forms/Button";
import { Input } from "../Forms/Input";
import { UserContext } from "../../UserContext";

export const LoginCreate = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm(); // não esquecer de passar o password para validação de senha forte

  const { userLogin } = React.useContext(UserContext);

  async function handleSubmit(ev) {
    ev.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const response = await fetch(url, options);
    if (response.ok) userLogin(username.value, password.value);
    console.log(response);
  }
  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="text" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Cadastrar</Button>
      </form>
    </section>
  );
};
