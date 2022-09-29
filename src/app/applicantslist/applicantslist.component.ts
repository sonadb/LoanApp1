import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Applicant } from '../applicant';
import { ApplicantsserviceService } from '../applicantsservice.service';

@Component({
  selector: 'app-applicantslist',
  templateUrl: './applicantslist.component.html',
  styleUrls: ['./applicantslist.component.css']
})
export class ApplicantslistComponent implements OnInit {

applicants:Applicant[] = [];

displayedColumns: string[] = ['firstName','lastName','dateOfBirth','email','phoneNumber','address','gender','edit'];

datasource: MatTableDataSource<Applicant> = new MatTableDataSource<Applicant>();
@ViewChild(MatPaginator) matPaginator!: MatPaginator;
@ViewChild(MatSort) matSort!: MatSort;
filterString = '';
  constructor(private applicantsService: ApplicantsserviceService) { }

  ngOnInit(): void {
    // Fetch applicantslist
    this.applicantsService.getApplicants()
    .subscribe(
      (successResponse) => {
        this.applicants = successResponse;
        this.datasource = new MatTableDataSource<Applicant>(this.applicants);
        console.log(this.applicants)

        if(this.matPaginator) {
          this.datasource.paginator = this.matPaginator;
        }
        if(this.matSort) {
          this.datasource.sort = this.matSort;
        }
      },
      (errorResponse) => {
        console.log(errorResponse);
      }
    );
  }
  filterApplicants(){
 this.datasource.filter = this.filterString.trim().toLowerCase();
  }
  Edit(id:any){
    this.applicantsService.edit(id) .subscribe();
  }
}
