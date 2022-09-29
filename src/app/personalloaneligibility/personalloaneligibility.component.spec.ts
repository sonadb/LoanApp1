import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalloaneligibilityComponent } from './personalloaneligibility.component';

describe('PersonalloaneligibilityComponent', () => {
  let component: PersonalloaneligibilityComponent;
  let fixture: ComponentFixture<PersonalloaneligibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalloaneligibilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalloaneligibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
