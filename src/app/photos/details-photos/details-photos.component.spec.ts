import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPhotosComponent } from './details-photos.component';

describe('DetailsPhotosComponent', () => {
  let component: DetailsPhotosComponent;
  let fixture: ComponentFixture<DetailsPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
