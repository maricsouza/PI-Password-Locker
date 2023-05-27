import React from "react";
import style from "../HeaderDashboard/style.module.scss";
import add from "../../../public/img/add.svg";
import {
  Button,
  ImageLogoVertical,
  InfoAlert,
  TypePasword,
  UserPerfil,
} from "@/components";
import Link from "next/link";
import Image from "next/image";

interface ContentHeaderDashboard {
  passwords: Array<string>;
  user: RIAccount | undefined;
}

export function HeaderDashboard(props: ContentHeaderDashboard) {
  function getPasswordsQuantity() {
    return props.passwords.length;
  }

  function getSecurePasswordsQuantity() {
    const strongPasswords = [];

    props.passwords.forEach(element => {
      const securityLevel = passwordSecurityLevel(element);

      if(securityLevel == "strong"){
        strongPasswords.push(element);
      }
    });

    return strongPasswords.length
  }

  function getNotSecurePasswordsQuantity(){
    return props.passwords.length - getSecurePasswordsQuantity();
  }

  function passwordSecurityLevel(password: string) {
    var strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var mediumRegex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
  
    if (strongRegex.test(password)) {
      return "strong";
    } else if (mediumRegex.test(password)) {
      return "medium";
    } else {
      return "low";
    }
  }

  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.row1}>
            <div className={style.logo}>
              <ImageLogoVertical />
            </div>
            <div className={style.infoAlert}>
              <InfoAlert textAlert={`Você tem ${getNotSecurePasswordsQuantity()} senhas não seguras`} />
            </div>
            <div className={style.userPerfil}>
              <UserPerfil user={props.user}/>
            </div>
          </div>
          <div className={style.row2}>
            <div className={style.typePassword}>
              <TypePasword
                text={"Senhas ao total"}
                quantify={getPasswordsQuantity()}
              />
              <TypePasword text={"Fora do padrão"} quantify={getNotSecurePasswordsQuantity()} />
              <TypePasword text={"Dentro do padrão"} quantify={getSecurePasswordsQuantity()} />
            </div>
            <div className={style.btnAdicionar}>
              <Link href={"/adicionar-senha"}>
                <button>
                  <Image src={add} alt="Botão adicionar" />
                  Adicionar nova senha
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
