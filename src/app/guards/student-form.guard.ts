import { CanDeactivateFn } from '@angular/router';

import { IFormDeactivate } from '../entities/form-deactivate';

export const studentFormGuard: CanDeactivateFn<IFormDeactivate> = (component, currentRoute, currentState, nextState) => {
  console.log('studentFormGuard');
  return component.canDeactivate();
};
