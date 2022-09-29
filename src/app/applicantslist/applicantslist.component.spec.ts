import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantslistComponent } from './applicantslist.component';

describe('ApplicantslistComponent', () => {
  let component: ApplicantslistComponent;
  let fixture: ComponentFixture<ApplicantslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
