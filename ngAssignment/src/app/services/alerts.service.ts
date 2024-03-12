import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AlertService {

  private alertSubject = new Subject<AlertMessage>();

  getAlerts() {
    return this.alertSubject.asObservable();
  }

  showAlert(message: string, type: AlertType = 'success') {
    this.alertSubject.next({ message, type });
  }
}
export interface AlertMessage {
  message: string;
  type: AlertType;
}

export type AlertType = 'success' | 'info' | 'warning' | 'danger';


