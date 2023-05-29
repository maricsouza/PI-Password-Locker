import React from "react";
import user from "../../../public/img/rick.jpg";
import style from "../UserPerfil/style.module.scss";
import Image from "next/image";
import Link from "next/link";

interface ContentUserPerfil {
  user: RIAccount | undefined;
}

export function UserPerfil(props: ContentUserPerfil) {
  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.info}>
            <p className={style.name}>{props.user?.nome}</p>
            <Link className={style.linkPerfil} href={"/meus-dados"}>
              Ver perfil
            </Link>
          </div>
          <Link href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"} target="_blank">
          <div className={style.imageUser}>
            <Image
              className={style.imgUser}
              src={user}
              alt={"Imagem de usuario"}
            />
          </div>
          </Link>
        </div>
      </div>
    </>
  );
}
