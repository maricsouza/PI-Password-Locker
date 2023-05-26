import React from 'react'

interface viewProps{
    value: String;
    isHide: Boolean;
}

export function ViewPassword(props: viewProps) {
    return (
      <p>{props.isHide ? '••••••••••••' : props.value}</p>
    )
}
