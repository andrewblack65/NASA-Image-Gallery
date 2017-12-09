import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersImgFolderComponent } from './users-img-folder.component';

describe('UsersImgFolderComponent', () => {
  let component: UsersImgFolderComponent;
  let fixture: ComponentFixture<UsersImgFolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersImgFolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersImgFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
