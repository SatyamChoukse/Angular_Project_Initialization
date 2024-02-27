import { FormControl } from "@angular/forms";
//TODO: any interface which represents a form, should suffix with form, LoginModel > LoginForm
export interface loginModel{
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

export interface logindata{
  email: string | null;
  password: string | null;
}