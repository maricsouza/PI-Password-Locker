import style from "./style.module.scss";
import FullInput from "@/components/full-input";
import Button from "@/components/Button";
import { sizes } from "@/styles/global.type";
import { useState } from "react";

export default function GeneratePassword() {
  const [password, setPassword] = useState("");

  function passwordGenerator() {
    const length = 16;
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%&*()_+?{}[]^~:;<>";
    charset += numbers;
    charset += symbols;

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += charset[Math.floor(Math.random() * charset.length)];
    }

    setPassword(newPassword);
    console.log(password);
  }

  return (
    <div>
      <h1> Gerar senha forte </h1>
      <hr />
      <div className={style.box}>
        <FullInput />
        <Button
          backgcolor="#0051D0"
          fontcolor="#FFF"
          typeofbutton="textButton"
          text="Gerar"
          fontsize=""
          size={sizes.large}
          onclick={() => passwordGenerator()}
        />
      </div>
    </div>
  );
}
