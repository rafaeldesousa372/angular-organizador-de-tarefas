import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component'; 
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { TaskCreateComponent } from '../app/components/task-create/task-create.component';
import { TaskDeleteComponent } from './components/task-delete/task-delete.component';
import { LoginComponent } from './login/login/login.component';
import { AppHomeComponent } from './components/app-home.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: AppHomeComponent },
    { path: 'task-list', component: TaskListComponent },
    { path: 'task-create', component: TaskCreateComponent },
    { path: 'task-edit/:id', component: TaskEditComponent },
    { path: 'task-delete/:id', component: TaskDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule { }