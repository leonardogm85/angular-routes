import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { coursesGuard } from './courses.guard';

describe('coursesGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => coursesGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
