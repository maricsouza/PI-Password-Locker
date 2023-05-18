import { useState } from 'react';
import style from './style.module.scss'

interface FullInputProps {
    inputTitle?: string;
    imageInput?: string;
    fullInput?: boolean;
}


export default function FullInput (props: FullInputProps) {
    const [input, setInput] = useState('');

    return (
        <div className={style.container}>
            <h2 className={style.title}> {props.inputTitle} </h2>
            
            {!props.fullInput
                ? <input className={style.classInput} value={input} onChange={e => setInput(e.target.value)}/>
                : <input className={style.classFullInput} value={input} onChange={e => setInput(e.target.value)} />
            }
        </div>
    )
}