import { TestBed } from '@angular/core/testing';

import { SecondComponentService } from './second-component.service';

describe('SecondComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SecondComponentService = TestBed.get(SecondComponentService);
    expect(service).toBeTruthy();
  });
});
