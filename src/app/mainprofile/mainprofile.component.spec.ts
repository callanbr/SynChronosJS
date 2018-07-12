import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainprofileComponent } from './mainprofile.component';

describe('MainprofileComponent', () => {
  let component: MainprofileComponent;
  let fixture: ComponentFixture<MainprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
