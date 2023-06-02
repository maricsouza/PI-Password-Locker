import { sizes } from "@/styles/global.type";
import style from "./style.module.scss";
import remove from "../../../public/img/trash.svg";
import Image from "next/image";
import user from "../../../public/img/rick.jpg";
import { Button } from "@/components";
import { Password } from "@/services/endpoints/password";
import { Account } from "@/services/endpoints/account";

const apiPassword = new Password()
const apiAccount = new Account()


interface CardProps {
  cardFormat: number;
  text: string;
  buttonText: string;
  onConfirm: () => void;
  onDelete: () => void;
}

export function Card(props: CardProps) {

  return (
    <div className={style.container}>
      <Image style={{width:"130px", height:"100px", borderRadius:"500px"}} alt="Usuario" src={user} />
      <p> {props.text} </p>
      {props.cardFormat == 1 ? (
        <div className={style.buttonBox}>
          <Button
            backgcolor="#36B236"
            fontcolor="#FFF"
            typeofbutton="textButton"
            text={props.buttonText}
            onClick={props.onConfirm}
            size="14em"
          />
          <Button
            backgcolor="#E1E3E5"
            fontcolor="#FFF"
            typeofbutton="imageButton"
            imagepath={remove}
            onClick={props.onDelete}
            size="10em"
          />
        </div>
      ) : (
        <div className={style.buttonBoxF}>
          <Button
            backgcolor="#36B236"
            fontcolor="#FFF"
            typeofbutton="textButton"
            text={props.buttonText}
            onClick={props.onConfirm}
            size="20em"
          />
          <Button
            backgcolor="#FA3F38"
            fontcolor="#FFF"
            typeofbutton="textButton"
            text={"Excluir conta"}
            size={sizes.larger}
            onClick={props.onDelete}
          />
        </div>
      )}
    </div>
  );
}
