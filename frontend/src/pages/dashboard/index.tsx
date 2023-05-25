import { CardPasswords, HeaderDashboard } from "@/components";
import React from "react";
import style from "../dashboard/style.module.scss";

export default function dashboard() {

  const DATA = [
    {
      number: 1,
      name: "Facebook",
      password: "**************",
      ultimaAlter:"12/02/2023",
      btnStatus:"Fraco",
    },
    {
      number: 2,
      name: "Bradesco",
      password: "**************",
      
      ultimaAlter:"12/02/2023",
    },
    {
      number: 3,
      name: "Senac",
      password: "**************",
      
      ultimaAlter:"12/02/2023",
     
    },
    {
      number: 4,
      name: "Instagram",
      password: "*",
      
      ultimaAlter:"12/02/2023",
     
    },
    {
      number: 5,
      name: "Los Hermanos",
      password: "*****",
      
      ultimaAlter:"12/02/2023",
     
    },
    {
      number: 6,
      name: "Pinterest",
      password: "**************",
      
      ultimaAlter:"12/02/2023",
     
    },
  ]
  return (
    <div>
      <div className={style.container}>
        <HeaderDashboard />
        {DATA.map((item)=>
          <CardPasswords number={item.number} name={item.name} ultimaAlter={item.ultimaAlter} password={item.password} />
        )}
      </div>
    </div>
  );
}
