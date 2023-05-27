import React from "react";
import user from "../../../public/img/user.png";
import style from "../UserPerfil/style.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useAppSelector } from "@/hooks/reduxHooks";

interface ContentUserPerfil {
  name: string;
}


export function UserPerfil() {
  const selector = useAppSelector(state => state.user)
  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.info}>
            <p className={style.name}> n retorna da api kk foda </p>
            <Link className={style.linkPerfil} href={"/meus-dados"}>Ver perfil</Link>
          </div>
          <div className={style.imageUser}>
            <Image src={user} alt={"Imagem de usuario"} />
          </div>
        </div>
      </div>
    </>
  );
}
