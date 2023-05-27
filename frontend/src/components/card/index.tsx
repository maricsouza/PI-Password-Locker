import { sizes } from "@/styles/global.type";
import style from "./style.module.scss";
import remove from "../../../public/img/trash.svg";
import Image from "next/image";
import user from "../../../public/img/user.png";
import { Button } from "@/components";

interface CardProps {
  cardFormat: number;
  text: string;
  buttonText: string;
  form?: IPassword;
}

export function Card(props: CardProps) {
  function saveChanges() {
    console.log(props.form);
  }

  return (
    <div className={style.container}>
      <Image style={{width:"130px", height:"100px"}} alt="Usuario" src={user} />
      <p> {props.text} </p>
      {props.cardFormat == 1 ? (
        <div className={style.buttonBox}>
          <Button
            backgcolor="#36B236"
            fontcolor="#FFF"
            typeofbutton="textButton"
            text={props.buttonText}
            size="14em"
            onClick={saveChanges}
          />
          <Button
            backgcolor="#E1E3E5"
            fontcolor="#FFF"
            typeofbutton="imageButton"
            imagepath={remove}
            size="10em"
            onClick={saveChanges}
          />
        </div>
      ) : (
        <div className={style.buttonBoxF}>
          <Button
            backgcolor="#36B236"
            fontcolor="#FFF"
            typeofbutton="textButton"
            text={props.buttonText}
            size="20em"
            onClick={saveChanges}
          />
          <Button
            backgcolor="#FA3F38"
            fontcolor="#FFF"
            typeofbutton="textButton"
            text={"Excluir conta"}
            size={sizes.larger}
            onClick={saveChanges}
          />
        </div>
      )}
    </div>
  );
}
