import { CanActivateChildFn } from '@angular/router';

import { of } from 'rxjs';

export const studentsGuard: CanActivateChildFn = (childRoute, state) => {
  console.log('studentsGuard: CanActivateChildFn');

  if (state.url.includes('edit')) {
    // alert('User access denied!');
    // return of(false);
  }

  return of(true);
};
