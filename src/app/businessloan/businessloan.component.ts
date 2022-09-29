import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BusineesloanService } from '../busineesloan.service';
import { Businessloan } from '../businessloan';

@Component({
  selector: 'app-businessloan',
  templateUrl: './businessloan.component.html',
  styleUrls: ['./businessloan.component.css']
})
export class BusinessloanComponent implements OnInit {

  name:FormControl=new FormControl("");
  email:FormControl=new FormControl("");
  phoneno:FormControl=new FormControl("");
  address:FormControl=new FormControl("");
  dateofbirth:FormControl=new FormControl("");
  // maritalstatus:FormControl=new FormControl("");
  grossmonthlyincome:FormControl=new FormControl("");
  downpayment:FormControl=new FormControl("");

  constructor(private businessloanservice:BusineesloanService) { }

  ngOnInit(): void {
  }
  save(){
    let register:Businessloan={
      name: this.name.value,
      email: this.email.value,
      phoneno: this.phoneno.value,
      address: this.address.value,
      dateofbirth: this.dateofbirth.value,
      // maritalstatus: this.maritalstatus.value,
      grossmonthlyincome: this.grossmonthlyincome.value,
      downpayment: this.downpayment.value,



    };
    alert("Saved data");

    this.businessloanservice.addBusinessloan(register);
  }

}
