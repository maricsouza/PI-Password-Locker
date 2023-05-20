import Header from "@/components/header"
import style from "./style.module.scss"
import FullInput from "@/components/full-input"
import { buttonTypes, sizes } from "@/styles/global.type"
import ButtonType from "@/components/Button"
import Card from "@/components/card"


export default function AlterarSenha () {
    return (
        <div className={style.container}>
            <Header title="Meus Dados" returnPage='/dashboard' />

            <div className={style.principalBox}>
                <div className={style.infoContainer}> 
                    <div>
                        <h1> Meus Dados </h1>
                        <hr />

                        <div className={style.box}>
                            <FullInput
                                inputTitle="Nome"
                                fullInput={true}
                            />
                            <FullInput
                                inputTitle="Email"
                                fullInput={true}
                            />
                        </div>

                        <div className={style.box2}>
                            <FullInput
                                inputTitle="Nova senha"
                            />
                            <FullInput
                                inputTitle="Confirmar senha"
                            />
                        </div>

                            <FullInput inputTitle="Telefone"/>
                        
                    </div>

                    
                </div>
                <Card cardFormat={2} text="Preencha os dados ao lado para alterar senha." buttonText="Salvar" />
            </div>
            

           
            
        </div>
    )
}