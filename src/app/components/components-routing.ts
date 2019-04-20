import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ListTasksComponent } from './list-tasks/list-tasks.component';
// import { CreateTaskComponent } from './create-task/create-task.component';
// import { EditTaskComponent } from './edit-task/edit-task.component';
// import { ExpiredTasksComponent } from './expired-tasks/expired-tasks.component';
// import { HomeComponent } from './home/home.component';
// import { TaskDetailsComponent } from './task-details/task-details.component';
import { AuthGuard } from '../core/guards/auth.guard';


const routes : Routes = [
    // {path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
    // {path: 'list-tasks', component: ListTasksComponent},
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