import style from "./style.module.scss";
import { Button, ViewPassword } from "@/components";
import view from "../../../public/img/view.svg";
import viewClose from "../../../public/img/viewClose.svg";
import edit from "../../../public/img/edit.svg";
import remove from "../../../public/img/trash.svg";
import { sizes } from "@/styles/global.type";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ReactModal from "react-modal";

interface CardProps {
  passwordInfos: RIPassword;
  onRemove: () => void;
  onUpdate: () => void;
}

export function CardPasswords(props: CardProps) {
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [showBalance, setShowBalance] = useState<boolean>(true);

  const date =
    props.passwordInfos.dataAlteracao?.toString() == null
      ? formatDate(props.passwordInfos.dataCriacao)
      : formatDate(props.passwordInfos.dataAlteracao);

  function formatDate(date: Array<number>) {
    return `${date[2]}/${date[1]}/${date[0]}`;
  }

  const toggleBalance = () => {
    setShowBalance(!showBalance);
  };

  function handleIsOpenDelete() {
    setIsOpenDelete(!isOpenDelete);
  }

  function deletePassword() {
    props.onRemove();
    handleIsOpenDelete();
  }

  return (
    <div className={style.container}>
      <div className={style.row}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            width: "200px",
          }}
        >
          <div className={style.number}>{1}</div>
          <div className={style.siteName}>{props.passwordInfos.titulo}</div>
        </div>
        <div className=""></div>
        <div className={style.ultimaAlter}>
          <div className={style.labelPassword}>Ultima alteração</div>
          {date}
        </div>

        <div>
          <div className={style.labelPassword}>Senha</div>
          <div className={style.password}>
            <ViewPassword
              isHide={showBalance}
              value={props.passwordInfos.senha}
            />
          </div>
        </div>

        <div className={style.buttons}>
          <div className={style.buttonView}>
            <Button
              backgcolor="#E1E3E5"
              fontcolor="#FFF"
              typeofbutton="imageButton"
              imagepath={showBalance ? view : viewClose}
              size={sizes.xxxsmall}
              onClick={toggleBalance}
            />
          </div>
          <div className={style.buttonRemove}>
            <Button
              backgcolor="#E1E3E5"
              fontcolor="#FFF"
              typeofbutton="imageButton"
              imagepath={remove}
              size={sizes.xxxsmall}
              onClick={() => handleIsOpenDelete()}
            />
          </div>
          <div className={style.buttonEdit}>
              <Button
                backgcolor="#E1E3E5"
                fontcolor="#FFF"
                typeofbutton="imageButton"
                imagepath={edit}
                size={sizes.xxxsmall}
                onClick={props.onUpdate}
              />
          </div>
        </div>
      </div>

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
              onClick={() => deletePassword()}
            >
              Excluir senha
            </button>
          </div>
        </div>
      </ReactModal>
    </div>
  );
}
