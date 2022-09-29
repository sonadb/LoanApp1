import { TestBed } from '@angular/core/testing';

import { PersonalloanService } from './personalloan.service';

describe('PersonalloanService', () => {
  let service: PersonalloanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalloanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
