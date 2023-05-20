import Header from "@/components/header"
import style from "./style.module.scss"
import FullInput from "@/components/full-input"
import { buttonTypes, sizes } from "@/styles/global.type"
import ButtonType from "@/components/Button"
import Card from "@/components/card"
import Button from "@/components/Button"

export default function AdicionarSenha () {
    return (
        <div className={style.container}>
            <Header title="Adicionar Senha" returnPage='/dashboard' />

            <div className={style.principalBox}>
                <div className={style.infoContainer}> 
                    <div>
                        <h1> Dados da senha </h1>
                        <hr />

                        <div className={style.box}>
                            <FullInput
                                inputTitle="Nome do site"
                            />
                            <FullInput
                                inputTitle="Nome do usuário do site (opcional)"
                            />
                        </div>

                        <div className={style.box}>
                            <FullInput
                                inputTitle="Nova senha"
                            />
                            <FullInput
                                inputTitle="Confirmar senha"
                            />
                        </div>
                    </div>

                    <div>
                        <h1> Gerar senha forte </h1>
                        <hr />

                        <div className={style.box2}>
                            <FullInput/>
                            <Button backgcolor="#0051D0" fontcolor="#FFF" typeofbutton="textButton" text="Gerar" fontsize="" size={sizes.large} onclick={ () => console.log('ok')}/>
                        </div>
                        

                    </div>
                </div>
                <Card cardFormat={1} text="Preencha os dados ao lado para criar senha." buttonText="Adicionar" />
            </div>
            

           
            
        </div>
    )
}