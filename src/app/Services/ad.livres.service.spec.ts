import { TestBed, inject } from '@angular/core/testing';

import { Ad.LivresService } from './ad.livres.service';

describe('Ad.LivresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Ad.LivresService]
    });
  });

  it('should be created', inject([Ad.LivresService], (service: Ad.LivresService) => {
    expect(service).toBeTruthy();
  }));
});
