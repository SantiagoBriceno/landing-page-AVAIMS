import { Routes } from '@angular/router'
import { LandingPageComponent } from './views/home/landing/landing-page.component'
import { AboutUsComponent } from './views/home/about-us/about-us.component'
import { AdminComponent } from './views/admin/admin.component'
import { ContactUsPageComponent } from './views/home/contact-us/contact-us-page.component'
import { HomeComponent } from './views/home/home.component'
import { MainComponent } from './views/admin/main/main.component'
import { NoticesAdminComponent } from './views/admin/notices-admin/notices-admin.component'

export const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: MainComponent
      },
      {
        path: 'notices',
        component: NoticesAdminComponent
      }
    ]
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: LandingPageComponent
      },
      {
        path: 'about-us/our-history',
        component: AboutUsComponent
      },
      // {
      //   path: 'about-us/join-us'
      // },
      {
        path: 'contact-us',
        component: ContactUsPageComponent
      }
    ]
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
]
