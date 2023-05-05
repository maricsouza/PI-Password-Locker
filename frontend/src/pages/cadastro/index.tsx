import React from "react";
import style from "../cadastro/style.module.scss";
import Link from "next/link";
import Input from "@/components/Input";
import ImageWithLogo from "@/components/ImageWithLogo/ImageWithLogo";

export default function Cadastro() {
  return (
    <div className={style.container}>
      <div className={style.forms}>
        <ImageWithLogo />
        <div className={style.colun1}>
          <Input content={"Nome:"} />
          <Input content={'Telefone:'} />
        </div>
            <div className={style.colun2} >
                <Input content={'Email:'} />
            </div>
        <div className={style.colun3}>
          <Input content={"Senha"} type="password" />
          <Input content={"Confirmar Senha"} />
        </div>
        <text className={style.text}>
          Ja possui conta? <Link href={"../login"}> Entrar</Link>
        </text>
      </div>
    </div>
  );
}
