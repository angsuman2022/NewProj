import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  _loginUrl="https://localhost:44395/api/User/login-user";
  _registerUrl="https://localhost:44395/api/User/register-user";

  constructor(private http:HttpClient,private _router:Router) { }
  loginUser(login:any)
  {
    return this.http.post<any>(this._loginUrl,login);
  }
  registerUser(register:any)
  {
    return this.http.post<any>(this._registerUrl,register);
  }
  getToken()
  {
    return localStorage.getItem('token');
  }
  logingIn(){
    return !!localStorage.getItem('token');
  }
  logotUser()
  {
    localStorage.removeItem('token');
    this._router.navigate(['']);
  }
}
