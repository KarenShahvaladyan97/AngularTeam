import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployesComponent } from './components/employes/employes.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ReportsComponent } from './components/reports/reports.component';
import { TransationComponent } from './components/transation/transation.component';

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
    path: 'employees',
    component: EmployesComponent
  },
  {
    path: 'transactions',
    component: TransationComponent
  },
  {
    path: "reports",
    component: ReportsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
