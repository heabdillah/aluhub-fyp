import { Component } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { SchemaComponent } from './components/schema/schema.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
// import { EventsComponent } from './pages/events/events.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { AlumniComponent } from './pages/alumni/alumni.component';
import { MyprofileComponent } from './pages/myprofile/myprofile.component';
import { AddjobComponent } from './pages/addjob/addjob.component';
import { JobsDatatableComponent } from './pages/jobs-datatable/jobs-datatable.component';
import { LoginaComponent } from './pages/logina/logina.component';
import { authGuard } from './guards/auth.guard';
export const routes: Routes = [
  {
    path: '',
    component: SchemaComponent,
    canActivate: [authGuard],
    children: [

      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      // {
      //   path: 'events',
      //   component: EventsComponent,
      // },
      {
        path: 'jobs',
        component: JobsComponent,
      },
       {
        path: 'addjob',
        component: AddjobComponent,
       },
      {
        path: 'alumni',
        component: AlumniComponent,
      },
      {
        path: 'myprofile',
        component: MyprofileComponent,
      },
    ]
  },
  {
    path: 'logina',
    component: LoginaComponent,
  }
];
