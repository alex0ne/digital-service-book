import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ListTasksComponent } from './list-tasks/list-tasks.component';
// import { TaskDetailsComponent } from './task-details/task-details.component';
// import { ExpiredTasksComponent } from './expired-tasks/expired-tasks.component';
// import { CreateTaskComponent } from './create-task/create-task.component';

// import { EditTaskComponent } from './edit-task/edit-task.component';
import { FormsModule } from '@angular/forms';
import { ComponentsRouting } from './components-routing';
import { HomeComponent } from './home/home.component';
import { ListLogsComponent } from './list-logs/list-logs.component';
import { AddLogComponent } from './add-log/add-log.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { MyVehicleComponent } from './my-vehicle/my-vehicle.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsRouting
  ],
  declarations: [
    // ListTasksComponent, 
    // TaskDetailsComponent, 
    // ExpiredTasksComponent, 
    // CreateTaskComponent, 
    HomeComponent,
    ListLogsComponent,
    AddLogComponent,
    AddVehicleComponent,
    MyVehicleComponent, 
    // EditTaskComponent
  ]
})
export class ComponentsModule { }