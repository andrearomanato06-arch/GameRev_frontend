import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Login } from './login/login';
import { Singup } from './singup/singup';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Navbar, Login, Singup],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('GameRev_frontend');
}
