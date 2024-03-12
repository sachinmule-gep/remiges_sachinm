import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.sass'],
})
export class UserRegistrationComponent implements OnInit {
  showToast: boolean = false;
  toastMessage: string = '';

  // form - form group instance
  userRegistration: FormGroup = this.fb.group({
    email: ['', [Validators.email, this.isEmailValid]],
    password: ['', [Validators.required, this.passwordValid]],
  });

  constructor(
    private fb: FormBuilder,
    private registerService: RegistrationService
  ) {} //

  ngOnInit(): void {}

  onSubmit() {
    if (this.userRegistration.valid) {
      const { email, password } = this.userRegistration.value;

      //this.saveCustInfo(this.userRegistration);

      this.registerService.register(email, password).subscribe(
        (response) => {
          // Handle successful registration, save the token in localStorage
          const token = response.token;
          localStorage.setItem('token', token);
          console.log('Registration successful. Token saved:', token);
          console.log('Response:', response);
          this.showToastMessage(true, 'Form has been saved successfully.');
        },
        (error) => {
          // Handle registration error
          console.error('Registration failed:', error);
          this.showToastMessage(
            false,
            'Registration failed. Please try again.'
          );
        }
      );
    } else {
      this.showToastMessage(false, 'Invalid form. Please check your inputs.');
    }
  }

  // form - saving data to local storage
  saveCustInfo(custInfo: any) {
    console.log('saving customer info', custInfo.value);
    localStorage.setItem('custInformation', JSON.stringify(custInfo.value));
  }

  showToastMessage(isSuccess: boolean, message: string = '') {
    this.showToast = true;
    this.toastMessage = message;

    setTimeout(() => {
      this.showToast = false;
      this.toastMessage = '';
    }, 5000);
  }

  //validation - email custom validation
  isEmailValid(control: { value: string }) {
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,4}$/;
    if (control.value && !emailRegex.test(control.value)) {
      return { invalidEmail: true };
    }
    return null;
  }

  passwordValid(control: { value: string }) {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (control.value && !passwordRegex.test(control.value)) {
      return { invalidPwd: true };
    }
    return null;
  }
}
