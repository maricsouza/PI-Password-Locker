import { api } from "../extensions/axios";

export class Password {
  // ENDPOINT :: BUSCAR SENHAS => idUSER (id criptografado em um token?)
  async getPasswords(id: IAccount) {
    let res = await api.get(`/senhas/senhasuser`, {
      headers: {
        idUser: process.env.NEXTJS_USERID,
        token: process.env.NEXTJS_VALID_TOKEN
      }
    });

    if (res.status !== 200) {
      // TODO :: RETORNO MENSAGEM DE ERRO
      console.log(`erro na consulta da api, retorno status ${res.status}`)
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
        token: process.env.NEXTJS_VALID_TOKEN
      }
    });

    if (res.status !== 200) {
      // TODO :: RETORNO MENSAGEM DE ERRO
      console.log(`erro na consulta da api, retorno status ${res.status}`)
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
        token: process.env.NEXTJS_VALID_TOKEN
      }
    });

    if (res.status !== 200) {
      // TODO :: RETORNO MENSAGEM DE ERRO
      console.log(`erro na consulta da api, retorno status ${res.status}`)
    }

    return res.data;
  }

  async deletePassword (id: IPassword) {
    let res = await api.delete("/senhas", {
      headers: {
        IdSenha: id.id
      }
    })

    if(res.status !== 200) {
      // TODO :: RETORNO MENSAGEM DE ERRO
      console.log(`erro na consulta da api, retorno status ${res.status}`)
    }

    return res.data;

  }
}
