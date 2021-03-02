import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LandinglayoutComponent } from './landinglayout/landinglayout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchMentorComponent } from './search-mentor/search-mentor.component';
import { CreatecorseComponent } from './createcorse/createcorse.component';
import { CollabrationComponent } from './collabration/collabration.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'layout',
    pathMatch: 'full',
  },
  { path: 'layout', component: LandinglayoutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'findmentor', component: SearchMentorComponent },
  { path: 'createcorse', component: CreatecorseComponent },
  { path: 'collabrate', component: CollabrationComponent },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
