import { TestBed } from '@angular/core/testing';

import { PdrojectListService } from './pdroject-list.service';

describe('PdrojectListService', () => {
  let service: PdrojectListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdrojectListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
