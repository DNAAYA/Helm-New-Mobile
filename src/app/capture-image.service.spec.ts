import { TestBed } from '@angular/core/testing';

import { CaptureImageService } from './capture-image.service';

describe('CaptureImageService', () => {
  let service: CaptureImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaptureImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
