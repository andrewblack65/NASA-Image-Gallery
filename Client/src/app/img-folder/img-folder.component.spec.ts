import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgFolderComponent } from './img-folder.component';

describe('ImgFolderComponent', () => {
  let component: ImgFolderComponent;
  let fixture: ComponentFixture<ImgFolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgFolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
