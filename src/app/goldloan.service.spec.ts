import { TestBed } from '@angular/core/testing';

import { GoldloanService } from './goldloan.service';

describe('GoldloanService', () => {
  let service: GoldloanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoldloanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
