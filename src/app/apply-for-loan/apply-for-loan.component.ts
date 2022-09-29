import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Applicant } from '../applicant';
import { Applyforloan } from '../applyforloan';
import { ApplyforloanService } from '../applyforloan.service';
@Component({
  selector: 'app-apply-for-loan',
  templateUrl: './apply-for-loan.component.html',
  styleUrls: ['./apply-for-loan.component.css']
})
export class ApplyForLoanComponent implements OnInit {


  firstname:FormControl=new FormControl("");
  lastname:FormControl=new FormControl("");
  gender:FormControl=new FormControl("");
  dateofbirth:FormControl=new FormControl("");
  email:FormControl=new FormControl("");
  phoneno:FormControl=new FormControl("");
  address:FormControl=new FormControl("");
  account:FormControl=new FormControl("");
  // loantype:FormControl=new FormControl("");



  constructor( private applyforloanService:ApplyforloanService) { }

  ngOnInit(): void {
  }
    save(){
      let register:Applyforloan={
        firstname: this.firstname.value,
        lastname: this.lastname.value,
        gender: this.gender.value,
        dateofbirth: this.dateofbirth.value,
        email: this.email.value,
        phoneno: this.phoneno.value,
        address: this.address.value,
        account: this.account.value,
        // loantype: this.loantype.value,


      };
      alert("Saved data");

      this.applyforloanService.addApplyforloan(register);
    }


}
