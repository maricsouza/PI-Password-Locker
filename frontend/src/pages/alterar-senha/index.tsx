import { Header, FullInput, Card, GeneratePassword } from "@/components";
import style from "./style.module.scss";
import { useState } from "react";

export default function AlterarSenha() {
  const [website, setWebsite] = useState("");
  const [edit, setEdit] = useState(false);


  
  function saveChanges() {
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
              <FullInput
                inputtitle="Nome do site"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
              <FullInput inputtitle="Nome do usuário do site (opcional)" />
            </div>

            <div className={style.box}>
              <FullInput inputtitle="Nova senha" />
              <FullInput inputtitle="Confirmar senha" />
            </div>
          </div>

          <GeneratePassword />
        </div>
        <Card
          cardFormat={1}
          text="Preencha os dados ao lado para alterar senha."
          buttonText="Salvar"
          form={{ siteName: website }}
        />
      </div>
    </div>
  );
}
