import { api } from "../extensions/axios";

export class Password {
  // ENDPOINT :: BUSCAR SENHAS => idUSER (id criptografado em um token?)
  async getPasswords() {
    const r = await api.get<RIPassword[]>(`/senhas/senhasuser`);
    return r.data;
  }

  async getPasswordById (id: string) {

    const r = await api.get<RIPassword>(`/senhas/senha`,{
      headers: {
        idSenha: id
      }
    })

    return r.data;
  }

  // ENDPOINT :: SALVAR SENHA => nomeSite, usuSite, senha
  async addPassword(data: IPassword) {

    const r = await api.post("/senhas", {
      titulo: data.siteName,
      senha: data.password,
      userSite: data.siteUsername,
    });

    return r.data;
  }

  // ENDPOINT :: SALVAR SENHA => id, nomeSite, usuSite, senha
  async modifyPassword(changedData: IPassword) {


    const r = await api.put(
      "/senhas",
      {
        titulo: changedData.siteName,
        senha: changedData.password,
        userSite: changedData.siteUsername,
      },
      {
        headers: {
          idSenha: changedData.id,
        },
      }
    );

    return r.data;
  }

  async deletePassword(id: string) {
    const r = await api.delete("/senhas", {
      headers: {
        idSenha: id,
      },
    });
    return r.data;
  }
}
