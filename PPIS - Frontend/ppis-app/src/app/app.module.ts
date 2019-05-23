import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { DropdownDirectiveDirective } from './directives/dropdown-directive.directive';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { ActivityComponent } from './components/activity/activity.component';
import { ChangeManagementComponent } from './components/change-management/change-management.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RemoveHost } from './directives/remove-host.directive';
import { ClienthomeComponent } from './components/clients/clienthome/clienthome.component';
import { ClientrequestComponent } from './components/clients/clientrequest/clientrequest.component';
import { AdminhomeComponent } from './components/admins/adminhome/adminhome.component';
import { AdminrequestsComponent } from './components/admins/adminrequests/adminrequests.component';
import { AdminnewproblemComponent } from './components/admins/adminnewproblem/adminnewproblem.component';
import { AdminrequestComponent } from './components/admins/adminrequest/adminrequest.component';
import { ManagerproblemsComponent } from './components/manager/managerproblems/managerproblems.component';
import { ManagerhomeComponent } from './components/manager/managerhome/managerhome.component';
import { ManagerproblemComponent } from './components/manager/managerproblem/managerproblem.component';
import { TechnicianhomeComponent } from './components/technician/technicianhome/technicianhome.component';
import { TechnicianrequestsComponent } from './components/technician/technicianrequests/technicianrequests.component';
import { TechnicianrequestComponent } from './components/technician/technicianrequest/technicianrequest.component';

import { CmanagerhomeComponent } from './components/cmanager/cmanagerhome/cmanagerhome.component';
import { CmanagerchangeComponent } from './components/cmanager/cmanagerchange/cmanagerchange.component';
import { CmanagerchangesComponent } from './components/cmanager/cmanagerchanges/cmanagerchanges.component';

import { BoardhomeComponent } from './components/board/boardhome/boardhome.component';
import { BoardchangesComponent } from './components/board/boardchanges/boardchanges.component';
import { BoardchangeComponent } from './components/board/boardchange/boardchange.component';
import { ClientmyrequestsComponent } from './components/clients/clientmyrequests/clientmyrequests.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    DropdownDirectiveDirective,
    DocumentationComponent,
    ActivityComponent,
    ChangeManagementComponent,
    LoginComponent,
    RemoveHost,
    ClienthomeComponent,
    ClientrequestComponent,
    AdminhomeComponent,
    AdminrequestsComponent,
    AdminnewproblemComponent,
    AdminrequestComponent,
    ManagerproblemsComponent,
    ManagerhomeComponent,
    ManagerproblemComponent,

    TechnicianhomeComponent,
    TechnicianrequestsComponent,
    TechnicianrequestComponent,

    CmanagerhomeComponent,
    CmanagerchangeComponent,
    CmanagerchangesComponent,
    BoardhomeComponent,
    BoardchangesComponent,
    BoardchangeComponent,
    ClientmyrequestsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
