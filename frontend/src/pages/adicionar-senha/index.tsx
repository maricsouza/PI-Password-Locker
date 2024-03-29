"use client";

import { Header, FullInput, Card, GeneratePassword } from "@/components";
import style from "./style.module.scss";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { Password } from "@/services/endpoints/password";
import { useState } from "react";

const api = new Password();

interface Props {
  password?: RIPassword;
}

export default function AdicionarSenha(props: Props) {

  const router = useRouter()
  const isAddMode = !props.password

  const [website, setWebsite] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [strongPassword, setStrongPassword] = useState("");

  const handleSavePassword = async () => {

    try {
      await api.addPassword({
        siteName: website,
        siteUsername: user,
        password: validatePassword(),
      });

      toast.success("Senha cadastrada");
      router.back();
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  const validatePassword = () => {    
    if (!password || !website) {
      throw new Error("Estão faltando campos");
    }

    if (password !== confirmedPassword) {
      throw new Error("As senhas devem ser iguais");
    }

    return password;
  };

  return (
    <div className={style.container}>
      <Header
        title={"Adicionar Senha" }
        returnPage="/dashboard"
      />
      <div className={style.principalBox}>
        <div className={style.infoContainer}>
          <div>
            <h1> Dados da senha </h1>
            <hr />

            <div className={style.box}>
              <FullInput
                inputtitle="Nome do site"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                disabled={!isAddMode}
              />
              <FullInput
                inputtitle="Nome do usuário do site (opcional)"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </div>

            <div className={style.box}>
              <FullInput
                inputtitle="Nova senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FullInput
                inputtitle="Confirmar senha"
                value={confirmedPassword}
                onChange={(e) => setConfirmedPassword(e.target.value)}
              />
            </div>
          </div>

          <GeneratePassword
            value={strongPassword}
            onChange={(str: string) => setStrongPassword(str)}
          />
        </div>
        <Card
          cardFormat={1}
          text="Preencha os dados ao lado para criar senha."
          buttonText={"Adicionar" }
          onConfirm={handleSavePassword}
          onDelete={() => undefined}
        />
      </div>
    </div>
  );
}