import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployesComponent } from './components/employes/employes.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ReportsComponent } from './components/reports/reports.component';
import { TransationComponent } from './components/transation/transation.component';
import {EmployeInfoComponent} from "./components/employes/employe-info/employe-info.component";
import { ProjectInfoComponent } from './components/project-info/project-info.component';
import { ProjectFormComponent } from './project-form/project-form.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/projects',
    pathMatch: 'full'
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
 
  {
    path: 'projects/add',
    component: ProjectFormComponent
  },
  {
    path: 'projects/:id',
    component: ProjectInfoComponent
  },
  {
    path: 'employees',
    component: EmployesComponent
  },
  {
    path: 'employees/:id',
    component: EmployeInfoComponent
  },
  {
    path:'reports',
    component:ReportsComponent
  },
  {
    path:'transactions',
    component:TransationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
