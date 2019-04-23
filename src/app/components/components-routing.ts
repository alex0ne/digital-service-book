import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListLogsComponent } from './list-logs/list-logs.component';
import { AddLogComponent } from './add-log/add-log.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';
import { MyVehicleComponent } from './my-vehicle/my-vehicle.component';
import { AdminPageComponent } from './admin-page/admin-page.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'list-logs', component: ListLogsComponent },
  { path: 'add-log', component: AddLogComponent },
  { path: 'add-vehicle', component: AddVehicleComponent },
  { path: 'my-vehicle', component: MyVehicleComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'edit-vehicle/:id', component: EditVehicleComponent},
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ComponentsRouting { }