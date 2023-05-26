import { Header, FullInput, Card, GeneratePassword } from "@/components";
import style from "./style.module.scss";
import { useState } from "react";

export default function AlterarSenha() {
  const [website, setWebsite] = useState("");
  const [user, setUser] = useState("");
  const [password,setPassword] = useState("");
  const [confirmedPassword,setConfirmedPassword] = useState("");


  return (
    <div className={style.container}>
      <Header title="Alterar Senha" returnPage="/dashboard" />

      <div className={style.principalBox}>
        <div className={style.infoContainer}>
          <div>
            <h1> Alterar senha </h1>
            <hr />

            <div className={style.box}>
              <FullInput
                inputtitle="Nome do site"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
              <FullInput inputtitle=
                "Nome do usuário do site (opcional)" 
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </div>

            <div className={style.box}>
              <FullInput 
                inputtitle="Nova senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FullInput 
                inputtitle="Confirmar senha"
                value={confirmedPassword}
                onChange={(e) => setConfirmedPassword(e.target.value)}
              />
            </div>
          </div>

          <GeneratePassword />
        </div>
        <Card
          cardFormat={1}
          text="Preencha os dados ao lado para alterar senha."
          buttonText="Salvar"
          action="M"
          form={{siteName: website, siteUsername: user, password: password, interf:"password"}}
        />
      </div>
    </div>
  );
}
