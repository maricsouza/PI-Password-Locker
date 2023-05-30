import { api } from "../extensions/axios";

export class Account {
  async login(email: string, password: string) {
    const response = await api.post<IRAccount>(
      "/usuarios/login",
      {},
      {
        headers: {
          usuario: email,
          senha: password,
        },
      }
    );

    return response.data;
  }

  async createAccount(data: IAccount) {
    const response = await api.post("/usuarios", {
      nome: data.name,
      email: data.email,
      senha: data.password,
      telefone: data.phoneNumber,
    });

    return response.data;
  }

  async modifyAccountData(data: IAccount) {
    const response = await api.put("/usuarios", {
      nome: data.name,
      email: data.email,
      senha: data.password,
      telefone: data.phoneNumber,
    });

    return response.data;
  }

  async deleteAccount(data: IAccount) {
    const response = await api.delete("/usuarios/", {
      headers: {
        idUser: data.id,
      },
    });

    return response.data;
  }

  async getAccountById() {
    const response = await api.get("/usuarios/userid");
    return response.data;
  }
}
