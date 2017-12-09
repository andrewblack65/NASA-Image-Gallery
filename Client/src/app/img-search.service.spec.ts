import { TestBed, inject } from '@angular/core/testing';

import { ImgSearchService } from './img-search.service';

describe('ImgSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImgSearchService]
    });
  });

  it('should be created', inject([ImgSearchService], (service: ImgSearchService) => {
    expect(service).toBeTruthy();
  }));
});
