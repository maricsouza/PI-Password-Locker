import React from "react";
import alertIcon from "../../../public/img/alertIcon.svg";
import { Button } from "../Button";
import { sizes } from "@/styles/global.type";
import style from "../InfoAlert/style.module.scss";

interface ContentInfoAlert {
  textAlert?: string;
}

export function InfoAlert(props: ContentInfoAlert) {
  return (
    <div>
      <div className={style.container}>
        <div className={style.icon}>
          <Button
            backgcolor="transparent"
            typeofbutton="imageButton"
            imagepath={alertIcon}
            size={sizes.xxxsmall}
          />
        </div>
        <div className={style.textAlert}> {props.textAlert} </div>
      </div>
    </div>
  );
}
