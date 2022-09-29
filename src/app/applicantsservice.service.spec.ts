import { TestBed } from '@angular/core/testing';

import { ApplicantsserviceService } from './applicantsservice.service';

describe('ApplicantsserviceService', () => {
  let service: ApplicantsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicantsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
