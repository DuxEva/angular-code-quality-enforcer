import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  template: `
    <ul *ngIf="users">
      <li *ngFor="let user of users">{{ user.name }} ({{ user.age }})</li>
    </ul>
  `,
  styles: [
    `
      ul {
        list-style-type: none;
        padding: 0;
      }
      li {
        margin-bottom: 10px;
      }
    `,
  ],
  standalone: true,
})
export class UserListComponent implements OnInit {
  users: User[] | undefined;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }
}
