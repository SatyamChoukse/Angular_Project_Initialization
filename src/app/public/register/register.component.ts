import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { registerModel } from 'src/app/models/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public message: boolean = false;
  public users!: registerModel[];
  public userForm !: FormGroup<registerModel>;
  // public updatedept !: deptData[];
  public isAddMode: boolean = false;
  public id: any;

  constructor() {
    this.userForm = new FormGroup<registerModel>({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]),
      employeeType: new FormControl({ value: 0, disabled: true }, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      country: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      departmentID: new FormControl(null, [Validators.required])
    })
  }
  ngOnInit(): void {
    // this.userData.Deptdata().subscribe((res) => {
    //   this.updatedept = res.iterableData;
    // })
  }

  public removeMsg() {
    this.message = false;
  }

  public SaveUser() {
    // if (this.userForm.valid) {
    //   this.spinner.show();
    //   this.userData.saveusers(this.userForm.value).subscribe((result: any) => {
    //     setTimeout(() => {
    //       this.spinner.hide();
    //     }, 1000);
    //     this.message = true;
    //     this.userForm.reset({});
    //   })
    // }
  }
}
