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
                    <Button backgcolor="#36B236" fontcolor="#FFF" typeofbutton="textButton" text={props.buttonText} size={sizes.large} onclick={ () => console.log('ok')}/>
                    <Button backgcolor="#E1E3E5" fontcolor="#FFF" typeofbutton="imageButton" imagepath={remove} size={sizes.xxxsmall} onclick={ () => console.log('ok')}/>
                  </div>

                : <div className={style.buttonBoxF}>
                    <Button backgcolor="#36B236" fontcolor="#FFF" typeofbutton="textButton" text={props.buttonText} size={sizes.larger} onclick={ () => console.log('ok')}/>
                     <Button backgcolor="#FA3F38" fontcolor="#FFF" typeofbutton="textButton" text={'Excluir conta'} size={sizes.larger} onclick={ () => console.log('ok')}/>
                  </div>
            
            }
        </div>
    )
}