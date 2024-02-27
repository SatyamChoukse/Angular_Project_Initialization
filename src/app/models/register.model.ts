import { FormControl } from "@angular/forms";

export interface registerModel{
    name:FormControl<string | null>;
    email:FormControl<string| null>;
    password:FormControl<string| null>;
    employeeType:FormControl<number| null>;
    address:FormControl<string | null>;
    city:FormControl<string | null>;
    country:FormControl<string | null>;
    phone:FormControl<string | null>;
}