import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-add-customerby-rctfrm',
  templateUrl: './add-customerby-rctfrm.component.html',
  styleUrls: ['./add-customerby-rctfrm.component.sass'],
})
export class AddCustomerbyRctfrmComponent implements OnInit {
  successMessage: boolean = false;

  // form - form group instance
  customerForm: FormGroup = this.fb.group({
    firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    email: ['', [Validators.email, this.isEmailValid]],
    dob: ['', [Validators.required, this.isAgeAbove18]],
    mobile: ['', [Validators.pattern('^[0-9]{10}$')]],
    address: [''],
    zip: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  // form - submittion logic
  onSubmit() {
    console.log('submit has been clicked', this.customerForm.value);

    if (this.customerForm.valid) {
      this.saveCustInfo(this.customerForm);
      this.showToast();
    } else {
      this.successMessage = false;
    }
  }

  // form - saving data to local storage
  saveCustInfo(custInfo: any) {
    console.log('saving customer info', custInfo.value);
    localStorage.setItem('custInformation', JSON.stringify(custInfo.value));
  }

  // form - initiate success toast message for 5 sec
  showToast() {
    this.successMessage = true;
    setTimeout(() => {
      this.successMessage = false;
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

  // form - validation check whether date is above 18 or not
  isAgeAbove18(control: AbstractControl): ValidationErrors | null {
    const birthDate = new Date(control.value);
    const currentDate = new Date();

    // Calculate the age by subtracting the birthdate from the current date
    const ageInMilliseconds = currentDate.getTime() - birthDate.getTime();
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

    return ageInYears >= 18 ? null : { ageBelow18: true };
  }
}
