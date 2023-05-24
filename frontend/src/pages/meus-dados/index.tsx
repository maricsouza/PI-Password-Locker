import Header from "@/components/Header";
import style from "./style.module.scss";
import FullInput from "@/components/FullInput";
import Card from "@/components/Card";

export default function AlterarSenha() {
  return (
    <div className={style.container}>
      <Header title="Meus Dados" returnPage="/dashboard" />

      <div className={style.principalBox}>
        <div className={style.infoContainer}>
          <div>
            <h1> Meus Dados </h1>
            <hr />

            <div className={style.box}>
              <FullInput inputtitle="Nome" fullInput={true} />
              <FullInput inputtitle="Email" fullInput={true} />
            </div>

            <div className={style.box2}>
              <FullInput inputtitle="Nova senha" />
              <FullInput inputtitle="Confirmar senha" />
            </div>

            <FullInput inputtitle="Telefone" />
          </div>
        </div>
        <Card
          cardFormat={2}
          text="Preencha os dados ao lado para alterar senha."
          buttonText="Salvar"
        />
      </div>
    </div>
  );
}
