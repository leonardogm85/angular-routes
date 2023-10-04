import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

import { AuthService } from '../shared/auth.service';

export const canLoadGuard: CanMatchFn = (route, segments) => {
  console.log('authGuard: CanMatchFn');

  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  }

  router.navigate(['login']);

  return false;
};
