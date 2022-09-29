import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Adminlogin } from './adminlogin';
@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  constructor(private httpClient: HttpClient) { }
  addAdminlogin(login:any):Observable<any>{
    return this.httpClient.post<Adminlogin>('https://localhost:44345/api/adminlogins',login,{
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    });
   }
}
