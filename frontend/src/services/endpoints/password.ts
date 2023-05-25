import { api } from "../extensions/axios";

export class Password {
  // ENDPOINT :: BUSCAR SENHAS => idUSER (id criptografado em um token?)
  async getPasswords(id: string) {
    let res = await api.get(`/senhas/senhasuser`, {
      headers: {
        idUser: '',
        token: ''
      }
    });

    if (res.status !== 200) {
      // TODO :: RETORNO MENSAGEM DE ERRO
    }

    return res.data;
  }

  // ENDPOINT :: SALVAR SENHA => nomeSite, usuSite, senha
  async savePassword(data: IPassword) {
    let res = await api.post("/senhas", {
      titulo: data.siteName,
      senha: data.password,
      usuarioSite: data.siteUsername
    }, {
      headers: {
        token: ""
      }
    });

    if (res.status !== 200) {
      // TODO :: RETORNO MENSAGEM DE ERRO
    }

    return res.data;
  }

  // ENDPOINT :: SALVAR SENHA => id, nomeSite, usuSite, senha
  async modifyPassword(changedData: IPassword) {
    let res = await api.put("/senhas", {
      titulo: changedData.siteName,
      senha: changedData.password,
      usuarioSite: changedData.siteUsername,
      fk_idUser: ''
    }, {
      headers: {
        idSenha: changedData.id,
        token: ""
      }
    });

    if (res.status !== 200) {
      // TODO :: RETORNO MENSAGEM DE ERRO
    }

    return res.data;
  }

  async deletePassword () {
    let res = await api.delete("/senhas", {
      headers: {
        userId: ""
      }
    })

    if(res.status !== 200) {
      // TODO :: RETORNO MENSAGEM DE ERRO
    }

    return res.data;

  }
}
