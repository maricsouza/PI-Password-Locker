import style from './style.module.scss'

interface FullInputProps {
    inputTitle?: string;
    imageInput?: string
}


export default function FullInput (props: FullInputProps) {
    return (
        <div className={style.container}>
            <h2 className={style.title}> {props.inputTitle} </h2>
            <input className={style.classInput} />
        </div>
    )
}