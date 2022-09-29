import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registration } from './registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor( private httpClient: HttpClient) { }
  addRegister(register:Registration){
    this.httpClient.post<Registration>("https://localhost:44345/api/registrations",register,{
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    }).subscribe(result=> console.log("Done"));
   }
}
