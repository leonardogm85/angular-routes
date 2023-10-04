import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { studentsGuard } from './students.guard';

describe('studentsGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => studentsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
