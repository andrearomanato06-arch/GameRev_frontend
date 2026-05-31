import { Component, inject } from '@angular/core';
import { NotificationService } from '../services/notification-service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-notification',
  imports: [NgClass],
  templateUrl: './notification.html',
  styleUrl: './notification.css',
})
export class Notification {

  notificationService = inject(NotificationService);

}
