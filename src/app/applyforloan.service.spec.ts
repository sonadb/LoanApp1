import { TestBed } from '@angular/core/testing';

import { ApplyforloanService } from './applyforloan.service';

describe('ApplyforloanService', () => {
  let service: ApplyforloanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyforloanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
