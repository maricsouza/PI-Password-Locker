import React from 'react'
import style from '../Button/style.module.scss'

interface ContentButton{
    text?:string;
    fontSize?: string;
    type?: string;
    largura?: string;
}

export default function Button(props: ContentButton )  {

  return (
    <div {...props}>
        <button className={style.btn} style={{width: props.largura}}> {props.text} </button>
    </div>
  )
}
