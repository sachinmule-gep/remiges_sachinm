import { Component, OnInit, Renderer2 } from '@angular/core';
import { AlertService, AlertType } from 'src/app/services/alerts.service';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-my-demo-comp',
  templateUrl: './my-demo-comp.component.html',
  styleUrls: ['./my-demo-comp.component.sass'],
})
export class MyDemoCompComponent implements OnInit {
  alerts: { message: string; type: AlertType }[] = [];
  inpText!: any;

  constructor(
    private alert: AlertService,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.subscribeToAlerts();
  }

  showAlert(msg: any, type: any): void {
    this.alert.showAlert(msg, type);
  }

  closeAlert(index: number): void {
    this.alerts.splice(index, 1);
  }

  subscribeToAlerts(): void {
    this.alert.getAlerts().subscribe((alert) => {
      this.alerts.push(alert);
      // Automatically remove the alert after a certain duration
      setTimeout(() => {
        this.closeAlert(this.alerts.indexOf(alert));
      }, 5000);
    });
  }

  showToast(): void {
    console.log('toast triggered');
    this.el.nativeElement.querySelector('#toast').classList.add('show');
    setTimeout(() => {
      this.el.nativeElement.querySelector('#toast').classList.remove('show');
    }, 5000);
  }

  showLoader(): void {
    this.el.nativeElement.querySelector('#loader').classList.remove('hide');
    setTimeout(() => {
      this.el.nativeElement.querySelector('#loader').classList.add('hide');
    }, 3000);
  }

  showConfirm(): void {
    const result = confirm('Are you sure?');
    if (result) {
      alert('Okay button clicked');
    } else {
      alert('Cancel button clicked');
    }
  }
  showInputConfirm(): void {
    const userInput = prompt('Enter your comment:');
    if (userInput !== null) {
      alert(`You entered: ${userInput}`);
    } else {
      alert('User canceled the input.');
    }
  }

  inpConfPopup() {
    console.log(this.inpText);
    if (this.inpText !== null) {
      alert(`You entered: ${this.inpText}`);
      const showTxt = this.el.nativeElement.querySelector('#showInpText');
      const getInput = this.el.nativeElement.querySelector('#getInp');

      this.renderer.setProperty(showTxt, 'innerHTML', this.inpText);
      this.renderer.setStyle(showTxt, 'display', 'block');
      this.renderer.setStyle(getInput, 'display', 'none');
    } else {
      alert('User canceled the input.');
    }
    const targetElement = this.el.nativeElement.querySelector('#clickedBtn');
    this.renderer.setAttribute(targetElement, 'data-bs-dismiss', 'modal');
    console.log('Modified element:', targetElement);
  }
}
