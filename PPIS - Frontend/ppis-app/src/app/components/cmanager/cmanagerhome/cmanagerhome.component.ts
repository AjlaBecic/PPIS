import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cmanagerhome',
  templateUrl: './cmanagerhome.component.html',
  styleUrls: ['./cmanagerhome.component.css']
})
export class CmanagerhomeComponent implements OnInit {
  private currentUser : User;
  constructor(
    private userService : UserService,
    private router : Router
  ) {
    this.userService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }

}

