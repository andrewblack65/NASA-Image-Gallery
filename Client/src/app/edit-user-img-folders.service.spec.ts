import { TestBed, inject } from '@angular/core/testing';

import { EditUserImgFoldersService } from './edit-user-img-folders.service';

describe('EditUserImgFoldersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditUserImgFoldersService]
    });
  });

  it('should be created', inject([EditUserImgFoldersService], (service: EditUserImgFoldersService) => {
    expect(service).toBeTruthy();
  }));
});
