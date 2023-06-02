import { useState } from "react";
import ReactModal from "react-modal";
import style from "./style.module.scss";
import remove from "../../../public/img/trash.svg";
import Image from "next/image";
interface ModalProps{
    title: string;
    subtitle: string;
    buttonTextOP1: string;
    buttonTextOP2: string;  
    onRemove: () => void;
    onUpdate?: () => void;
}


export default function ModalDelete (props: ModalProps) {

    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [showBalance, setShowBalance] = useState<boolean>(true);
  
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
        <>
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
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
          </div>
          <div className={style.buttonModal}>
            <button
              className={style.voltarButtonDelete}
              onClick={() => handleIsOpenDelete()}
            >
              {props.buttonTextOP1}
            </button>
            <button
              className={style.deleteButton}
              onClick={() => deletePassword()}
            >
              {props.buttonTextOP2}
            </button>
          </div>
        </div>
      </ReactModal>
        </>
    )
}