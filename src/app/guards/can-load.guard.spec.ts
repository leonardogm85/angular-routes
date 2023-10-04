import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { canLoadGuard } from './can-load.guard';

describe('canLoadGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => canLoadGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
