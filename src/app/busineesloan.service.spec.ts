import { TestBed } from '@angular/core/testing';

import { BusineesloanService } from './busineesloan.service';

describe('BusineesloanService', () => {
  let service: BusineesloanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusineesloanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
