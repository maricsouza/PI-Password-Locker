import React from 'react'
import style from '../Button/style.module.scss'
import { TButton } from './styled';
import { EnumType } from 'typescript';
import { buttonTypes, sizes } from '@/styles/global.type';
import Image from "next/image"

export default function Button (props: ButtonType )  {

  return (
        <TButton {...props}> 

          {props.typeOfButton === 'textButton'
              ? props.text
              : <Image src={props.imagePath ?? ''} alt='Remover' />
          }
        
        </TButton>

  )
}
