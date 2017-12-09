import { TestBed, inject } from '@angular/core/testing';

import { AdminDisputeService } from './admin-dispute.service';

describe('AdminDisputeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminDisputeService]
    });
  });

  it('should be created', inject([AdminDisputeService], (service: AdminDisputeService) => {
    expect(service).toBeTruthy();
  }));
});
