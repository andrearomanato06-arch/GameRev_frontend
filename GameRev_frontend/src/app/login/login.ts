import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  showPassword(){
    const showPasswordCheckbox = document.getElementById("show-password") as HTMLInputElement;
    const passwordField = document.getElementById("password-field") as HTMLInputElement;

    showPasswordCheckbox.addEventListener('change', () => {
      passwordField.type = showPasswordCheckbox.checked? 'text' : 'password';
    });
  }

}
