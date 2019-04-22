import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsRouting } from './components-routing';
import { HomeComponent } from './home/home.component';
import { ListLogsComponent } from './list-logs/list-logs.component';
import { AddLogComponent } from './add-log/add-log.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { MyVehicleComponent } from './my-vehicle/my-vehicle.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsRouting
  ],
  declarations: [
    HomeComponent,
    ListLogsComponent,
    AddLogComponent,
    AddVehicleComponent,
    MyVehicleComponent,
    AdminPageComponent, 
  ]
})
export class ComponentsModule { }