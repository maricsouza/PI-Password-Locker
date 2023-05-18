import React from 'react'
import style from '../Button/style.module.scss'
import { TButton } from './styled';
import { EnumType } from 'typescript';
import { buttonTypes, sizes } from '@/styles/global.type';
import Image from "next/image"

interface ContentButtonProps{
    typeOfButton: buttonTypes;
    text?:string;
    fontSize?: string;
    imagePath?: string;
    fontColor: string;
    backColor: string;
    size: string;
    onClick: () => void;
}


export default function ButtonType (props: ContentButtonProps )  {

  return (
        <TButton {...props} onClick={props.onClick}> 
          {props.typeOfButton == buttonTypes.textButton
              ? props.text
              : <Image src={props.imagePath ?? ''} alt='Remover' />
          }
        
        </TButton>

  )
}
