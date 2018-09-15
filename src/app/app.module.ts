import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {MatGridListModule} from '@angular/material';
import { ServiceService } from './service.service';
import { EquipmentComponent } from './equipment/equipment.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProjectComponent } from './project/project.component';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EquipmentComponent,
    EmployeeComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    MatGridListModule,
    RouterModule.forRoot([
      { path: 'equipment', component: EquipmentComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'project', component: ProjectComponent }       
      ])
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
