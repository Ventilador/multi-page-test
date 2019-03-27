import { TestBed } from '@angular/core/testing';

import { FirstComponentService } from './first-component.service';

describe('FirstComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirstComponentService = TestBed.get(FirstComponentService);
    expect(service).toBeTruthy();
  });
});
