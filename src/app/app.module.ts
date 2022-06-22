import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ContainComponent } from './components/contain/contain.component';
import { FooterComponent } from './components/footer-item/footer-item.component';
import { EmployesComponent } from './components/employes/employes.component';
import { EmployeComponent } from './components/employes/employe/employe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectUserComponent } from './components/project-user/project-user.component';
import { TransationsPageComponent } from './components/transations-page/transations-page.component';
import { TransationComponent } from './components/transation/transation.component';
import { ReportsComponent } from './components/reports/reports.component';
import { EmployeInfoComponent } from './components/employes/employe-info/employe-info.component';
import { ProjectInfoComponent } from './components/project-info/project-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectFormComponent } from './project-form/project-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    ContainComponent,
    FooterComponent,
    EmployesComponent,
    EmployeComponent,
    ProjectsComponent,
    ProjectUserComponent,
    TransationsPageComponent,
    TransationComponent,
    ReportsComponent,
    EmployeInfoComponent,
    ProjectInfoComponent,
    ProjectFormComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
