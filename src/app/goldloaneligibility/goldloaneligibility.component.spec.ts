import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldloaneligibilityComponent } from './goldloaneligibility.component';

describe('GoldloaneligibilityComponent', () => {
  let component: GoldloaneligibilityComponent;
  let fixture: ComponentFixture<GoldloaneligibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoldloaneligibilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoldloaneligibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
