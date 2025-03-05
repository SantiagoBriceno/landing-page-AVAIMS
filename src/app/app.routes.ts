import { Routes } from '@angular/router'
import { LandingPageComponent } from './views/landing/landing-page.component'
import { AboutUsComponent } from './views/about-us/about-us.component'
import { AdminComponent } from './views/admin/admin.component'
import { ContactUsPageComponent } from './views/contact-us/contact-us-page.component'

export const routes: Routes = [
  {
    path: 'home',
    component: LandingPageComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'contact-us',
    component: ContactUsPageComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
]
