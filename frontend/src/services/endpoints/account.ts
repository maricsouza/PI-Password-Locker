import { api } from "../extensions/axios";

export class Account {

  //ENDPOINT :: LOGIN => email e senha
  async login (email: string, password: string) {
    const r = await api.post<IRAccount>("/usuarios/login", {}, {
      headers: {
        usuario: email,
        senha: password
      }
    })

    return r.data;
  }

  // ENDPOINT :: CRIAR CONTA => nome, email, telefone e senha
  async createAccount(data: IAccount) {
    const r = await api.post("/usuarios", {
      nome: data.name,
      email: data.email,
      senha: data.password,
      telefone: data.phoneNumber
    });

    return r.data
  }

  // ENDPOINT :: ALTERAR DADOS DA CONTA => id, nome, email, telefone e senha
  async modifyAccountData(data: IAccount) {
    const r = await api.put("/usuarios", {
      nome: data.name,
      email: data.email,
      senha: data.password,
      telefone: data.phoneNumber

    });

    return r.data
  }

  //ENDPOINT :: EXCLUIR CONTA => id
  async deleteAccount (id: IAccount) {
    let r = await api.delete("/usuarios")
    return r.data;
  }
}