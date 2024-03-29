interface IPassword {
  id?: string;
  siteName?: string;
  siteUsername?: string;
  password?: string;
}

interface RIPassword {
  idSenha: string;
  titulo: string;
  userSite: string;
  senha: string;
  dataAlteracao: Array<number>;
  fk_idUser: string;
  dataCriacao: Array<number>;
}

interface IAccount {
  id?: string;
  name?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
  confPassword?: string;
}

interface RIAccount {
  dataAlteracao?: Array<number>;
  dataCriacao: Array<number>;
  email: string;
  id: string;
  key: string;
  nome: string;
  senha: string;
  telefone: string
}

interface IRAccount {
  idUser: string;
  token: string;
  validado: boolean
}

type PassOrAccount = IAccount | IPassword

interface ILogged {
  idUser?: string,
  token?: string,
  valido?: boolean 
}

interface IError {
  status: number,
  message: string
}
