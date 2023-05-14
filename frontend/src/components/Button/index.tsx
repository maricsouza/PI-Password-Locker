import React from 'react'
import style from '../Button/style.module.scss'
import { TButton } from './styled';
import { EnumType } from 'typescript';
import { buttonTypes, sizes } from '@/styles/global.type';

interface ContentButtonProps{
    typeOfButton: buttonTypes;
    text?:string;
    fontSize?: string;
    imagePath?: string;
    fontColor: string;
    backColor: string;
    size: string;
}


export default function ButtonType (props: ContentButtonProps )  {

  return (
        <TButton {...props}> 
          {props.typeOfButton == buttonTypes.textButton
              ? props.text
              : <img src={`${props.imagePath}`}></img>
          }
        
        </TButton>
  )
}
