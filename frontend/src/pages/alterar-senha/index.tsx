import Header from "@/components/header"
import style from "./style.module.scss"
import FullInput from "@/components/full-input"
import { buttonTypes, sizes } from "@/styles/global.type"
import ButtonType from "@/components/Button"


export default function AlterarSenha () {
    return (
        <div className={style.container}>
            <Header title="Alterar Senha" returnPage="login" />

            <div className={style.infoContainer}> 
                <div>
                    <h1> Alterar senha </h1>
                    <hr />

                    <div className={style.box}>
                        <FullInput
                            inputTitle="Nome do site"
                        />
                        <FullInput
                            inputTitle="Nome do site"
                        />
                    </div>

                    <div className={style.box}>
                        <FullInput
                            inputTitle="Nome do site"
                        />
                        <FullInput
                            inputTitle="Nome do site"
                        />
                    </div>
                </div>

                <div>
                    <h1> Gerar senha forte </h1>
                    <hr />

                    <div className={style.box2}>
                        <FullInput/>
                        <ButtonType backColor="#0051D0" fontColor="#FFF" typeOfButton={buttonTypes.textButton} text="Gerar" fontSize="" size={sizes.small}/>
                    </div>
                    

                </div>
            </div>
            
        </div>
    )
}