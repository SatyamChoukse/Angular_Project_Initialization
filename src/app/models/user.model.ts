import { RoleType } from "../enums/roleType.enum";

export interface user{
  address: string,
  city: string,
  country: string,
  departmentID: number,
  departmentName: string | null,
  email: string,
  employeeType: RoleType,
  id: number,
  name: string,
  phone: string
}