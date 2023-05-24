import { Header, FullInput, Card, GeneratePassword } from "@/components";
import style from "./style.module.scss";

export default function AdicionarSenha() {
  return (
    <div className={style.container}>
      <Header title="Adicionar Senha" returnPage="/dashboard" />

      <div className={style.principalBox}>
        <div className={style.infoContainer}>
          <div>
            <h1> Dados da senha </h1>
            <hr />

            <div className={style.box}>
              <FullInput inputtitle="Nome do site" />
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
          text="Preencha os dados ao lado para criar senha."
          buttonText="Adicionar"
        />
      </div>
    </div>
  );
}
