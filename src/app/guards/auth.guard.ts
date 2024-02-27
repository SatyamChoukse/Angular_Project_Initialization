import { CanActivateFn, Router } from '@angular/router';
import { environment } from '../environments/environment';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  
  console.log("inside interceptor");
  
  if(!localStorage.getItem(environment.tokenKey)){
    return inject(Router).navigate(['/login']);
  }

  return true;
};


//TODO: add role based guards Admin guard in a separate file