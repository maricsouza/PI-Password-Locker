import React, { useEffect, useState } from "react";
import { CardPasswords, HeaderDashboard } from "@/components";
import style from "../dashboard/style.module.scss";
import { Password } from "@/services/endpoints/password";


const api = new Password()

export default function dashboard() {

  const [data, setData] = useState<RIPassword[]>([]);

  async function getAllPasswords () {
    const resp = await api.getPasswords();

    if (resp === undefined) {
      // TODO :: MENSAGEM DE ERRO
      console.log("erro ao buscar senhas do usuário")
      return
    }

    setData(resp);

  }

  useEffect(() => {
    getAllPasswords()
  },[])

  // const DATA = [
  //   {
  //     number: 1,
  //     name: "Facebook",
  //     password: "**************",
  //     ultimaAlter:"12/02/2023",
  //     btnStatus:"Fraco",
  //   },
  //   {
  //     number: 2,
  //     name: "Bradesco",
  //     password: "**************",
      
  //     ultimaAlter:"12/02/2023",
  //   },
  //   {
  //     number: 3,
  //     name: "Senac",
  //     password: "**************",
      
  //     ultimaAlter:"12/02/2023",
     
  //   },
  //   {
  //     number: 4,
  //     name: "Instagram",
  //     password: "*",
      
  //     ultimaAlter:"12/02/2023",
     
  //   },
  //   {
  //     number: 5,
  //     name: "Los Hermanos",
  //     password: "*****",
      
  //     ultimaAlter:"12/02/2023",
     
  //   },
  //   {
  //     number: 6,
  //     name: "Pinterest",
  //     password: "**************",
      
  //     ultimaAlter:"12/02/2023",
     
  //   },
  // ]
  return (
    <div>
      <div className={style.container}>
        <HeaderDashboard />
        {data.map((item)=>
          <CardPasswords number={+item.id} name={item.siteName ?? ''} ultimaAlter={item.lastChange ?? ''} password={item.password ?? ''} />
        )}
      </div>
    </div>
  );
}
