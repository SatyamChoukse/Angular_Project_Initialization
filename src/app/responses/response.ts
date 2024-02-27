export interface responseG<T>{
  data: T
  status: string,
  statusCode: number,
  message: string,
  token: string
}