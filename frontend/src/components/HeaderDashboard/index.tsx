import React from "react";
import style from "../HeaderDashboard/style.module.scss";
import ImageLogoVertical from "../ImageLogoVertical";
import TypePasword from "../TypePassword";
import Button from "../Button";
import InfoAlert from "../InfoAlert";

interface ContentHeaderDashboard {}

export default function HeaderDashboard(props: ContentHeaderDashboard) {
  return (
    <div>
      <div className={style.container}>
        <div className={style.contentInfo}>
          <div className={style.rowUp}>
            <div className={style.imgLogo}>
              <ImageLogoVertical largura="260px" />
            </div>
            <div className={style.textAlert}>
              <InfoAlert textAlert="Você tem 7 senhas fora do padrão de segurança" />
            </div>
          </div>
          <div className={style.rowDown}>
            <div className={style.types}>
              <TypePasword text="Senhas ao total" quantidade={12} />
              <TypePasword text="Fora do padrão" quantidade={7} />
              <TypePasword text="Dentro do padrão" quantidade={4} />
            </div>
            <div className={style.btnAdd}>
              <Button text="Adicionar nova senha" largura="300px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
