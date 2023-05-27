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

interface ContentHeaderDashboard {}

export function HeaderDashboard(props: ContentHeaderDashboard) {
  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.row1}>
            <div className={style.logo}>
              <ImageLogoVertical />
            </div>
            <div className={style.infoAlert}>
              <InfoAlert textAlert="Você tem 7 senhas não seguras" />
            </div>
            <div className={style.userPerfil}>
              <UserPerfil />
            </div>
          </div>
          <div className={style.row2}>
            <div className={style.typePassword}>
              <TypePasword text={"Senhas ao total"} quantify={12} />
              <TypePasword text={"Fora do padrão"} quantify={7} />
              <TypePasword text={"Dentro do padrão"} quantify={4} />
            </div>
            <div className={style.btnAdicionar}>
              <Link href={"/adicionar-senha"}>
                <button>
                  <Image src={add} alt="Botão adicionar"/>
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
