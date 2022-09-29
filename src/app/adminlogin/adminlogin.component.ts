import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from '../login';
import { LoginService } from '../login.service';
import { HttpClient } from '@angular/common/http';
import { ApplicantsserviceService } from '../applicantsservice.service';
import { Router } from '@angular/router';
import { AdminloginService } from '../adminlogin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  public loginform:FormGroup;

  constructor(private adminloginService:AdminloginService,private router:Router) {
    this.loginform=new FormGroup({
      username:new FormControl(),
      password:new FormControl()
    });
  }

  ngOnInit(): void {
  }
  login(){
    console.log(this.loginform.value);
    this.adminloginService.addAdminlogin(this.loginform.value).subscribe(data=>{
      if(data!=null){
        this.router.navigate(['aplicantform'])
    console.log(data);
    alert("Logged In Successfull");
    this.router.navigate(['applicantslist'])
      }
    })

    }
  }
