import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MatGridListModule } from '@angular/material';
import { EquipmentComponent } from './equipment/equipment.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProjectComponent } from './project/project.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ProjectAdminComponent } from './project-admin/project-admin.component';
import { ManageProjectComponent } from './manage-project/manage-project.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouteModule } from './route/route.module';

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
    RouteModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
