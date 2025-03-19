import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';  // AuthService to access the token

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Inject the AuthService to access the token
  const authService = inject(AuthService);
  const token = authService.getToken();  // Method in AuthService that retrieves the token

  // If there's a token, clone the request and set the Authorization header
  if (token) {
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    // Continue with the cloned request containing the token
    return next(clonedRequest);
  }

  // If no token, proceed with the original request
  return next(req);
};
