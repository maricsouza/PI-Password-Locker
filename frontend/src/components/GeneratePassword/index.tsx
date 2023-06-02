import style from "./style.module.scss";
import { FullInput, Button } from "@/components";
import { useState } from "react";

interface Props {
  value: string;
  onChange: (str: string) => void;
}

export function GeneratePassword(props: Props) {
  const [password, setPassword] = useState("");

  function passwordGenerator() {
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var digits = "0123456789";
    var specialChars = "@$!%*?&";
    var passwordLength = 12;
    var newPassword = "";
  
    newPassword += getRandomCharacter(lowercase);
    newPassword += getRandomCharacter(uppercase);
    newPassword += getRandomCharacter(digits);
    newPassword += getRandomCharacter(specialChars);
  
    var remainingLength = passwordLength - 4;
    var allCharacters = lowercase + uppercase + digits + specialChars;
  
    for (var i = 0; i < remainingLength; i++) {
      newPassword += getRandomCharacter(allCharacters);
    }
  
    props.onChange(newPassword)
    setPassword(newPassword);
  }

  function getRandomCharacter(characters: string) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    return characters.charAt(randomIndex);
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
        className={style.btnGerar}
          backgcolor="#0051D0"
          fontcolor="#FFF"
          typeofbutton="textButton"
          text="Gerar"
          sizefont="14px"
          size="14em"
          onClick={() => passwordGenerator()}
        />
      </div>
    </div>
  );
}
