import { Header, FullInput, Card, GeneratePassword } from "@/components";
import style from "./style.module.scss";
import { useEffect, useState } from "react";
import { Password } from "@/services/endpoints/password";
import { toast } from "react-toastify"
import { useRouter } from "next/router";

const api = new Password()

interface Props {
    password?: RIPassword
}

export default function AlterarSenha(props: Props) {
    const router = useRouter()
    
    const idEditMode = router.query.id;
    console.log(idEditMode);
    
    const [website, setWebsite] = useState('');
    const [user, setUser] = useState('');
    const [password,setPassword] = useState('');
    const [confirmedPassword,setConfirmedPassword] = useState('');
    const [strongPassword, setStrongPassword] = useState('')
   
    const handleGetPasswordInfos = async() => {
      try {

        console.log(`quando entro? ${idEditMode}`);

        if(idEditMode === undefined) {
          toast.error('Não foi possível validar a edição dessa senha.');
          return router.back();
        }

        // TODO:: FALTANDO ROTA PARA PEGAR INFORMAÇÕES DA SENHA A PARTIR DE UM ID
        const password = await api.getPasswordById(idEditMode.toString());
  
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
            password: validatePassword(),
            id: idEditMode?.toString(),
          });
    
          router.push('/dashboard');
          toast.success('Senha alterada');
          
        } catch(e: any) {
            toast.error(e.message)
        }
      }

    
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
           handleGetPasswordInfos();
        }

      }, [router.isReady])


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
          onDelete={() => console.log()}
        />
      </div>
    </div>
  );
}
