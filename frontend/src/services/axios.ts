import axios from "axios";
import { TokenClass } from "typescript";

const axiosInstance = axios.create({
  baseURL: "",
});

export class Account {
  // ENDPOINT :: CRIAR CONTA => nome, email, telefone e senha
  async createAccount(data: IAccount) {
    let res = await axiosInstance.post("", data);

    if (res.status !== 200) {
      // TODO :: RETORNO MENSAGEM DE ERRO
    }

    return res.data;
  }

  // ENDPOINT :: ALTERAR DADOS DA CONTA => id, nome, email, telefone e senha
  async changeAccountSettings(data: IAccount) {
    let res = await axiosInstance.post("", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${TokenClass}`,
      },
    });

    if (res.status !== 200) {
      // TODO :: RETORNO MENSAGEM DE ERRO
    }

    return res.data;
  }
}

export class Password {
  // ENDPOINT :: BUSCAR SENHAS => idUSER (id criptografado em um token?)
  async getPasswords(id: string) {
    let res = await axiosInstance.get(`/${id}`);

    if (res.status !== 200) {
      // TODO :: RETORNO MENSAGEM DE ERRO
    }

    return res.data;
  }

  // ENDPOINT :: SALVAR SENHA => nomeSite, usuSite, senha
  async savePassword(data: IPassword) {
    let res = await axiosInstance.post("", data);

    if (res.status !== 200) {
      // TODO :: RETORNO MENSAGEM DE ERRO
    }

    return res.data;
  }

  // ENDPOINT :: SALVAR SENHA => id, nomeSite, usuSite, senha
  async changePassword(changedData: IPassword) {
    let res = await axiosInstance.post("", changedData);

    if (res.status !== 200) {
      // TODO :: RETORNO MENSAGEM DE ERRO
    }

    return res.data;
  }
}
