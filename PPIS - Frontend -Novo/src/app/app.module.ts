import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { DropdownDirectiveDirective } from './directives/dropdown-directive.directive';
import { DocumentationComponent } from './components/main-component/documentation/documentation.component';
import { ActivityComponent } from './components/activity/activity.component';
import { ChangeManagementComponent } from './components/main-component/change-management/change-management.component';
import { CreateActivityComponent } from './components/create-activity/create-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    DropdownDirectiveDirective,
    DocumentationComponent,
    ActivityComponent,
    ChangeManagementComponent,
    CreateActivityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,                        
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
