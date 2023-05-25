import { ImageWithLogo, Input, Button } from "@/components";
import style from "../login/style.module.scss";
import { useState } from "react";
import Link from "next/link";
import { sizes } from "@/styles/global.type";
import { Account } from "@/services/endpoints/account";

const api = new Account()

export default function Login() {

  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");

  function login () {
    
    

  }

  return (
    <div className={style.container}>
      <ImageWithLogo largura="320px" />
      <Input content={"Email"} value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input content={"Senha"} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button text={"Entrar"} typeofbutton="textButton" size={sizes.large} onClick={login} />
      <text className={style.text}>
        Não tem uma conta?{" "}
        <Link className={style.linkCadastro} href={"../siginUp"}>
          {" "}
          Cadastre-se
        </Link>
      </text>
    </div>
  );
}
