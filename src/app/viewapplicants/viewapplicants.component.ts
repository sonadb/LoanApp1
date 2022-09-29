import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Applicant } from '../applicant';
import { ApplicantsserviceService } from '../applicantsservice.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { Updateapplicantrequest } from '../updateapplicantrequest';
import { Addapplicantrequest } from '../addapplicantrequest';
@Component({
  selector: 'app-viewapplicants',
  templateUrl: './viewapplicants.component.html',
  styleUrls: ['./viewapplicants.component.css']
})
export class ViewapplicantsComponent implements OnInit {

applicantId:string | null | undefined | number;
applicant: Applicant = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  email: '',
  phoneNumber: '',
  gender: '',
  address: '',
  ProfileImageUrl: undefined,
  id: '',

};
  isNewApplicant = false;
  header = '';
  displayProfileImageUrl = '';
  profileUpload: any;
  @ViewChild('applicantDetailsForm') applicantDetailsForm?: NgForm;

  constructor(private readonly applicantService: ApplicantsserviceService,
    private readonly route: ActivatedRoute,
    private snackbar:MatSnackBar,
    private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => {
       this.applicantId = params.get('id');
       if(this.applicantId) {
        if(this.applicantId.toLowerCase() === 'Add'.toLowerCase()) {
        //-> New Student Functionality
          this.isNewApplicant = true;
          this.header = 'Add New Applicant';
          this.applicantService.getApplicant(this.applicantId)
          .subscribe(
            (successResponse) => {
              this.applicant = successResponse;
            }
          );
          this.setImage();
        } else {
          //-> Existing Applicant Functionality
          this.isNewApplicant = false;
          this.header = 'Edit Applicant';
        }

         this.applicantService.getApplicant(this.applicantId)
        .subscribe(
          (successResponse) => {
            this.applicant= successResponse;
            this.setImage();
          },
          (errorResponse) => {
            this.setImage();
          }
        )
       }
      }
    );
  }
  onUpdate():  void {
    {

        }
      this.applicantService.updateApplicant(this.applicant.id, this.applicant)
   .subscribe(
    (successResponse) => {

      //Show a notification
       this.snackbar.open('Loan Accepted',undefined,{
        duration: 2000
       });
    },
    (errorResponse) => {
      //Log it
      console.log(errorResponse);
    }
   );
  }

     onDelete(): void {
      this.applicantService.deleteApplicant(this.applicant.id)
      .subscribe(
        (successResponse) => {
          this.snackbar.open('Loan Rejected',undefined,{
            duration:2000
          });
          setTimeout(() => {
            this.router.navigateByUrl('applicants');
          }, 2000);
        },
        (errorResponse) => {
          //Log

        }
      );
     }
     onAdd(): void {
     if(this.applicantDetailsForm?.form.valid){
     }

      this.applicantService.addApplicant(this.applicant)
      .subscribe(
        (successResponse) => {
          // Submit form data to Api
       this.snackbar.open('Applicant Added Successfully',undefined,{
       duration:2000
        } );
        },
        (errorResponse) => {
          //Log
        }

      );
     }


     uploadProfile(event:any): void {
     if(this.applicantId) {
      const file:File = event.target.files[0];
      this.applicantService.uploadProfile(this.applicant.id,file)
      .subscribe(
        (successResponse) => {
      this.applicant.ProfileImageUrl = successResponse;
      this.setImage();

      //Show a notification
      this.snackbar.open('Profile Uploded Successfully',undefined,{
        duration: 2000
       });

        },
        (errorResponse) => {

        }
      )
     }
     }
     private setImage(): void {
      if(this.applicant.ProfileImageUrl) {
     this.displayProfileImageUrl = this.applicantService.getImagePath(this.applicant.ProfileImageUrl);

      }else {
        //Display a default
        this.displayProfileImageUrl = '../../assets/Images/userlogin.jpg'
      }
     }
}
