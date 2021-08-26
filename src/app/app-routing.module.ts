import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToDoComponent } from './add-to-do/add-to-do.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ToDoComponent } from './to-do/to-do.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'todo',
    component: ToDoComponent
  },
  {
    path: 'addtodo',
    component: AddToDoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
