import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPhotosComponent } from './form-photos.component';

describe('FormPhotosComponent', () => {
  let component: FormPhotosComponent;
  let fixture: ComponentFixture<FormPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
