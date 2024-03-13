import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-customerby-tplfrm',
  templateUrl: './add-customerby-tplfrm.component.html',
  styleUrls: ['./add-customerby-tplfrm.component.sass'],
})
export class AddCustomerbyTplfrmComponent implements OnInit {
  successMessage: boolean = false;
  add_customer: FormGroup;
  isAbove18: boolean = true;
  //isDisable:boolean = true

  constructor(private fb: FormBuilder) {
    this.add_customer = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {}

  // form - submit
  ngSubmit(add_customer: NgForm) {
    this.isAbove18 = this.isAgeAbove18(add_customer.value['inputDOB']);

    console.log(add_customer.value);
    this.formValidation();

    if (add_customer.valid) {
      this.saveCustInfo(add_customer);
      this.showToast();
      const customerDetails = {};
    } else {
      this.successMessage = false;
    }
  }

  // form - validation
  formValidation() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');

    // Loop over them and prevent submission
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        'submit',
        (event) => {
          if (!form) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        },
        false
      );
    });
  }

  // form - saving data to local storage
  saveCustInfo(custInfo: any) {
    console.log('saving customer info', custInfo.value);
    localStorage.setItem('custInformation', JSON.stringify(custInfo.value));
    // this.show()Invalid
  }

  // form - initiate success toast message for 5 sec
  showToast() {
    this.successMessage = true;
    setTimeout(() => {
      this.successMessage = false;
    }, 5000);
  }

  // form - validation check whether date is above 18 or not

  isAgeAbove18(inpDate: Date) {
    const birthDate = new Date(inpDate);
    const currentDate = new Date();

    // Calculate the age by subtracting the birthdate from the current date
    const ageInMilliseconds = currentDate.getTime() - birthDate.getTime();
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

    console.log('entered birth date :', birthDate, ageInYears > 18);
    return ageInYears > 18;
  }

  //  You can use this method to check if the email is valid
  // isEmailValid(): boolean {
  //   return this.add_customer.get('email').valid ;
  // }
}
