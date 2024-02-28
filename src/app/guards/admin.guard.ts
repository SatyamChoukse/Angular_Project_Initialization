import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { environment } from '../environments/environment';
import { RoleType } from '../enums/roleType.enum';

export const adminGuard: CanActivateFn = (route, state) => {
  let roletype = localStorage.getItem(environment.empRoleTypeKey);
  if (roletype) {
    if (roletype == RoleType.admin.toString()) {
      return true;
    }
  }
  return inject(Router).navigate(['/home']);
};
