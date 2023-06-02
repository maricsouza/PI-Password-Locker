import { Header, FullInput, Card} from "@/components";
import style from "./style.module.scss";
import { Account } from "@/services/endpoints/account";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const api = new Account();

export default function MeusDados() {

  const router = useRouter();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  

  async function getUser() {
    try {
      const resp: RIAccount = await api.getAccountById();
      setUsername(resp.nome);
      setEmail(resp.email);
      setPhone(resp.telefone);
    } catch (e: any) {
      toast.error("deu erro pra pegar o user");
    }
  }

  const handleRemovePassword = async () => {
    try {
      await api.deleteAccount();
      toast.success('Conta deletada com sucesso!');
      router.push('/login');

    } catch (e: any) {
      toast.error(e.message);
    }
  };

  async function handleSaveUserChanges () {
    try {

      await api.modifyAccountData({
        email: email,
        name: username,
        password: validatePassword(),
        phoneNumber: phone
      });

      toast.success("Cadastro alterado com sucesso!");
      router.back();

    }catch (e) {
      toast.error('Ocorreu um erro ao salvar as alterações feitas');
    }
  }

  const validatePassword = () => {    

    if (pass !== confirmPass) {
      throw new Error("As senhas devem ser iguais");
    }

    return pass;
  };

  useEffect (() => {
    getUser()
  },[])



  return (
    <div className={style.container}>
      <Header title="Meus Dados" returnPage="/dashboard" />

      <div className={style.principalBox}>
        <div className={style.infoContainer}>
          <div>
            <h1> Meus Dados </h1>
            <hr />

            <div className={style.box}>
              <FullInput inputtitle="Nome" fullInput={true} value={username} onChange={(e) => setUsername(e.target.value)}/>
              <FullInput inputtitle="Email" fullInput={true} value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className={style.box2}>
              <FullInput inputtitle="Nova senha" value={pass} onChange={(e) => setPass(e.target.value)}/>
              <FullInput inputtitle="Confirmar senha" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)}/>
            </div>

            <FullInput inputtitle="Telefone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
          </div>
        </div>
        <Card
          cardFormat={2}
          text="Preencha os dados ao lado para alterar senha."
          buttonText="Salvar"
          onDelete={() => handleRemovePassword()}
          onConfirm={() => handleSaveUserChanges()}
        />
      </div>
    </div>
  );
}
