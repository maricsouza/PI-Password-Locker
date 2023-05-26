import React from "react";
import style from "../TypePassword/style.module.scss";

interface ContentTypassword {
  text?: string;
  quantify?: number;
}

export function TypePasword(props: ContentTypassword) {
  return (
    <div>
      <div className={style.container}>
        <div className={style.quantify}>{props.quantify}</div>
        <p className={style.text}>{props.text}</p>
      </div>
    </div>
  );
}
