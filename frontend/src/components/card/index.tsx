import { buttonTypes, sizes } from "@/styles/global.type";
import style from './style.module.scss'
import remove from '../../../public/img/trash.svg'
import Image from "next/image";
import user from '../../../public/img/user.png'
import Button from "../Button";

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
                    <Button backgColor="#36B236" fontColor="#FFF" typeOfButton="textButton" text={props.buttonText} size={sizes.large} onClick={ () => console.log('ok')}/>
                    <Button backgColor="#E1E3E5" fontColor="#FFF" typeOfButton="imageButton" imagePath={remove} size={sizes.xxxsmall} onClick={ () => console.log('ok')}/>
                  </div>

                : <div className={style.buttonBoxF}>
                    <Button backgColor="#36B236" fontColor="#FFF" typeOfButton="textButton" text={props.buttonText} size={sizes.larger} onClick={ () => console.log('ok')}/>
                     <Button backgColor="#FA3F38" fontColor="#FFF" typeOfButton="textButton" text={'Excluir conta'} size={sizes.larger} onClick={ () => console.log('ok')}/>
                  </div>
            
            }
        </div>
    )
}