import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personalloan } from './personalloan';
import { Applicant } from './applicant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalloanService {

  private baseUrl = 'https://localhost:44345/api/Personalloans';
  constructor(private httpClient: HttpClient) { }
  addPersonalloan(register:Personalloan){
    this.httpClient.post<Personalloan>(this.baseUrl,register,{
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    }).subscribe(result=> console.log("Done"));
   }
   getusers():Observable<Personalloan[]>{
   return this.httpClient.get<Personalloan[]>('https://localhost:44345/api/Personalloans');
   }
}
