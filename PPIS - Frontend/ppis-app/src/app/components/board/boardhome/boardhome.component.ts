import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-boardhome',
  templateUrl: './boardhome.component.html',
  styleUrls: ['./boardhome.component.css']
})
export class BoardhomeComponent implements OnInit {
  private currentUser : User;
  constructor(
    private router : Router,
    private userService : UserService
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


