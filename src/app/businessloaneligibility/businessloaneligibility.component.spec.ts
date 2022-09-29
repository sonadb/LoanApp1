import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessloaneligibilityComponent } from './businessloaneligibility.component';

describe('BusinessloaneligibilityComponent', () => {
  let component: BusinessloaneligibilityComponent;
  let fixture: ComponentFixture<BusinessloaneligibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessloaneligibilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessloaneligibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
