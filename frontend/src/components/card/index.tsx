import { sizes } from "@/styles/global.type";
import style from "./style.module.scss";
import remove from "../../../public/img/trash.svg";
import Image from "next/image";
import user from "../../../public/img/user.png";
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
  async function alterPassAccount (form: PassOrAccount) {
    if(form.interf === 'password') {
      if (form.password === undefined || form.siteName === undefined || form.confPassword === undefined) {
        // TODO :: MENSAGEM DE ERRO
        console.log("algum dos campos não foi preenchido");
        return
      }
  
      if(!form.password.match(form.confPassword)) {
        // TODO :: MENSAGEM DE ERRO
        console.log("senhas não batem");
        return
      }
  
      const res = await apiPassword.modifyPassword(form);
  
      if(res === undefined) {
        console.log("deu caca")
        return
      }


      console.log(res)

    } else {
      if (form.password === undefined || form.email === undefined || form.name === undefined || form.confPassword === undefined) {
        // TODO :: MENSAGEM DE ERRO
        console.log("algum dos campos não foi preenchido");
        return
      }
  
      if(!form.password.match(form.confPassword)) {
        // TODO :: MENSAGEM DE ERRO
        console.log("senhas não batem");
        return
      }
  
      const res = await apiAccount.modifyAccountData(form);
  
      if(res === undefined) {
        console.log("deu caca")
        return
      }

      console.log(res)
    }

    
  }

  return (
    <div className={style.container}>
      <Image alt="Usuario" src={user} />
      <p> {props.text} </p>
      {props.cardFormat == 1 ? (
        <div className={style.buttonBox}>
          <Button
            backgcolor="#36B236"
            fontcolor="#FFF"
            typeofbutton="textButton"
            text={props.buttonText}
            size={sizes.large}
            onClick={props.onConfirm}
          />
          <Button
            backgcolor="#E1E3E5"
            fontcolor="#FFF"
            typeofbutton="imageButton"
            imagepath={remove}
            size={sizes.xxxsmall}
            onClick={props.onDelete}
          />
        </div>
      ) : (
        <div className={style.buttonBoxF}>
          <Button
            backgcolor="#36B236"
            fontcolor="#FFF"
            typeofbutton="textButton"
            text={props.buttonText}
            size={sizes.larger}
            onClick={props.onConfirm}
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
