import { CanActivateFn, Router } from '@angular/router';
import { roleType } from './../enums/roleType.enum';
import { inject } from '@angular/core';
import { environment } from '../environments/environment';

export const adminGuard: CanActivateFn = (route, state) => {
  let roletype = localStorage.getItem(environment.empRoleTypeKey);
  if (roletype) {
    if (roletype == roleType.admin.toString()) {
      return true;
    }
  }
  return inject(Router).navigate(['/home']);
};
