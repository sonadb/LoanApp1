import { Injectable } from '@angular/core';
import { Login } from './login';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }
  addLogin(login:any):Observable<any>{
    return this.httpClient.post<Login>('https://localhost:44345/api/Login',login,{
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    });
   }
}


