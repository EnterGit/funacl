import { TestBed } from '@angular/core/testing';

import { LisregionesService } from './lisregiones.service';

describe('LisregionesService', () => {
  let service: LisregionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LisregionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
