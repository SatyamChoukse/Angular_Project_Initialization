import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../environments/environment';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
//TODO: Interceptor should handle the exception and invoke erro toast
  const token = localStorage.getItem(environment.tokenKey); 

  req = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    }
  });

  return next(req);
};
