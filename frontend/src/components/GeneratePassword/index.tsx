import style from "./style.module.scss";
import { FullInput, Button } from "@/components";
import { sizes } from "@/styles/global.type";
import { useState } from "react";

interface Props {
  value: string;
  onChange: (str: string) => void;
}

export function GeneratePassword(props: Props) {
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

    props.onChange(newPassword)
    setPassword(newPassword);
  }

  return (
    <div>
      <h1> Gerar senha forte </h1>
      <hr />
      <div className={style.box}>
        <FullInput
          value={props.value}
          onChange={() => passwordGenerator()}
          readOnly={true}
        />
        <Button
          backgcolor="#0051D0"
          fontcolor="#FFF"
          typeofbutton="textButton"
          text="Gerar"
          sizefont=""
          size={sizes.large}
          onClick={() => passwordGenerator()}
        />
      </div>
    </div>
  );
}
