import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

// components
import { HeaderComponent } from '../header/header.component';
import { AboutComponent } from '../extra/about/about.component';
import { ContactComponent } from '../extra/contact/contact.component';
import { ProfileComponent } from '../profile/profile.component';

const AppRoutes: Routes = [
  {
    path:'',
    component: ProfileComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
