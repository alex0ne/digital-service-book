import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListLogsComponent } from './list-logs/list-logs.component';
import { AddLogComponent } from './add-log/add-log.component';
// import { CreateTaskComponent } from './create-task/create-task.component';
// import { EditTaskComponent } from './edit-task/edit-task.component';
// import { ExpiredTasksComponent } from './expired-tasks/expired-tasks.component';
import { HomeComponent } from './home/home.component';
// import { TaskDetailsComponent } from './task-details/task-details.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { MyVehicleComponent } from './my-vehicle/my-vehicle.component';


const routes : Routes = [
    {path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
    {path: 'list-logs', component: ListLogsComponent},
    {path: 'add-log', component: AddLogComponent},
    {path: 'add-vehicle', component: AddVehicleComponent},
    {path: 'my-vehicle', component: MyVehicleComponent},
    // {path: 'create-task', component: CreateTaskComponent},
    // {path: 'edit/:id', component: EditTaskComponent},
    // {path: 'expired-tasks', component: ExpiredTasksComponent},
    // {path: 'details/:id', component: TaskDetailsComponent},
]

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
  })
  export class ComponentsRouting {}