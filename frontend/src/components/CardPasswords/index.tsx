import style from "./style.module.scss";
import { Button, ButtonStatus } from "@/components";
import view from "../../../public/img/view.svg";
import edit from "../../../public/img/edit.svg";
import remove from "../../../public/img/trash.svg";
import { sizes } from "@/styles/global.type";

interface CardProps {
  number: number;
  name: string;
  ultimaAlter: any;
  password: string;
  fontcolor?:string;
}

export function CardPasswords(props: CardProps) {
  return (
    <div className={style.container}>
      <div className={style.row}>
        <div style={{display:'flex', flexDirection:'row', gap:10, width:'200px'}}>
        <div className={style.number}>{props.number}</div>
        <div className={style.siteName}>{props.name}</div>
        </div>

        <div className={style.ultimaAlter}>
        <div className={style.labelPassword}>Ultima alteração</div>
          {props.ultimaAlter}
        </div>

        <div>
          <div className={style.labelPassword}>Senha</div>
          <div className={style.password}>{props.password}</div>
        </div>

        <div className={style.buttons}>
          <div className={style.buttonView}>
            <Button
              backgcolor="#E1E3E5"
              fontcolor="#FFF"
              typeofbutton="imageButton"
              imagepath={view}
              size={sizes.xxxsmall}
            />
          </div>
          <div className={style.buttonRemove}>
            <Button
              backgcolor="#E1E3E5"
              fontcolor="#FFF"
              typeofbutton="imageButton"
              imagepath={remove}
              size={sizes.xxxsmall}
            />
          </div>
          <div className={style.buttonEdit}>
            <Button
              backgcolor="#E1E3E5"
              fontcolor="#FFF"
              typeofbutton="imageButton"
              imagepath={edit}
              size={sizes.xxxsmall}
            />
          </div>
        </div>
        </div>
    </div>
  );
}
