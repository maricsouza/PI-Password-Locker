import axios from 'axios';


const axiosUsage = axios.create({
    baseURL:'',
})

export class Account {

    // ENDPOINT :: CRIAR CONTA => nome, email, telefone e senha
    async createAccount (data: IAccount) {
        let res = await axiosUsage.post('', data);

        if(res.status !== 200) {
            // TODO :: RETORNO MENSAGEM DE ERRO
        }

        return res.data;
    }

    // ENDPOINT :: ALTERAR DADOS DA CONTA => id, nome, email, telefone e senha
    async changeAccountSettings (data: IAccount) {
        let res = await axiosUsage.post('', data);

        if(res.status !== 200) {
            // TODO :: RETORNO MENSAGEM DE ERRO
        }

        return res.data;
    }



}

export class Password {

    // ENDPOINT :: BUSCAR SENHAS => idUSER (id criptografado em um token?)
    async getPasswords (id: string) {
        let res = await axiosUsage.get(`/${id}`);
        
        if(res.status !== 200) {
            // TODO :: RETORNO MENSAGEM DE ERRO
        }

        return res.data;
    }

    // ENDPOINT :: SALVAR SENHA => nomeSite, usuSite, senha
    async savePassword (data: IPassword) {
        let res = await axiosUsage.post('', data);

        if(res.status !== 200) {
            // TODO :: RETORNO MENSAGEM DE ERRO
        }

        return res.data;
        
    }

    // ENDPOINT :: SALVAR SENHA => id, nomeSite, usuSite, senha
    async changePassword (changedData: IPassword) {
        let res = await axiosUsage.post('', changedData);

        if(res.status !== 200) {
            // TODO :: RETORNO MENSAGEM DE ERRO
        }

        return res.data;
    }
}