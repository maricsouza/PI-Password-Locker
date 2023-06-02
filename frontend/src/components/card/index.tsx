import { sizes } from "@/styles/global.type";
import style from "./style.module.scss";
import remove from "../../../public/img/trash.svg";
import Image from "next/image";
import user from "../../../public/img/rick.jpg";
import { Button } from "@/components";
import { Password } from "@/services/endpoints/password";
import { Account } from "@/services/endpoints/account";
import ReactModal from "react-modal";
import { useState } from "react";

const apiPassword = new Password();
const apiAccount = new Account();

interface CardProps {
  cardFormat: number;
  text: string;
  buttonText: string;
  onConfirm: () => void;
  onDelete: () => void;
}

export function Card(props: CardProps) {
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenDeleteAccount, setIsOpenDeleteAccount] = useState(false);

  function handleisOpenDeleteAccount() {
    setIsOpenDeleteAccount(!isOpenDeleteAccount);
  }

  function handleIsOpenDelete() {
    setIsOpenDelete(!isOpenDelete);
  }

  function deletePassword() {
    props.onDelete;
    handleIsOpenDelete();
  }

  function deleteAccount() {
    props.onDelete;
    handleisOpenDeleteAccount();
  }

  return (
    <div className={style.container}>
      <Image
        style={{ width: "100px", height: "100px", borderRadius: "500px" }}
        alt="Usuario"
        src={user}
      />
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
            onClick={deletePassword}
            size={sizes.xxsmall}
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
            size={sizes.larger}
          />
          <Button
            backgcolor="#FA3F38"
            fontcolor="#FFF"
            typeofbutton="textButton"
            text={"Excluir conta"}
            size={sizes.larger}
            onClick={deleteAccount}
          />
        </div>
      )}
      <ReactModal
        isOpen={isOpenDelete}
        onRequestClose={handleIsOpenDelete}
        shouldCloseOnOverlayClick
        style={{
          overlay: {
            backgroundColor: "rgb(62 62 62 / 75%)",
          },
          content: {
            width: 450,
            height: 300,
            margin: "auto",
            borderRadius: "10px",
            border: "none",
          },
        }}
      >
        <div className={style.modalContainerDelete}>
          <Image
            style={{
              width: "100%",
            }}
            className={style.imgTrash}
            src={remove}
            alt="lixeira"
          />
          <div className={style.contentModal}>
            <h1>Excluir senha</h1>
            <p>Quer mesmo excluir essa senha? Ela será apagada pra sempre.</p>
          </div>
          <div className={style.buttonModal}>
            <button
              className={style.voltarButtonDelete}
              onClick={() => handleIsOpenDelete()}
            >
              Cancelar
            </button>
            <button
              className={style.deleteButton}
              onClick={props.onDelete}
            >
              Excluir senha
            </button>
          </div>
        </div>
      </ReactModal>

      <ReactModal
        isOpen={isOpenDeleteAccount}
        onRequestClose={handleisOpenDeleteAccount}
        shouldCloseOnOverlayClick
        style={{
          overlay: {
            backgroundColor: "rgb(62 62 62 / 75%)",
          },
          content: {
            width: 450,
            height: 300,
            margin: "auto",
            borderRadius: "10px",
            border: "none",
          },
        }}
      >
        <div className={style.modalContainerDelete}>
          <Image
            style={{
              width: "100%",
            }}
            className={style.imgTrash}
            src={remove}
            alt="lixeira"
          />
          <div className={style.contentModal}>
            <h1>Excluir Conta</h1>
            <p>Quer mesmo excluir sua conta? Ela será apagada pra sempre.</p>
          </div>
          <div className={style.buttonModal}>
            <button
              className={style.voltarButtonDelete}
              onClick={() => handleisOpenDeleteAccount()}
            >
              Cancelar
            </button>
            <button
              className={style.deleteButton}
              onClick={props.onDelete}
            >
              Excluir Conta
            </button>
          </div>
        </div>
      </ReactModal>
    </div>
  );
}
