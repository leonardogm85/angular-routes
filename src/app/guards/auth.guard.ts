import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthService } from '../shared/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  console.log('authGuard: CanActivateFn');

  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  }

  router.navigate(['login']);

  return false;
};
