"use client"

import { Header, FullInput, Card, GeneratePassword } from "@/components";
import style from "./style.module.scss";
import { useEffect, useState } from "react";
import { Password } from "@/services/endpoints/password";
import { toast } from "react-toastify"
import { useRouter } from "next/router";
import { useSearchParams } from 'next/navigation'

const api = new Password()

interface Props {
    password?: RIPassword
}

export default function AlterarSenha(props: Props) {
    const router = useRouter()
    const params = useSearchParams();

    
    const [passw, setPassw] = useState<RIPassword>();
    const [website, setWebsite] = useState('');
    const [user, setUser] = useState('');
    const [password,setPassword] = useState('');
    const [confirmedPassword,setConfirmedPassword] = useState('');
    const [strongPassword, setStrongPassword] = useState('')
   
    const handleGetPasswordInfos = async() => {
      try {

        const idEditMode = router.query.id;


        if(idEditMode === undefined) {
          toast.error('Não foi possível validar a edição dessa senha.');
          // return router.back();
          return;
        }

        // TODO:: FALTANDO ROTA PARA PEGAR INFORMAÇÕES DA SENHA A PARTIR DE UM ID
        const password = await api.getPasswordById(idEditMode.toString());
  
        setPassw(password);
        setWebsite(password.titulo)
        setPassword(password.senha)
        setUser(password.userSite)

      } catch(e: any) {
        toast.error(e.message)
      }
    }
    

    const handleEditPassword = async() => {

        
        try {
          await api.modifyPassword({
            siteName: website,
            siteUsername: user,
            password: passw?.senha !== password ? validatePassword() : passw.senha,
            id: passw?.idSenha,
          });
    
          toast.success('Senha alterada');
          router.back();
          
        } catch(e: any) {
            toast.error(e.message)
        }
      }


      const handleRemovePassword = async (id: string) => {
        try {
          await api.deletePassword(id);
          toast.success('Senha excluída com sucesso!');
          router.push('/dashboard');
    
        } catch (e: any) {
          toast.error(e.message);
        }
      };
    
      const validatePassword = () => {
        let senha = ''
        if (strongPassword.length >= 1) {
          senha = strongPassword
        } else {
          if (!password || !website) {
            throw new Error('Estão faltando campos')
          }
          if (password !== confirmedPassword) {
            throw new Error('As senhas devem ser iguais')
          }
          senha = password
        }
        
        return senha
      }

      useEffect( () => {
           if(router.isReady) {
            (router.query, router.isReady);
            handleGetPasswordInfos();
           }
      }, [])


  return (
    <div className={style.container}>
      <Header title="Alterar Senha" returnPage="/dashboard" />

      <div className={style.principalBox}>
        <div className={style.infoContainer}>
          <div>
            <h1> Alterar senha </h1>
            <hr />

            <div className={style.box}>
              <FullInput inputtitle="Nome do site" value={website} onChange={(e) => setWebsite(e.target.value)} disabled={true}/>
              <FullInput inputtitle="Nome do usuário do site (opcional)" value={user} onChange={(e) => setUser(e.target.value)}/>
            </div>

            <div className={style.box}>
              <FullInput inputtitle="Nova senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
              <FullInput inputtitle="Confirmar senha" value={confirmedPassword} onChange={(e) => setConfirmedPassword(e.target.value)}/>
            </div>
          </div>

          <GeneratePassword value={strongPassword} onChange={(str: string) => setStrongPassword(str)}/>
        </div>
        <Card
          cardFormat={1}
          text="Preencha os dados ao lado para alterar senha."
          buttonText="Salvar"
          onConfirm={() => handleEditPassword()}
          onDelete={() => handleRemovePassword(passw?.idSenha ?? '')}
        />
      </div>
    </div>
  );
}
