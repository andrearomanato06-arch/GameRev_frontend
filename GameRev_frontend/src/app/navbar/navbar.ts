import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  isMenuOpen = false;

  // funzione per aprire il menù hamburger
  toggleMenu(){
    const screenWidth = document.documentElement.clientWidth;
    if(screenWidth < 880){
      this.isMenuOpen = !this.isMenuOpen;
    }
  }

}
