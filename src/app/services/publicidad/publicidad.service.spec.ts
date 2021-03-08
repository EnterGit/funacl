import { TestBed } from '@angular/core/testing';

import { PublicidadService } from './publicidad.service';

describe('EmpleosService', () => {
  let service: PublicidadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicidadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
