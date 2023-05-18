import React from 'react'
import style from '../InfoAlert/style.module.scss'

interface ContentInfoAlert{
    textAlert?: string;   
    icon?: any;
}

export default function InfoAlert(props: ContentInfoAlert) {
    return (
      <div>
        <div className={style.container}>
            <div className={style.icon}>
                {props.icon}
            </div>
            <div className={style.textAlert}> {props.textAlert} </div>
        </div>
      </div>
    )
}

