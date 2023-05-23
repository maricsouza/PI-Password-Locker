import Header from "@/components/header";
import style from "./style.module.scss";
import FullInput from "@/components/full-input";
import Card from "@/components/card";
import GeneratePassword from "@/components/GeneratePassword";
import { useState } from "react";

export default function AlterarSenha() {

  const [website, setWebsite] = useState('');

  function saveChanges () {
      console.log(website);
  }

  return (
    <div className={style.container}>
      <Header title="Alterar Senha" returnPage="/dashboard" />

      <div className={style.principalBox}>
        <div className={style.infoContainer}>
          <div>
            <h1> Alterar senha </h1>
            <hr />

            <div className={style.box}>
              <FullInput inputTitle="Nome do site" value={website} onChange={(e) => setWebsite(e.target.value)}/>
              <FullInput inputTitle="Nome do usuário do site (opcional)" />
            </div>

            <div className={style.box}>
              <FullInput inputTitle="Nova senha" />
              <FullInput inputTitle="Confirmar senha" />
            </div>
          </div>

          <GeneratePassword />
        </div>
        <Card
          cardFormat={1}
          text="Preencha os dados ao lado para alterar senha."
          buttonText="Salvar"
          form={{siteName: website}}
        />
      </div>
    </div>
  );
}
