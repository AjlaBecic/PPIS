import { Component, OnInit } from '@angular/core';
import { Problem } from 'src/app/models/problem';
import { RequestService } from 'src/app/services/request.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-adminrequests',
  templateUrl: './adminrequests.component.html',
  styleUrls: ['./adminrequests.component.css']
})
export class AdminrequestsComponent implements OnInit {
  private requests : Problem[];
  private currentUser : User;
  constructor(
    private requestService : RequestService,
    private userService : UserService
  ) { 
    this.userService.currentUser.subscribe(x => this.currentUser = x);
  }

  getRequests() {
    this.requestService.getRequestes()
    .pipe(first())
    .subscribe(response => {
      if (response.statusCode == 200) {
        this.requests = response.data;
      }
      else {

      }
    });
  }

  ngOnInit() {
    this.getRequests();
  }

}
