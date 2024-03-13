import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.sass'],
})
export class UserDetailsComponent implements OnInit {
  @Input() user!: any;

  //viewUser!:any;
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {}
}
