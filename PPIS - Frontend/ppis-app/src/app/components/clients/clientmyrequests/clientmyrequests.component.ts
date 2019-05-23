import { Component, OnInit } from '@angular/core';

import { Problem } from 'src/app/models/problem';
import { RequestService } from 'src/app/services/request.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientmyrequests',
  templateUrl: './clientmyrequests.component.html',
  styleUrls: ['./clientmyrequests.component.css']
})
export class ClientmyrequestsComponent implements OnInit {
  private requests : Problem[];
  private currentUser : User;
  constructor(
    private requestService : RequestService,
    private userService : UserService,
    private route : ActivatedRoute
  ) {

    this.userService.currentUser.subscribe(x => this.currentUser = x);
  }

  getRequests() {
    var id = this.route.snapshot.paramMap.get("id");
    alert(this.currentUser.id);
    this.requestService.getMyRequests(this.currentUser.id)
    .pipe(first())
    .subscribe(response => {
      if (response.statusCode == 200) {
        this.requests = response.data;
        console.log(response.data);
      }
      else {

      }
    });
  }

  ngOnInit() {
    this.getRequests();
  }

}
