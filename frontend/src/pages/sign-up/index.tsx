import React, { useState } from "react";
import style from "../siginUp/style.module.scss";
import Link from "next/link";
import { Input, ImageWithLogo, Button } from "@/components";
import { Account } from "@/services/endpoints/account";

const api = new Account()

export default function SiginUp() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [confirmedPassword, setConfirmedPassword] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  async function signUp (name: string, email: string, pass: string, confirmPass: string, phone: string) {

    if (name === undefined || email === undefined || pass === undefined || confirmPass === undefined || phone === undefined) {
      // TODO :: MENSAGEM DE ERRO
      console.log("algum dos campos não foi preenchido");
      return
    }

    if(!pass.match(confirmPass)) {
      // TODO :: MENSAGEM DE ERRO
      console.log("senhas não batem");
    }

    const resp = await api.createAccount({name: name, password: pass, email: email, phoneNumber: phone});

    console.log(resp);
  }


  return (
    <div className={style.container}>
      <div className={style.forms}>
        <div className={style.imgLogo}>
          <ImageWithLogo largura="320px" />
        </div>
        <div className={style.colun1}>
          <Input content={"Nome "} value={name} onChange={(e) => setName(e.target.value)}/>
          <Input content={"Telefone"} type="number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
        <div className={style.colun2}>
          <Input content={"Email"} largura={"820px"} type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className={style.colun3}>
          <Input content={"Senha"} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Input content={"Confirmar Senha"} type="password" value={confirmedPassword} onChange={(e) => setConfirmedPassword(e.target.value)}/>
        </div>
        <div className={style.btnCadastrar}>
          <Button text={"Cadastrar"} size="500px" typeofbutton="textButton" onClick={() => signUp(name, email, password, confirmedPassword, phoneNumber)}/>
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
