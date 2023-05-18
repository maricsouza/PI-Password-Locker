import Arrow from '../arrow'
import style from './style.module.scss'
import Link from 'next/link';


interface HeaderProps {
    title: string;
    returnPage: string
}

export default function Header (props: HeaderProps) {
    return (
        <div className={style.container}>
                <div className={style.secontainer}>
                    <div className={style.centralized}> <Arrow returningPage={props.returnPage} /> </div>
                    <p className={style.title}> {props.title} </p>
                </div>
               
        </div>
    )
}