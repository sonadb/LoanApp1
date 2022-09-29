import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMILoanCalculatorComponent } from './emi-loan-calculator.component';

describe('EMILoanCalculatorComponent', () => {
  let component: EMILoanCalculatorComponent;
  let fixture: ComponentFixture<EMILoanCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EMILoanCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EMILoanCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
