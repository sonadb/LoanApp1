import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Applicant } from './applicant';
import { Applyforloan } from './applyforloan';

@Injectable({
  providedIn: 'root'
})
export class ApplyforloanService {
  private baseUrl = 'https://localhost:44345/api/applyforloans';

  constructor( private httpClient: HttpClient) { }
  addApplyforloan(register:Applyforloan){
    this.httpClient.post<Applyforloan>(this.baseUrl,register,{
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    }).subscribe(result=> console.log("Done"));
   }
   getusers():Observable<Applyforloan[]>{
   return this.httpClient.get<Applyforloan[]>('https://localhost:44345/api/Applyforloans');
   }
}
