import { ImageWithLogo, Input, Button } from "@/components";
import style from "../login/style.module.scss";
import { useState } from "react";
import Link from "next/link";
import { sizes } from "@/styles/global.type";
import PasswordValidator from "@/components/PasswordValidator";
export default function Login() {
  const [data, setData] = useState("");

  return (
    <div className={style.container}>
      <ImageWithLogo largura="320px" />
      <Input content={"Email"} />
      <Input content={"Senha"} type="password" />
      <Link href={"/dashboard"}>
      <Button text={"Entrar"} typeofbutton="textButton" size={sizes.large} /></Link>
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
