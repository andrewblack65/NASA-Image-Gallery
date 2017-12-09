import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgFolderDetailComponent } from './img-folder-detail.component';

describe('ImgFolderDetailComponent', () => {
  let component: ImgFolderDetailComponent;
  let fixture: ComponentFixture<ImgFolderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgFolderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgFolderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
