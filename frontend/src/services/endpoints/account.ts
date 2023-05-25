import { api } from "../extensions/axios";
export class Account {

  //ENDPOINT :: LOGIN => email e senha
  async login (data: IAccount) {
    let res = await api.post("/usuarios/login", {
      // ??? - LOGIN E SENHA COMO HEADER?

      headers: {
        usuario: data.email,
        senha: data.password
      }
    })

   
    if(res.status !== 200) {
      // TODO :: RETORNO MENSAGEM DE ERRO
    }

    return res.data;
  }


  // ENDPOINT :: CRIAR CONTA => nome, email, telefone e senha
  async createAccount(data: IAccount) {
    let res = await api.post("/usuarios", {
      nome: data.name,
      email: data.email,
      senha: data.password,
      telefone: data.phoneNumber
    } );

    if (res.status !== 200) {
      // TODO :: RETORNO MENSAGEM DE ERRO
    }

    return res.data;
  }

  // ENDPOINT :: ALTERAR DADOS DA CONTA => id, nome, email, telefone e senha
  async modifyAccountData(data: IAccount) {
    let res = await api.put("/usuarios", {
      nome: data.name,
      email: data.email,
      senha: data.password,
      telefone: data.phoneNumber

    }, {
      headers: {
        idUser: data.id,
        token: process.env.NEXTJS_VALID_TOKEN
      },
    });

    if (res.status !== 200) {
      // TODO :: RETORNO MENSAGEM DE ERRO
    }

    return res.data;
  }

  //ENDPOINT :: EXCLUIR CONTA => id
  async deleteAccount (id: IAccount) {
    let res = await api.delete("/usuarios", {

      // Verificar headers
      headers: {
        userId: id.id,
        token: process.env.NEXTJS_VALID_TOKEN
      }
    })

    if (res.status !== 200) {
      // TODO :: RETORNO MENSAGEM DE ERRO
    }

    return res.data;
  }

}
