import { api } from "../extensions/axios";

export class Account {

  //ENDPOINT :: LOGIN => email e senha
  async login (data: IAccount) {
    let res = await api.get("", {
      // ??? - LOGIN E SENHA COMO HEADER?

      headers: {
        usuario: "",
        senha: ""
      }
    })

   
    if(res.status !== 200) {
      // TODO :: RETORNO MENSAGEM DE ERRO
    }

    return res.data;
  }


  // ENDPOINT :: CRIAR CONTA => nome, email, telefone e senha
  async createAccount(data: IAccount) {
    let res = await api.post("", data, {
      headers: {
        token: ""
      }
    });

    // ??? - TOKEN PARA CADASTRAR USUÁRIO?
    if (res.status !== 200) {
      // TODO :: RETORNO MENSAGEM DE ERRO
    }

    return res.data;
  }

  // ENDPOINT :: ALTERAR DADOS DA CONTA => id, nome, email, telefone e senha
  async modifyAccountData(data: IAccount) {
    let res = await api.post("", data, {
      headers: {
        token: ""
      },
    });

    if (res.status !== 200) {
      // TODO :: RETORNO MENSAGEM DE ERRO
    }

    return res.data;
  }

  //ENDPOINT :: EXCLUIR CONTA => id
  async deleteAccount () {
    let res = await api.delete("", {

      // Verificar headers
      headers: {
        userId: "idusuario"
      }
    })

    if (res.status !== 200) {
      // TODO :: RETORNO MENSAGEM DE ERRO
    }

    return res.data;
  }

}
