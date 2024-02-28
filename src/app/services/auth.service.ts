import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { login } from '../models/login.model';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { response, Identity } from '../responses/response';
import { user } from '../models/user.model';
import { registerFormData } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private baseUrl = environment.baseUrl;

  public onLoginChange:EventEmitter<boolean>=new EventEmitter<boolean>();

  constructor(private httpClient: HttpClient) { }
  
  public isLoggedIn(){
    if(localStorage.getItem(environment.tokenKey)){
      return true;
    }
    return false;
  }

  public login(userData: login): Observable<Identity<user>>{
    const url = `${this.baseUrl}/user/login`;
    return this.httpClient.post<Identity<user>>(url, userData);
  }

  public register(userData: registerFormData): Observable<response>{
    const url = `${this.baseUrl}/registration`;
    return this.httpClient.post<response>(url, userData);
  }
}
