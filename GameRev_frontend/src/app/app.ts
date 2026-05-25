import { Component, inject, signal, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, Router, NavigationEnd } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Login } from './login/login';
import { Singup } from './singup/singup';
import { NavigationService } from './services/navigation-service';
import { every, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Navbar, Login, Singup],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  protected readonly title = signal('GameRev');
  protected readonly router = inject(Router);

  protected readonly navigationService = inject(NavigationService);
  isNavbarShown = false;

  showNavbar(){
    if(!this.navigationService.pathCorrespondsTo("Login") && !this.navigationService.pathCorrespondsTo("SingUp")){
      this.isNavbarShown = true;
    }else{
      this.isNavbarShown = false;
    }
  }

  updateNavbarVisibilityStatus(){
    // controlla se ci sono stati cambi nella rotta tramite evento di fine navigazione
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.showNavbar();
    });
  }

  ngOnInit(){
    this.updateNavbarVisibilityStatus();
  }
}
