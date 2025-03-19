// import { CanActivateFn } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };

// src/app/auth.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);  // Inject AuthService
  const router = inject(Router);  // Inject Router to navigate on unauthenticated
  
  // Check if the user is authenticated
  // if (authService.isAuthenticated()) {
  //   return true;  // Allow access to the route
  // } else {
  //   // Redirect to the login page if not authenticated
  //   router.navigate(['/login']);
  //   return false;  // Deny access to the route
  // }
  return true;
};
