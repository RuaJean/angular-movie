import { TestBed } from '@angular/core/testing';

import { EntidadesService } from './entidad.service';

describe('EntidadesService', () => {
  let service: EntidadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntidadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
