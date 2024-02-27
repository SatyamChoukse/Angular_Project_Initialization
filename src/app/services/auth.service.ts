import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { logindata } from '../models/login.model';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { responseG } from '../responses/response';
import { user } from '../models/user.model';

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
}
