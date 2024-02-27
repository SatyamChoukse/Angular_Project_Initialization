//TODO: chnage the name to Identity
export interface responseG<T>{
  data: T
  status: string,
  statusCode: number,
  message: string,
  token: string
}

export interface response{
  status: string,
  message: string,
  statusCode: number,
}