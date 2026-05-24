import { Component } from '@angular/core';

@Component({
  selector: 'app-singup',
  imports: [],
  templateUrl: './singup.html',
  styleUrl: './singup.css',
})
export class Singup {
  showPassword(){
    const showPasswordCheckbox = document.getElementById("show-password") as HTMLInputElement;
    const passwordField = document.getElementById("password-field") as HTMLInputElement;

    showPasswordCheckbox.addEventListener('change', () => {
      passwordField.type = showPasswordCheckbox.checked? 'text' : 'password';
    });
  }
}
