import { Header, FullInput, Card, GeneratePassword } from "@/components";
import style from "./style.module.scss";
import { useEffect, useState } from "react";
import AdicionarSenha from "../adicionar-senha";
import { Password } from "@/services/endpoints/password";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const api = new Password()

export default function AlterarSenha() {
  const router = useRouter();
  const [passToEdit, setPassToEdit] = useState<RIPassword>();

  const idToEdit = router.query.id

  useEffect(() => {
    handleGetPasswordInfos()
  }, [])

  const handleGetPasswordInfos = async() => {
    if (!idToEdit) {
      return;
    }

    try {      
      // TODO:: FALTANDO ROTA PARA PEGAR INFORMAÇÕES DA SENHA A PARTIR DE UM ID
      const passwords = await api.getPasswords()
      const pass = passwords.filter((pass) => pass.idSenha === idToEdit[0])[0]
      console.log(passwords)
      console.log(idToEdit)
      setPassToEdit(pass)
    } catch(e: any) {
      toast.error(e.message)
    }
  }

  if (passToEdit) {
    return <AdicionarSenha password={passToEdit}/>
  }


  return (
    <div className={style.container}>
      <div> Loading... </div>
    </div>
  );
}
