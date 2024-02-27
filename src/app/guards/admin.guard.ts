import { CanActivateFn, Router } from '@angular/router';
import { roleType } from './../enums/roleType.enum';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  let roletype = localStorage.getItem('roleType');
  if (roletype) {
    if (roletype == roleType.admin.toString()) {
      return true;
    }
  }
  return inject(Router).navigate(['/home']);
};
