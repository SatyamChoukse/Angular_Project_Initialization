import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { loginModel } from 'src/app/models/login.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public isShowSbnt: boolean = false;
  public loginFormGroup: FormGroup<loginModel> = new FormGroup<loginModel>({
    email: new FormControl(null, [Validators.required, Validators.pattern(/[a-zA-Z0-9_\-\.]+@[a-z]+\.[c][o][m]/)]),
    password: new FormControl(null, [Validators.required]),
  })

  constructor(private auth: AuthService){}

  // public login(){
  //   this.loginFormGroup.markAllAsTouched();
  //   if(this.loginFormGroup.valid){
  //     const loginUser: logindata = {
  //       email: this.loginFormGroup.controls.email.value,
  //       password: this.loginFormGroup.controls.password.value
  //     }
      
  //     this.isShowSbnt = true;
  //     this.auth.login(loginUser).subscribe({
  //       next: (res: response<loggedInUser>) =>{         
  //         if(res.status){    
  //           this.auth.loggedInUserId = res.data.user.id;
  //           console.log(res.data.user.id);

  //           localStorage.setItem(environment.tokenName, res.data.access_token);

  //           let userData= {
  //             name: res.data.user.name,
  //             role: res.data.user.role,
  //             // id: res.data.user.id
  //           }

            
  //           localStorage.setItem("userData", JSON.stringify(userData));

  //           this.router.navigate(['/portal']);
  //           this.toastreService.success("Logged in success");
  //           this.isShowSbnt = false;
  //         }
  //       },
  //       error: (err) =>{
  //         this.isShowSbnt = false;
  //         console.log(err);
  //         this.toastreService.error(err.message);
  //       }
  //     })
  //   }
  // }
}
