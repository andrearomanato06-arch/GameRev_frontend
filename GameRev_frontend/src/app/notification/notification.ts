import { Component, inject } from '@angular/core';
import { NotificationService } from '../services/notification-service';
import { NgClass } from '@angular/common';
import { catchError, defer } from 'rxjs';

@Component({
  selector: 'app-notification',
  imports: [NgClass],
  templateUrl: './notification.html',
  styleUrl: './notification.css',
})
export class Notification {

  notificationService = inject(NotificationService);

  getIconByStatus() : string{
    const status = this.notificationService.status();
    if(status == 'success'){
      return "success.png";
    }else if(status == 'error'){
      return 'error.png';
    }else if(status == 'warning'){
      return 'warning.png';
    }else{
      return 'settings.png'; // generic notification image
    }
  }
}
