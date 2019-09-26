import { TestBed } from '@angular/core/testing';

import { GeolocalizacaoService } from './geolocalizacao.service';

describe('GeolocalizacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeolocalizacaoService = TestBed.get(GeolocalizacaoService);
    expect(service).toBeTruthy();
  });
});
