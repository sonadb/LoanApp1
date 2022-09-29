import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './emi-loan-calculator.component.html',
  styleUrls: ['./emi-loan-calculator.component.css'],
})
export class EMILoanCalculatorComponent {
  loanAmount: number = 0;
  tenure: number = 0;
  interest: number = 0;
  emi: number = 0;
  cal() {
    var outstandingAmount =
      Number(this.loanAmount) +
      Number(this.loanAmount * (this.interest / 100) * this.tenure);
    this.emi = outstandingAmount / this.tenure;
  }
}
