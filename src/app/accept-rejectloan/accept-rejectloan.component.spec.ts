import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptRejectloanComponent } from './accept-rejectloan.component';

describe('AcceptRejectloanComponent', () => {
  let component: AcceptRejectloanComponent;
  let fixture: ComponentFixture<AcceptRejectloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptRejectloanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptRejectloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
