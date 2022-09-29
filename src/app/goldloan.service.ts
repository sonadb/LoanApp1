import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Goldloan } from './goldloan';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoldloanService {
  private baseUrl = '';
  constructor(private httpClient: HttpClient) { }
  addGold(register:Goldloan){
    this.httpClient.post<Goldloan>(this.baseUrl,register,{
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    }).subscribe(result=> console.log("Done"));
   }
   getusers():Observable<Goldloan[]>{
   return this.httpClient.get<Goldloan[]>('');
   }
}
