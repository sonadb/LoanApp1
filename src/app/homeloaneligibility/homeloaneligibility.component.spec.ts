import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeloaneligibilityComponent } from './homeloaneligibility.component';

describe('HomeloaneligibilityComponent', () => {
  let component: HomeloaneligibilityComponent;
  let fixture: ComponentFixture<HomeloaneligibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeloaneligibilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeloaneligibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
