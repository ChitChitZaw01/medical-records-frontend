import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom  } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http'; 

// export const appConfig: ApplicationConfig = {
//   providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
// };

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule), 
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)
  ],
};
