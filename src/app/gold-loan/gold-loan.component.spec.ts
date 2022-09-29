import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldLoanComponent } from './gold-loan.component';

describe('GoldLoanComponent', () => {
  let component: GoldLoanComponent;
  let fixture: ComponentFixture<GoldLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoldLoanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoldLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
