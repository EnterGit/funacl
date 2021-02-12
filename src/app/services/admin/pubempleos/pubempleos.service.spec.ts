import { TestBed } from '@angular/core/testing';

import { PubempleosService } from './pubempleos.service';

describe('PubempleosService', () => {
  let service: PubempleosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PubempleosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
