import { useState } from 'react';
import style from './style.module.scss'
import { InputType } from './styled';

interface FullInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    inputTitle?: string;
    imageInput?: string;
    fullInput?: boolean;
}


export default function FullInput (props: FullInputProps) {

    return (
        <div className={style.container}>
            <h2 className={style.title}> {props.inputTitle} </h2>
            <InputType {...props}/>
        </div>
    )
}