import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { studentsDetailResolver } from './students-detail.resolver';

describe('studentsDetailResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => studentsDetailResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
