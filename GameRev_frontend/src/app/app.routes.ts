import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Singup } from './singup/singup';
import { Home } from './home/home';

export const routes: Routes = [
  {path:'', redirectTo: 'Home', pathMatch: 'full'},
  {path: 'Home', component: Home},
  {path: 'Login', component: Login},
  {path: 'SingUp', component: Singup}
];
