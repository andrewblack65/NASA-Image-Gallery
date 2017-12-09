import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserImgFolderDetailComponent } from './user-img-folder-detail.component';

describe('UserImgFolderDetailComponent', () => {
  let component: UserImgFolderDetailComponent;
  let fixture: ComponentFixture<UserImgFolderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserImgFolderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserImgFolderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
