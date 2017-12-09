import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewImgFolderComponent } from './new-img-folder.component';

describe('NewImgFolderComponent', () => {
  let component: NewImgFolderComponent;
  let fixture: ComponentFixture<NewImgFolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewImgFolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewImgFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
