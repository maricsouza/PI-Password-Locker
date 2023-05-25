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

  async function login (email: string, password: string) {
    
    if(email === undefined) {
      // TODO :: MODAL/VALIDACAO DE ERRO
      console.log("deve ser digitado um email")
      return
    }

    if (password === undefined) {
      // TODO :: MODAL/VALIDACAO DE ERRO
      console.log("deve ser digitada uma senha")
      return
    }

    const resp = await api.login({email: email, password: password});

    if( resp === undefined) {
      console.log("erro no retorno da requisição")
      return
    }

    console.log(resp);

  }

  return (
    <div className={style.container}>
      <ImageWithLogo largura="320px" />
      <Input content={"Email"} value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input content={"Senha"} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button text={"Entrar"} typeofbutton="textButton" size={sizes.large} onClick={() => login(email,password)} />
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
