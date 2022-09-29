import { Component, OnInit } from '@angular/core';
import { ApplyForLoanComponent } from '../apply-for-loan/apply-for-loan.component';
import { ApplyforloanService } from '../applyforloan.service';
import { Applyforloan } from '../applyforloan';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
users:Applyforloan[] = [];
  constructor(private applyforloanservice:ApplyforloanService) { }

  ngOnInit(): void {
    this .applyforloanservice.getusers().subscribe((user:Applyforloan[])=>{
      this.users = user;
      console.log(this.users)
    })
  }

}
