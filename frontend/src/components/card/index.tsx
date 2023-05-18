import { buttonTypes, sizes } from "@/styles/global.type";
import ButtonType from "../Button";
import style from './style.module.scss'
import remove from '../../../public/img/trash.svg'
import Image from "next/image";
import user from '../../../public/img/user.png'

interface CardProps {
    cardFormat: number
    text: string;
    buttonText: string;
}

export default function Card (props: CardProps) {
    return (
        <div className={style.container}>
            <Image alt="Usuario" src={user} />
            <p> {props.text} </p>
            {props.cardFormat == 1
                ? <div className={style.buttonBox}>
                    <ButtonType backColor="#36B236" fontColor="#FFF" typeOfButton={buttonTypes.textButton} text={props.buttonText} size={sizes.large}/>
                    <ButtonType backColor="#E1E3E5" fontColor="#FFF" typeOfButton={buttonTypes.imageButton} imagePath={remove} size={sizes.xxxsmall}/>
                  </div>

                : <div className={style.buttonBoxF}>
                    <ButtonType backColor="#36B236" fontColor="#FFF" typeOfButton={buttonTypes.textButton} text={props.buttonText} size={sizes.larger}/>
                     <ButtonType backColor="#FA3F38" fontColor="#FFF" typeOfButton={buttonTypes.textButton} text={'Excluir conta'} size={sizes.larger}/>
                  </div>
            
            }
        </div>
    )
}