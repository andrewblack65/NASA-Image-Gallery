import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminImgDetailComponent } from './admin-img-detail.component';

describe('AdminImgDetailComponent', () => {
  let component: AdminImgDetailComponent;
  let fixture: ComponentFixture<AdminImgDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminImgDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminImgDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
