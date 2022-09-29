import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Addapplicantrequest } from './addapplicantrequest';
import { Applicant } from './applicant';
import { Updateapplicantrequest } from './updateapplicantrequest';

@Injectable({
  providedIn: 'root'
})
export class ApplicantsserviceService {
 private baseUrl = 'https://localhost:44345/api/';

  constructor(private httpClient : HttpClient) { }

  getApplicants(): Observable<any> {
      //return this.httpClient.get<Applicant[]>(this.baseUrl + '/applicantslist');
      return this.httpClient.get<Applicant[]>('https://localhost:44345/api/applicants');
  }
  getApplicant(applicantId :string): Observable<Applicant> {
    return this.httpClient.get<Applicant>(this.baseUrl + applicantId)
  }
  updateApplicant(applicantId:string, applicantRequest: Applicant):Observable<Applicant> {
    const updateapplicantrequest:Updateapplicantrequest = {
      firstName: applicantRequest.firstName,
      lastName: applicantRequest.lastName,
      dateOfBirth: applicantRequest.dateOfBirth,
      email: applicantRequest.email,
      phoneNumber: applicantRequest.phoneNumber,
      address: applicantRequest.address,
      gender: applicantRequest.gender,
      id: 0
    }
   return this.httpClient.put<Applicant>(this.baseUrl + applicantId,updateapplicantrequest);
  }
  deleteApplicant(applicantId:string):Observable<Applicant> {
   return this.httpClient.delete<Applicant>(this.baseUrl + applicantId)
  }
  addApplicant(applicantRequest:Applicant):Observable<Applicant> {
    const addapplicantrequest:Addapplicantrequest = {

      firstName:applicantRequest.firstName,
      lastName:applicantRequest.lastName,
      dateOfBirth:applicantRequest.dateOfBirth,
      email:applicantRequest.email,
      phoneNumber:applicantRequest.phoneNumber,
      address:applicantRequest.address,
      gender:applicantRequest.gender
    };
  return this.httpClient.post<Applicant>(this.baseUrl + '/applicants/add', addapplicantrequest);
  }
  uploadProfile(applicantId:string,file: File): Observable<any> {
   const formData = new FormData();
   formData.append("profileImage", file);

    return this.httpClient.post(this.baseUrl + '/applicants/' + applicantId + '/upload-image',formData, {
    responseType:'text'
   }
   );
  }
  getImagePath(relativePath: string) {
  return '${{this.baseApiUrl}}/${relativePath}';
  }
  edit(id:any){
    console.log(id);
    return this.httpClient.delete<Applicant>(this.baseUrl + 'Applicants/'+id)
  }
  RegisterPost(object: any) {
    return this.httpClient.post(this.baseUrl + 'Applicants', object, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })
  }
}
