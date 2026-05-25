import { Router } from '@angular/router';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {

  private readonly router = inject(Router)

  getCurrentPath(){
    return this.router.url;
  }

  // returns true if the path corrisponds to the one provided
  pathCorrespondsTo(path: string){
    return this.router.url.includes(path);
  }
}
