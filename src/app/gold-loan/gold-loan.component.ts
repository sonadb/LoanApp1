import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Goldloan } from '../goldloan';
import { GoldloanService } from '../goldloan.service';

@Component({
  selector: 'app-gold-loan',
  templateUrl: './gold-loan.component.html',
  styleUrls: ['./gold-loan.component.css']
})
export class GoldLoanComponent implements OnInit {
  name:FormControl=new FormControl("");
  email:FormControl=new FormControl("");
  phoneno:FormControl=new FormControl("");
  address:FormControl=new FormControl("");
  dateofbirth:FormControl=new FormControl("");
  // maritalstatus:FormControl=new FormControl("");
  grossmonthlyincome:FormControl=new FormControl("");
  downpayment:FormControl=new FormControl("");

  constructor(private goldloanservice:GoldloanService) { }

  ngOnInit(): void {
  }
  save(){
    let register:Goldloan={
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

    this.goldloanservice.addGold(register);
  }

}
