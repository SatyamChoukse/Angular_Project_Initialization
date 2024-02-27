import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { logindata } from '../models/login.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private baseUrl = environment.url;

  constructor(private httpClient: HttpClient) { }
  

  public login(userData: logindata){
    const url = `${this.baseUrl}/`;
    return this.httpClient.post(url, userData);
  }
}
