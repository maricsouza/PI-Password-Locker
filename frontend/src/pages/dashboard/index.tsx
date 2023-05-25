import { HeaderDashboard } from "@/components";
import React, { useEffect } from "react";
import style from "../dashboard/style.module.scss";
import { Password } from "@/services/endpoints/password";

const api = new Password()

export default function dashboard() {

  

  async function getPasswords () {
    const resp = await api.getPasswords({id: process.env.NEXTJS_USERID });

    if (resp === undefined) {
      // TODO :: MENSAGEM DE ERRO
      console.log("erro ao buscar senhas do usuário")
      return
    }

    return resp;

  }

  useEffect(() => {
    getPasswords()
  },[])

  return (
    <div>
      <div className={style.container}>
        <HeaderDashboard />
      </div>
    </div>
  );
}
