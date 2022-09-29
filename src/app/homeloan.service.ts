import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Homeloan } from './homeloan';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomeloanService {
  private baseUrl = 'https://localhost:44345/api/homeloans';

  constructor(private httpClient: HttpClient) { }
  addHomeloan(register:Homeloan){
    this.httpClient.post<Homeloan>(this.baseUrl,register,{
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    }).subscribe(result=> console.log("Done"));
   }
   getusers():Observable<Homeloan[]>{
   return this.httpClient.get<Homeloan[]>('https://localhost:44345/api/homeloans');
   }
}
