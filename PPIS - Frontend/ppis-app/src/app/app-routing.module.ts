import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './components/login/login.component';
import { ClienthomeComponent } from './components/clients/clienthome/clienthome.component';
import { ClientrequestComponent } from './components/clients/clientrequest/clientrequest.component';
import { AdminhomeComponent } from './components/admins/adminhome/adminhome.component';
import { AdminrequestsComponent } from './components/admins/adminrequests/adminrequests.component';
import { AdminrequestComponent } from './components/admins/adminrequest/adminrequest.component';
import { AdminnewproblemComponent } from './components/admins/adminnewproblem/adminnewproblem.component';

const routes : Routes = [
  {path : 'login', component : LoginComponent},
  {path : 'client', component : ClienthomeComponent,
    children : [
      {path : 'request', component : ClientrequestComponent}
    ]
  },
  {path : 'admin', component : AdminhomeComponent,
    children : [
      {path : 'requests', component : AdminrequestsComponent},
      {path : 'request/:id', component : AdminrequestComponent},
      {path : 'problem', component : AdminnewproblemComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
