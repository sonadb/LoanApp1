import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Personalloan } from '../personalloan';
import { PersonalloanService } from '../personalloan.service';

@Component({
  selector: 'app-personalloan',
  templateUrl: './personalloan.component.html',
  styleUrls: ['./personalloan.component.css']
})
export class PersonalloanComponent implements OnInit {
  name:FormControl=new FormControl("");
  email:FormControl=new FormControl("");
  phoneno:FormControl=new FormControl("");
  address:FormControl=new FormControl("");
  dateofbirth:FormControl=new FormControl("");
  // maritalstatus:FormControl=new FormControl("");
  grossmonthlyincome:FormControl=new FormControl("");
  downpayment:FormControl=new FormControl("");


  constructor(private personalloanservice:PersonalloanService) { }

  ngOnInit(): void {
  }
  save(){
    let register:Personalloan={
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

    this.personalloanservice.addPersonalloan(register);
  }

}
