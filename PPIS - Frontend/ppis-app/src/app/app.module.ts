import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { DropdownDirectiveDirective } from './directives/dropdown-directive.directive';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { ActivityComponent } from './components/activity/activity.component';
import { ChangeManagementComponent } from './components/change-management/change-management.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    DropdownDirectiveDirective,
    DocumentationComponent,
    ActivityComponent,
    ChangeManagementComponent
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
