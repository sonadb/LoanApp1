import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Businessloan } from './businessloan';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusineesloanService {

  private baseUrl = 'https://localhost:44345/api/businessloans';

  constructor(private httpClient: HttpClient) { }
  addBusinessloan(register:Businessloan){
    this.httpClient.post<Businessloan>(this.baseUrl,register,{
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    }).subscribe(result=> console.log("Done"));
   }
   getusers():Observable<Businessloan[]>{
   return this.httpClient.get<Businessloan[]>('https://localhost:44345/api/businessloans');
   }
}
