import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EquipmentComponent } from './equipment/equipment.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipmentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'equipment', component: EquipmentComponent }    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
