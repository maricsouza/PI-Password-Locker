<<<<<<< HEAD
import {Header} from "@/components/Header";
import style from "./style.module.scss";
import {FullInput} from "@/components/FullInput";
import {Card} from "@/components/Card";

export function MeusDados() {

  
=======
import { Header, FullInput, Card} from "@/components";
import style from "./style.module.scss";
>>>>>>> a93d3c1a95dd74c0c6dcf06eaafd409d72ba8507

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
          action="M"
        />
      </div>
    </div>
  );
}
