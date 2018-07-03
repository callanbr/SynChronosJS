import { TestBed, inject } from '@angular/core/testing';

import { PhotosService } from './photos.service';

describe('PhotosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotosService]
    });
  });

  it('should be created', inject([PhotosService], (service: PhotosService) => {
    expect(service).toBeTruthy();
  }));
});
