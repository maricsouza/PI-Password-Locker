import React, { Attributes } from 'react'
import style from '../Input/styles.module.scss'

interface contentLabel {
  content?: string;
  fontsize?: string;
  type?: string;
  largura?: string;
}

export default function Input(props: contentLabel ) {
  
  return (
   <div {...props}>
    <div className={style.container}>
      <label className={style.label} >{props.content}</label>
      <input className={style.input} type={props.type} style={{width: props.largura, fontSize: props.fontsize}}/>
    </div>
   </div>
  )
}
