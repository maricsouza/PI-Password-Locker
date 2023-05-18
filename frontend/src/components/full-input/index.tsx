import style from './style.module.scss'

interface FullInputProps {
    inputTitle?: string;
    imageInput?: string;
    fullInput?: boolean;
}


export default function FullInput (props: FullInputProps) {
    return (
        <div className={style.container}>
            <h2 className={style.title}> {props.inputTitle} </h2>
            
            {!props.fullInput
                ? <input className={style.classInput} />
                : <input className={style.classFullInput} />
            }
        </div>
    )
}