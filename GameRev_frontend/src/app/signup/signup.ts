import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { getUrl } from '../../global';
import { NotificationService } from '../services/notification-service';

@Component({
  selector: 'app-singup',
  imports: [FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {

  username = "";
  email = "";
  password = "";
  confirm = "";

  router = inject(Router);
  notificationService = inject(NotificationService);

  isAdmin : boolean = false;

  showPassword(){
    const showPasswordCheckbox = document.getElementById("show-password") as HTMLInputElement;
    const passwordField = document.getElementById("password-field") as HTMLInputElement;
    const confirm = document.getElementById("cnf-password-field") as HTMLInputElement;

    passwordField.type = showPasswordCheckbox.checked? 'text' : 'password';
    confirm.type = showPasswordCheckbox.checked? 'text' : 'password';

  }

  passwordsMatch(password: string, confirm: string){
    return password.trim() == confirm.trim();
  }

  checkData(){
    var msg = "";
    if(this.username == null || this.username == ""){
      msg += "Username is required\n";
    }
    if(this.email == null || this.email == ""){
      msg += "Email is required\n";
    }
    if(this.password == null || this.password == ""){
      msg += "Password is required\n";
    }
    if(this.confirm == null || this.confirm == ""){
      msg += "Password confirmation is required\n";
    }
    return msg;
  }

  signUp(){

    const dataValidation = this.checkData();
    if(dataValidation != ""){
      this.notificationService.showNotification(dataValidation, "warning");
      return;
    }

    const endpoint = this.isAdmin ? getUrl("admin/register") : getUrl("user/register");
    const password = this.password;
    const confirm = this.confirm;

    if(this.passwordsMatch(password, confirm)){
      fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Username: this.username,
          Email: this.email,
          Password: this.password
        })
       })
       .then(response => {
        if(response.ok){
          this.router.navigate(["/Login"]);
        }else{
          console.log("errore");
          this.notificationService.showNotification("The email or username may be alredy in use","error");
        }
       })
       .catch(error => {
          console.log(error);
          this.notificationService.showNotification("An error occured, please try again or latar","error");
       });
      }else{
        console.log("Passwords are different");
        this.notificationService.showNotification("Passwords do not match","warning");
      }

  }
}
