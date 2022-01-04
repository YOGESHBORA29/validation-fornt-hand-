import { TestBed } from '@angular/core/testing';

import { AuthanticationServiceService } from './authantication-service.service';

describe('AuthanticationServiceService', () => {
  let service: AuthanticationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthanticationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
