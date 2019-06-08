import { Component, OnInit, Input } from '@angular/core';
import { Problem } from 'src/app/models/problem';
import { RequestService } from 'src/app/services/request.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})

export class DocumentationComponent implements OnInit {
  @Input() id: number;
  private currentProblem : Problem;
  private currentUser : User;
  constructor(
    private requestService : RequestService,
    private userService : UserService,
    private route : ActivatedRoute
  ) {
    this.userService.currentUser.subscribe(x => this.currentUser = x);
  }

  getDocumentation(id) {
    this.requestService.getDocumentation(id)
    .pipe(first())
    .subscribe(response => {
      if (response.statusCode == 200)
        this.currentProblem = response.data;
    })
  }

  getCurrentProblem(): Problem {
    return this.currentProblem;
  }

  ngOnInit() {
    this.getDocumentation(this.id);
  }


}
