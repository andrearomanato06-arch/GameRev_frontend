import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Singup } from './singup/singup';

export const routes: Routes = [
  {path:'', redirectTo: 'Login', pathMatch: 'full'},
  {path: 'Login', component: Login},
  {path: 'SingUp', component: Singup}
];
