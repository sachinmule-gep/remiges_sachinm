import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.sass'],
})
export class EditDetailsComponent implements OnInit {
  @Input() user!: any;
  @Output() updateUser = new EventEmitter<any>();
  @Output() close = new EventEmitter<any>();

  userList: any = [];

  constructor(private usersService: UsersService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList(): any {
    this.usersService.getUsers().subscribe(
      (response) => {
        this.userList = response;
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
  }

  updateUserDetails() {
    this.updateUser.emit(this.user);
    console.log(this.user.value);
  }
  closeDetails() {
    this.close.emit();
  }
}
