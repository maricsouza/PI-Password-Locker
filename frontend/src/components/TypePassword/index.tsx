import React from "react";
import style from "../TypePassword/style.module.scss";

interface ContentTypassword {
  text?: string;
  quantidade?: number;
}

export default function TypePasword(props: ContentTypassword) {
  return (
    <div>
      <div className={style.container}>
        <div className={style.quantidade}>{props.quantidade}</div>
        <p className={style.text}>{props.text}</p>
      </div>
    </div>
  );
}
