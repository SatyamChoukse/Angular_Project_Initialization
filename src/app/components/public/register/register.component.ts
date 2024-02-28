import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { registerFormData, registerModel } from 'src/app/models/register.model';
import { response } from 'src/app/responses/response';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public isSubmitting: boolean = false;
  public userForm !: FormGroup<registerModel>;

  constructor(private authService: AuthService, private toastreService: ToastrService, private router: Router) {
    this.userForm = new FormGroup<registerModel>({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]),
      confirmPassword: new FormControl(null, Validators.required),
      employeeType: new FormControl({ value: 0, disabled: true }, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      country: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required,Validators.pattern(/^\d{10}$/)]),
      departmentID: new FormControl(0)
    },  {validators: this.customPasswordMatching.bind(this)})
  }

  public submit() {
    if (this.userForm.valid) {

      this.isSubmitting = true;
      const signupUser: registerFormData = {
        name: this.userForm.controls.name.value,
        email: this.userForm.controls.email.value,
        password: this.userForm.controls.password.value,
        employeeType: 0,
        address: this.userForm.controls.address.value,
        city: this.userForm.controls.city.value,
        country: this.userForm.controls.country.value,
        phone: this.userForm.controls.phone.value?.toString(),
        departmentID: 17
      }
      
      this.authService.register(signupUser).subscribe({
        next: (res: response) => {        
          if(res.statusCode == 201){
            this.toastreService.success("SignedUp success");
            this.isSubmitting = false;
            this.router.navigate(['/login']);
          }
        },
        error: (err) => {    
          this.isSubmitting = false;      
          this.toastreService.error(err.message);
        }  
      })
      
    }
  }


  private customPasswordMatching(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    
    return password === confirmPassword ? null : { passwordMismatchError: true };
  }
}
