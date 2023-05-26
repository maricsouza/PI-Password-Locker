interface IPassword {
  id?: string;
  siteName?: string;
  siteUsername?: string;
  password?: string;
}
interface IAccount {
  id?: string;
  name?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
}

interface ILogged {
  idUser?: string,
  token?: string,
  valido?: boolean 
}

interface IError {
  status: number,
  message: string
}

