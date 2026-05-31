import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { getUrl } from '../../global';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email = "";
  password = "";

  errorMessage = "";

  router = inject(Router);
  notificationService = inject(NotificationService);

  showPassword(){
    const showPasswordCheckbox = document.getElementById("show-password") as HTMLInputElement;
    const passwordField = document.getElementById("password-field") as HTMLInputElement;
    passwordField.type = showPasswordCheckbox.checked? 'text' : 'password';
  }


  checkData(){
    this.errorMessage= ""
    if(this.email == null || this.email == ""){
      this.errorMessage += "Email field is required\n";
    }
    if(this.password == null || this.password == ""){
      this.errorMessage += "Password field is required";
    }
    return this.errorMessage;
  }

  login(){
    const checkDataMsg = this.checkData();
    console.log(checkDataMsg);
    if(checkDataMsg != ""){
      this.notificationService.showNotification(checkDataMsg, "warning");
      return;
    }
    fetch(getUrl("login"), {
      method: 'POST',
      headers: {
        "Content-Type":"application/json"
      },
      body : JSON.stringify({
        Email: this.email,
        Password: this.password
      })
    })
    .then(response => {
      if(response.ok){
        this.router.navigate(["Home"]);
      }else{
        console.log("errore");
        this.notificationService.showNotification("Invalid credential provided, please check","error");

      }
    }).catch(error => {
      console.log(error);
      this.notificationService.showNotification("An error occured, try again or later","error");
    })
  }


}
