import { TestBed, inject } from '@angular/core/testing';

import { SecurityServiceService } from './security-service.service';

describe('SecurityServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecurityServiceService]
    });
  });

  it('should be created', inject([SecurityServiceService], (service: SecurityServiceService) => {
    expect(service).toBeTruthy();
  }));
});
