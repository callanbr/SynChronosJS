import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPhotosComponent } from './list-photos.component';

describe('ListPhotosComponent', () => {
  let component: ListPhotosComponent;
  let fixture: ComponentFixture<ListPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
