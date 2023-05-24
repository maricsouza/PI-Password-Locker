import { api } from "../extensions/axios";

export class Account {
  // ENDPOINT :: CRIAR CONTA => nome, email, telefone e senha
  async createAccount(data: IAccount) {
    let res = await api.post("", data);

    if (res.status !== 200) {
      // TODO :: RETORNO MENSAGEM DE ERRO
    }

    return res.data;
  }

  // ENDPOINT :: ALTERAR DADOS DA CONTA => id, nome, email, telefone e senha
  async changeAccountSettings(data: IAccount) {
    let res = await api.post("", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "token",
      },
    });

    if (res.status !== 200) {
      // TODO :: RETORNO MENSAGEM DE ERRO
    }

    return res.data;
  }
}
