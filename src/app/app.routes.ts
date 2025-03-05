import { Routes } from '@angular/router'
import { LandingPageComponent } from './views/home/landing/landing-page.component'
import { AboutUsComponent } from './views/home/about-us/about-us.component'
import { AdminComponent } from './views/admin/admin.component'
import { ContactUsPageComponent } from './views/home/contact-us/contact-us-page.component'
import { HomeComponent } from './views/home/home.component'

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: LandingPageComponent
      },
      {
        path: 'about-us',
        component: AboutUsComponent
      },
      {
        path: 'contact-us',
        component: ContactUsPageComponent
      }
    ]
  },

  {
    path: 'admin',
    component: AdminComponent
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
]
