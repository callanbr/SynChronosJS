import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePhotoDetailComponent } from './profile-photo-detail.component';

describe('ProfilePhotoDetailComponent', () => {
  let component: ProfilePhotoDetailComponent;
  let fixture: ComponentFixture<ProfilePhotoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePhotoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePhotoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
