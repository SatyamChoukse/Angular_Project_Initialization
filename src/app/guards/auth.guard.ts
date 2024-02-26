import { CanActivateFn, Router } from '@angular/router';
import { environment } from '../environments/environment';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  
  if(!localStorage.getItem(environment.tokenName)){
    return inject(Router).navigate(['/login']);
  }

  return true;
};
