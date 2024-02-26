import { FormControl } from "@angular/forms";

export interface loginModel{
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

export interface logindata{
  email: string | null;
  password: string | null;
}