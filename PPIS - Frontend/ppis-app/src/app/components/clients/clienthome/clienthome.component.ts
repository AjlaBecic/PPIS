import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clienthome',
  templateUrl: './clienthome.component.html',
  styleUrls: ['./clienthome.component.css']
})
export class ClienthomeComponent implements OnInit {
  currentUser : User;
  constructor(
    private userUservice : UserService,
    private router : Router
  )
   { 
     this.userUservice.currentUser.subscribe(x => this.currentUser = x);
   }

  ngOnInit() {
  }


  logout() {
    this.userUservice.logout();
    this.router.navigate(['/login']);

  }

}
