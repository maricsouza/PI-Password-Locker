'use client';

import React, { useEffect, useState } from "react";
import { CardPasswords, HeaderDashboard } from "@/components";
import style from "../dashboard/style.module.scss";
import { toast } from "react-toastify";
import { Password } from "@/services/endpoints/password";
import { useRouter } from "next/router";

const api = new Password()

export default function dashboard() {
  const router = useRouter()

  const [data, setData] = useState<RIPassword[]>([]);

  async function getAllPasswords () {
    try {
      const resp = await api.getPasswords();
      setData(resp);
    } catch(e: any) {
      toast.error(e.message)
    }
  }

  const handleRemovePassword = async(id: string) => {
    try {
      await api.deletePassword(id)
      await getAllPasswords()
    } catch(e: any) {
      toast.error(e.message)
    }
  }

  const handleChangePassword = (id: string) => {
    router.push(`/alterar-senha/${id}`)
  }

  useEffect(() => {
    getAllPasswords()
  }, [])

  return (
    <div>
      <div className={style.container}>
        <HeaderDashboard />
        {data.map((item)=>
          <CardPasswords passwordInfos={item} onRemove={() => handleRemovePassword(item.idSenha)} onUpdate={() => handleChangePassword(item.idSenha)}/>
        )}
      </div>
    </div>
  );
}
