"use client";

import { ImageWithLogo, Input, Button } from "@/components";
import style from "../login/style.module.scss";
import { useState } from "react";
import Link from "next/link";
import { sizes } from "@/styles/global.type";
import { Account } from "@/services/endpoints/account";

import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setCredencials } from "@/redux/slices/userSlice";

const api = new Account();

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    try {
      const isValid: string[] = [];

      if (!email) {
        isValid.push("E-mail obrigatório");
      }

      if (!password) {
        isValid.push("Senha obrigatória");
      }

      if (isValid.length > 0) {
        isValid.forEach((msg) => toast.error(msg));
        return;
      }

      const r = await api.login(email, password);

      dispatch(
        setCredencials({
          token: r.token,
          userId: r.idUser,
        })
      );

      router.push("/dashboard");
    } catch (e: any) {
      toast.error(e.message);
    }
  }

  const a = () => {};

  return (
    <div className={style.container}>
      <ImageWithLogo largura="320px" />
      <Input
        content={"Email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        content={"Senha"}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        text={"Entrar"}
        typeofbutton="textButton"
        size={sizes.large}
        onClick={login}
      />

      <text className={style.text}>
        Não tem uma conta?{" "}
        <Link className={style.linkCadastro} href={"../sign-up"}>
          {" "}
          Cadastre-se
        </Link>
      </text>
    </div>
  );
}
