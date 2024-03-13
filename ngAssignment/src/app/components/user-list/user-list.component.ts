import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

enum actions {
  view = 0,
  edit = 1,
  delete = 2,
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass'],
})
export class UserListComponent implements OnInit {
  userList: any = [];
  viewUser!: any;
  modelTitle!: string;
  selectedUser: any;

  enum: typeof actions = actions;
  enumVal!: number;
  updatedUserData = {};

  users!: any[];

  constructor(private usersService: UsersService) {}

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

  //actions for user list

  viewDetails(user: number): void {
    this.modelTitle = 'View Details';
    this.enumVal = this.enum.view;
    // this.usersService.getUser(this.userList.data[user-1]);
    this.selectedUser = user;
    console.log(this.selectedUser);
    // console.log(this.userList.data[user-1])
  }
  editUser(user: any) {
    this.modelTitle = 'Edit Details';
    this.enumVal = this.enum.edit;
    this.selectedUser = user;
  }
  confirmDelete(user: number): void {
    this.modelTitle = 'Delete Details';
    if (confirm('Are you sure you want to delete this user?')) {
      this.deleteUser(user);
    }
  }
  deleteUser(user: any) {
    console.log(`Deleting user with ID: ${user.id}`);
    this.usersService.deleteUser(user.id).subscribe(
      (response) => {
        console.log(response);
        this.userList.data = this.userList.data.filter(
          (u: any) => u.id !== user.id
        );
        alert('User deleted successfully');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateUser(updatedUser: any) {
    console.log(`Updating user with ID: ${updatedUser.id}`);

    this.usersService.updateUser(updatedUser.id, updatedUser).subscribe(
      (response) => {
        console.log(response);
        alert(`user response updated successfully for ${response.id}`);
      },
      (error) => {
        console.log(error);
        alert(`user response update unsuccessful ${error}`);
      }
    );
    this.closeDetails();
  }
  closeDetails() {
    this.selectedUser = null;
  }
}
