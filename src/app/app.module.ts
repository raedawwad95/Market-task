import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MatGridListModule } from '@angular/material';
import { ServiceService } from './service.service';
import { EquipmentComponent } from './equipment/equipment.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProjectComponent } from './project/project.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ProjectAdminComponent } from './project-admin/project-admin.component';
import { ManageProjectComponent } from './manage-project/manage-project.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EquipmentComponent,
    EmployeeComponent,
    ProjectComponent,
    ProjectAdminComponent,
    ManageProjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MatGridListModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'equipment', component: EquipmentComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'project', component: ProjectComponent },
      { path: 'projectAdmin', component: ProjectAdminComponent },
      { path: 'project/manageProject', component: ManageProjectComponent }
    ])
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
