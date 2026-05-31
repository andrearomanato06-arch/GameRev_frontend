import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {

  message: string = "Messaggio di test";
  duration: number = 10000;
  isVisible: boolean = false;
  status= signal<string>("");
  types: string[] = ["success", "error", "warning", "generic"];


  // ttl = the amount of time that the notification has before it it's hidden
  showNotification(message: string, status: string){
    this.message = message;
    this.status.set(this.checkIfStatusExist(status.trim().toLowerCase()));
    this.isVisible = true;

    setTimeout(() => {
      this.close();
    }, this.duration);
  }

  close(){
    this.isVisible = false;
    this.message = "";
    this.status.set("");
  }

  checkIfStatusExist(status: string): string{
    if(this.types.includes(status)){
      return status;
    }
    return "generic";
  }

}
