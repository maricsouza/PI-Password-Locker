import React from "react";
import style from "../HeaderDashboard/style.module.scss";
import {
  Button,
  ImageLogoVertical,
  InfoAlert,
  TypePasword,
  UserPerfil,
} from "@/components";
import Link from "next/link";

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
              <Button
                typeofbutton="textButton"
                text="Adicionar nova senha"
                size="350px"
              /></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
