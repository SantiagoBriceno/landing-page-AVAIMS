import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core'
import { provideRouter } from '@angular/router'
import { routes } from './app.routes'
import { provideClientHydration, withEventReplay } from '@angular/platform-browser'
import { provideHttpClient, withFetch } from '@angular/common/http'
import { provideAnimations } from '@angular/platform-browser/animations'
import localeEs from '@angular/common/locales/es'
import { registerLocaleData } from '@angular/common'
registerLocaleData(localeEs, 'es')

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: LOCALE_ID, useValue: 'es' },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(
      withFetch()
    )]
}
