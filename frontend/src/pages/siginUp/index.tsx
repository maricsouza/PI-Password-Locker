import React from "react";
import style from "../siginUp/style.module.scss";
import Link from "next/link";
import Input from "@/components/Input";
import ImageWithLogo from "@/components/ImageWithLogo";
import Button from "@/components/Button";

export default function SiginUp() {
  return (
    <div className={style.container}>
      <div className={style.forms}>
        <div className={style.imgLogo}>
          <ImageWithLogo largura="320px" />
        </div>
        <div className={style.colun1}>
          <Input content={"Nome "} />
          <Input content={"Telefone"} type="number" />
        </div>
        <div className={style.colun2}>
          <Input content={"Email"} largura={"820px"} type="email" />
        </div>
        <div className={style.colun3}>
          <Input content={"Senha"} type="password" />
          <Input content={"Confirmar Senha"} type="password" />
        </div>
        <div className={style.btnCadastrar}>
          <Button text={"Cadastrar"} size="500px" typeofbutton="textButton" />
          <div className={style.textEntrar}>
            <text>
              {" "}
              Ja possui conta?{" "}
              <Link href={"../login"} className={style.linkEntrar}>
                {" "}
                Entrar
              </Link>
            </text>
          </div>
        </div>
      </div>
    </div>
  );
}
