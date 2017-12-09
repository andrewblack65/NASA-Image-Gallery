import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserImgFoldersComponent } from './edit-user-img-folders.component';

describe('EditUserImgFoldersComponent', () => {
  let component: EditUserImgFoldersComponent;
  let fixture: ComponentFixture<EditUserImgFoldersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUserImgFoldersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserImgFoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
