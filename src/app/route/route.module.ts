import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { EquipmentComponent } from '../equipment/equipment.component';
import { EmployeeComponent } from '../employee/employee.component';
import { ProjectComponent } from '../project/project.component';
import { ProjectAdminComponent } from '../project-admin/project-admin.component';
import { ManageProjectComponent } from '../manage-project/manage-project.component';

const routes: Routes = [
      { path: 'equipment', component: EquipmentComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'project', component: ProjectComponent },
      { path: 'projectAdmin', component: ProjectAdminComponent },
      { path: 'project/manageProject', component: ManageProjectComponent }
    ]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RouteModule { }
