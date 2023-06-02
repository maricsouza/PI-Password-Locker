"use client";

import React, { useCallback, useEffect, useState } from "react";
import { CardPasswords, HeaderDashboard } from "@/components";
import style from "../dashboard/style.module.scss";
import { toast } from "react-toastify";
import { Password } from "@/services/endpoints/password";
import { useRouter } from "next/router";
import { Account } from "@/services/endpoints/account";

const apiPasswords = new Password();
const apiAccount = new Account();

export default function dashboard() {
  const router = useRouter();

  const [data, setData] = useState<RIPassword[]>([]);
  const [user, setUser] = useState<RIAccount>();


  
  async function getAllPasswords() {
    try {
      const resp = await apiPasswords.getPasswords();
      setData(resp);
    } catch (e: any) {
      toast.error(e.message);
    }
  }

  async function getUser() {
    try {
      const resp:RIAccount = await apiAccount.getAccountById();
      setUser(resp);
    } catch (e: any) {
      toast.error("Ocorreu um erro pra pegar o user");
    }
  }

  const handleRemovePassword = async (id: string) => {
    try {
      await apiPasswords.deletePassword(id);
      await getAllPasswords();

    } catch (e: any) {
      toast.error(e.message);
    }
  };

  const handleChangePassword = (id: string) => {

    if(id === undefined) {
      return;
    }

    console.log(id);
    
    router.push({
      pathname: '/alterar-senha',
      

    });
  };

  useEffect(() => {

    getAllPasswords();
    getUser();
  }, []);

  return (
    <div className={style.containerMax}>
      <div className={style.container}>
        <HeaderDashboard passwords={data.map((x) => x.senha)} user={user}/>
        {data.map((item) => (
          <CardPasswords
            passwordInfos={item}
            onRemove={() => handleRemovePassword(item.idSenha)}
            onUpdate={() => handleChangePassword(item.idSenha)}
          />
        ))}
      </div>
    </div>
  );
}
