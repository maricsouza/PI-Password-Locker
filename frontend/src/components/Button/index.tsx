import React from "react";
import { TButton } from "./styled";
import Image from "next/image";

export function Button(props: ButtonType) {
  return (
    <TButton {...props}>
      {props.typeofbutton === "textButton" ? (props.text) : (<Image src={props.imagepath ?? ""} alt="Remover"/>)}
    </TButton>
  );
}
