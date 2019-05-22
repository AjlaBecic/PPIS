import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Problem } from 'src/app/models/problem';
import { first } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-technicianrequests',
  templateUrl: './technicianrequests.component.html',
  styleUrls: ['./technicianrequests.component.css']
})
export class TechnicianrequestsComponent implements OnInit {
  private filter : string;
  private problems : Problem[];
  private currentUser : User;
  constructor(
    private requestService : RequestService,
    private route : ActivatedRoute,
    private userService : UserService
  ) {
    this.userService.currentUser.subscribe(x => this.currentUser = x);

  }
  getProblems() {
    this.requestService.getProblemsForTech(this.currentUser.group.id)
      .pipe(first())
      .subscribe(response => {
        if (response.statusCode == 200)
          this.problems = response.data;
          console.log(this.problems);
      });
  }

  ngOnInit() {

    this.getProblems();
  }



}
