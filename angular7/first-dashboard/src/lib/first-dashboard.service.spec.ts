import { TestBed } from '@angular/core/testing';

import { FirstDashboardService } from './first-dashboard.service';

describe('FirstDashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirstDashboardService = TestBed.get(FirstDashboardService);
    expect(service).toBeTruthy();
  });
});
