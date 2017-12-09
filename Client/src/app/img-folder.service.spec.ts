import { TestBed, inject } from '@angular/core/testing';

import { ImgFolderService } from './img-folder.service';

describe('ImgFolderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImgFolderService]
    });
  });

  it('should be created', inject([ImgFolderService], (service: ImgFolderService) => {
    expect(service).toBeTruthy();
  }));
});
