import { Component, OnInit } from '@angular/core';
import { Loanlist } from '../loanlist';
import { LoanlistService } from '../loanlist.service';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css']
})
export class LoanListComponent implements OnInit {
  Loans: Loanlist[] = [];
  constructor(private loans:LoanlistService) { }

  ngOnInit(): void {

  // Loans= [
  //    {'id':1,'Type':'Home Loan'},
  //   {'id':2,'Type':'Gold Loan'},
  //   {'id':3,'Type':'Business Loan'},
  //   {'id':4,'Type':'Personal Loan'}


  // ]
  this.loans.getData().subscribe((data: Loanlist[]) => {

    console.log(data);

    this.Loans = data;

    });

  }


}

