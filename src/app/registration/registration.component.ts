import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { HttpClient } from '@angular/common/http';
import { Registration } from '../registration';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  username:FormControl=new FormControl("");
  password:FormControl=new FormControl("");
  reenterPassword:FormControl=new FormControl("");
  firstName:FormControl=new FormControl("");
  lastName:FormControl=new FormControl("");



  constructor( private registerServices:RegistrationService) { }

  ngOnInit(): void {
  }
    save(){
      let register:Registration={
        username: this.username.value,
        password: this.password.value,
        reenterPassword: this.reenterPassword.value,
        firstName: this.firstName.value,
        lastName: this.lastName.value,

      };
      alert("Saved data");

      this.registerServices.addRegister(register);
    }


}
