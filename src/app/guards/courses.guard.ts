import { CanActivateChildFn } from '@angular/router';

export const coursesGuard: CanActivateChildFn = (childRoute, state) => {
  console.log('coursesGuard');
  return true;
};
