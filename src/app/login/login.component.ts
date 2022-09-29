

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from '../login';
import { LoginService } from '../login.service';
import { HttpClient } from '@angular/common/http';
import { ApplicantsserviceService } from '../applicantsservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginform:FormGroup;

  constructor(private loginService:LoginService,private router:Router) {
    this.loginform=new FormGroup({
      username:new FormControl(),
      password:new FormControl()
    });
  }


  ngOnInit(): void {
  }
  // formModel = new FormGroup({
  //  username : new FormControl('', [Validators.required]),
  //   password: new FormControl('', [Validators.required]),
 // });
  login(){
console.log(this.loginform.value);
this.loginService.addLogin(this.loginform.value).subscribe(data=>{
  if(data!=null){
    this.router.navigate(['Loan-list'])
console.log(data);
alert("Logged In Successfull");
  }
})
  }
  // SaveData() {
  //   //debugger
  //   this.Registerapi.RegisterPost(this.formModel.value).subscribe(
  //     (res: any) => {
  //       if (res.succeeded) {

  //         console.log('New user created!', 'Login successful.');
  //       }
  //       else {
  //         console.log("error occured");
  //         this.formModel.reset();
  //       }
  //     }
  //   );
  // }
}





