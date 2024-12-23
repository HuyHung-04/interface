import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common'; // Thêm CommonModule để sử dụng các tính năng chung của Angular.

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    importProvidersFrom(CommonModule) // Không cần import ChartsModule, chỉ cần CommonModule
  ]
};
