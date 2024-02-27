import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { logindata } from '../models/login.model';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { response, responseG } from '../responses/response';
import { user } from '../models/user.model';
import { registerFormData } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private baseUrl = environment.url;

  constructor(private httpClient: HttpClient) { }
  

  public login(userData: logindata): Observable<responseG<user>>{
    const url = `${this.baseUrl}/user/login`;
    return this.httpClient.post<responseG<user>>(url, userData);
  }

  public register(userData: registerFormData): Observable<response>{
    const url = `${this.baseUrl}/registration`;
    return this.httpClient.post<response>(url, userData);
  }
}
