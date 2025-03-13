import { Routes } from '@angular/router'
import { LandingPageComponent } from './views/home/landing/landing-page.component'
import { AboutUsComponent } from './views/home/about-us/about-us.component'
import { AdminComponent } from './views/admin/admin.component'
import { ContactUsPageComponent } from './views/home/contact-us/contact-us-page.component'
import { HomeComponent } from './views/home/home.component'
import { MainComponent } from './views/admin/main/main.component'
import { NoticesAdminFixComponent } from './views/admin/notices-admin-fix/notices-admin-fix.component'
import { ContactAdminComponent } from './views/admin/contact-admin/contact-admin.component'
import { JoinUsComponent } from './views/home/join-us/join-us.component'
import { NoticesComponent } from './views/home/notices/notices.component'
import { InstitutionalAlliesComponent } from './views/home/institutional-allies/institutional-allies.component'
import { ContributingAlliesComponent } from './views/home/contributing-allies/contributing-allies.component'
import { OurProfComponent } from './views/home/our-prof/our-prof.component'

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
        component: NoticesAdminFixComponent
      },
      {
        path: 'contact',
        component: ContactAdminComponent
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
      {
        path: 'about-us/join-us',
        component: JoinUsComponent
      },
      {
        path: 'contact-us',
        component: ContactUsPageComponent
      },
      {
        path: 'notices',
        component: NoticesComponent
      },
      {
        path: 'our-allies/institutional-allies',
        component: InstitutionalAlliesComponent
      },
      {
        path: 'our-allies/contributing-allies',
        component: ContributingAlliesComponent
      },
      {
        path: 'our-allies/professional',
        component: OurProfComponent
      }
    ]
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
]
