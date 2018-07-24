import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePhotoListComponent } from './profile-photo-list.component';

describe('ProfilePhotoListComponent', () => {
  let component: ProfilePhotoListComponent;
  let fixture: ComponentFixture<ProfilePhotoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePhotoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePhotoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
