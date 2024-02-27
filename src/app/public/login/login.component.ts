import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/app/environments/environment';
import { loginForm, login } from 'src/app/models/login.model';
import { user } from 'src/app/models/user.model';
import { Identity } from 'src/app/responses/response';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public isShowSbnt: boolean = false;
  public loginFormGroup: FormGroup<loginForm> = new FormGroup<loginForm>({
    email: new FormControl(null, [Validators.required, Validators.pattern(/[a-zA-Z0-9_\-\.]+@[a-z]+\.[c][o][m]/)]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
  })

  constructor(private authService: AuthService, private toastreService: ToastrService, private router: Router) { }

  public login() {

    this.loginFormGroup.markAllAsTouched();
    if (this.loginFormGroup.valid) {
      this.isShowSbnt = true;
      const loginUser: login = {
        email: this.loginFormGroup.controls.email.value,
        password: this.loginFormGroup.controls.password.value
      }

      this.authService.login(loginUser).subscribe({
        next: (res: Identity<user>) => {
          if (res.statusCode == 200) {
            localStorage.setItem(environment.tokenKey, JSON.stringify(res.token));
            localStorage.setItem(environment.empRoleTypeKey, JSON.stringify(res.data.employeeType));
            this.toastreService.success("Logged In success");
            this.authService.OnLoginChange.emit(true);
            this.isShowSbnt = false;
            this.router.navigate(['/home']);
          }
        },
        error: (err) => {
          this.isShowSbnt = false;
        }
      })
    }
  }
}
