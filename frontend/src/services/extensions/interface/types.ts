interface IPassword {
  interf: 'password'
  id?: string;
  siteName?: string;
  siteUsername?: string;
  password?: string;
  confPassword?: string;
}

interface RIPassword {
  id: string;
  siteName?: string;
  siteUsername?: string;
  password?: string;
  lastChange: Date;
}

interface IAccount {
  interf: 'account'
  id?: string;
  name?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
  confPassword?: string;
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

