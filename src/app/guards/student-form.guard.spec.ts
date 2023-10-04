import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { studentFormGuard } from './student-form.guard';

describe('studentFormGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => studentFormGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
