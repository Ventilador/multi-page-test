import { TestBed } from '@angular/core/testing';

import { SecondDashboardService } from './second-dashboard.service';

describe('SecondDashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SecondDashboardService = TestBed.get(SecondDashboardService);
    expect(service).toBeTruthy();
  });
});
