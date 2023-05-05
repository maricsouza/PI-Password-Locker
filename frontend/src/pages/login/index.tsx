import ImageWithLogo from "@/components/ImageWithLogo/ImageWithLogo";
import Input from "@/components/Input";
import style from "../login/style.module.scss";
import Button from "@/components/Button";
import { useState } from "react";
import Link from "next/link";
export default function Login() {
  const [data, setData] = useState("");

  return (
    <div className={style.container}>
      <ImageWithLogo />
      <Input content={"Email"}/>
      <Input content={"Senha"}/>
      <Button text={"Entrar"}/>
      <text className={style.text}>Não tem uma conta? <Link className={style.linkCadastro} href={"../cadastro"}> Cadastre-se</Link></text>
    </div>
  );
}
