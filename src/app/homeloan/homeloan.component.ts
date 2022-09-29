import { Component, OnInit, Type } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Homeloan } from '../homeloan';
import { HomeloanService } from '../homeloan.service';

@Component({
  selector: 'app-homeloan',
  templateUrl: './homeloan.component.html',
  styleUrls: ['./homeloan.component.css']
})
export class HomeloanComponent implements OnInit {
  name:FormControl=new FormControl("");
  email:FormControl=new FormControl("");
  phoneno:FormControl=new FormControl("");
  address:FormControl=new FormControl("");
  dateofbirth:FormControl=new FormControl("");
  // maritalstatus:FormControl=new FormControl("");
  grossmonthlyincome:FormControl=new FormControl("");
  downpayment:FormControl=new FormControl("");


  constructor(private homeloanservice: HomeloanService) {}

  ngOnInit(): void {
  }
    save(){
      let register:Homeloan={
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

      this.homeloanservice.addHomeloan(register);
    }

  }


