import React from 'react'
import style from '../Button/style.module.scss'
import { TButton } from './styled';
import { EnumType } from 'typescript';
import { buttonTypes, sizes } from '@/styles/global.type';
import Image from "next/image"

export default function Button (props: ButtonType )  {
  return (
        <TButton {...props} onClick={props.functiononclick}> 

          {props.typeofbutton === 'textButton'
              ? props.text
              : <Image src={props.imagepath ?? ''} alt='Remover' />
          }
        
        </TButton>

  )
}
