import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loanlist } from './loanlist';

@Injectable({
  providedIn: 'root'
})
export class LoanlistService {

  constructor(private http:HttpClient) { }
getData():Observable<Loanlist[]>{
let url="https://localhost:44345/api/Loanlists/";
console.log("Done");
 return this.http.get<Loanlist[]>(url);
}


}
