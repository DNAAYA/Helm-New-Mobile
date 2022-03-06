import { TestBed } from '@angular/core/testing';

import { ReplaceService } from './replace.service';

describe('ReplaceService', () => {
  let service: ReplaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReplaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
