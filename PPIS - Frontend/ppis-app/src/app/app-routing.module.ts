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
import { ManagerhomeComponent } from './components/manager/managerhome/managerhome.component';
import { ManagerproblemsComponent } from './components/manager/managerproblems/managerproblems.component';
import { ManagerproblemComponent } from './components/manager/managerproblem/managerproblem.component';
import { TechnicianhomeComponent } from './components/technician/technicianhome/technicianhome.component';
import { TechnicianrequestsComponent } from './components/technician/technicianrequests/technicianrequests.component';
import { TechnicianrequestComponent } from './components/technician/technicianrequest/technicianrequest.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { ActivityComponent } from './components/activity/activity.component';
import { NewactivityComponent } from './components/activities/newactivity/newactivity.component';
import { AllActivitiesComponent } from './components/activities/all-activities/all-activities.component';
import { VisualRepresentationComponent } from './components/visual-representation/visual-representation.component';
import { ClientmyrequestsComponent } from './components/clients/clientmyrequests/clientmyrequests.component';
import { CmanagerhomeComponent } from './components/cmanager/cmanagerhome/cmanagerhome.component';
import { CmanagerchangesComponent } from './components/cmanager/cmanagerchanges/cmanagerchanges.component';
import { CmanagerchangeComponent } from './components/cmanager/cmanagerchange/cmanagerchange.component';
import { BoardhomeComponent } from './components/board/boardhome/boardhome.component';
import { BoardchangesComponent } from './components/board/boardchanges/boardchanges.component';
import { BoardchangeComponent } from './components/board/boardchange/boardchange.component';
import { TechnicianChangesComponent } from './components/technician/technician-changes/technician-changes.component';
import { StatisticalViewComponent } from './components/manager/statistical-view/statistical-view.component';

const routes : Routes = [
  {path : 'login', component : LoginComponent},
  {path : 'client', component : ClienthomeComponent,
    children : [
      {path : 'request', component : ClientrequestComponent},
      {path : 'myrequest', component : ClientmyrequestsComponent}
    ]
  },
  {path : 'admin', component : AdminhomeComponent,
    children : [
      {path : 'requests', component : AdminrequestsComponent},
      {path : 'request/:id', component : AdminrequestComponent},
      {path : 'problem', component : AdminnewproblemComponent}
    ]
  },
  {path : 'technician', component : TechnicianhomeComponent,
    children : [
      {path : 'problems', component : TechnicianrequestsComponent},
      {path : 'problem/:id', component : ManagerproblemComponent},
      {path : 'problem/:id/activities', component : ActivityComponent},
      {path : 'problem/:id/activities/all', component : AllActivitiesComponent},
      {path : 'problem/:id/activities/new', component : NewactivityComponent},
      {path : 'problems/visualrepresentation', component : VisualRepresentationComponent},
      {path : 'changes', component: TechnicianChangesComponent}

    ]
  },
  { path : 'manager', component : ManagerhomeComponent,
    children : [
      {path : 'problems/:filter', component : ManagerproblemsComponent},
      {path : 'problem/:id', component : ManagerproblemComponent},
      {path : 'problem/:id/documentation', component : DocumentationComponent},
      {path : 'problem/:id/statisticalview', component : StatisticalViewComponent},
      {path : 'problem/:id/activities', component : ActivityComponent},
      {path : 'problem/:id/:filter', component : ManagerproblemComponent}
    ]
  },
  { path : 'cmanager', component : CmanagerhomeComponent,
    children : [
      {path : 'changes/:filter', component : CmanagerchangesComponent},
      {path : 'change/:id', component : CmanagerchangeComponent}
    ]
  },
  {path : 'board', component : BoardhomeComponent,
    children : [
      {path : 'changes', component : BoardchangesComponent},
      {path : 'change/:id', component : BoardchangeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
