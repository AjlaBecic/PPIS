import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Problem } from 'src/app/models/problem';
import { first } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-managerproblems',
  templateUrl: './managerproblems.component.html',
  styleUrls: ['./managerproblems.component.css']
})
export class ManagerproblemsComponent implements OnInit {
  private filter : string;
  private problems : Problem[];
  constructor(
    private requestService : RequestService,
    private route : ActivatedRoute
  ) { 
    this.route.url.subscribe(params => {
      this.filter = this.route.snapshot.paramMap.get('filter');
      this.problems = [];
      this.getProblems();
    });
   
  }

  getProblems() {
    if (this.filter === 'all') {
      this.requestService.getAllProblems()
      .pipe(first())
      .subscribe(response => {
        if (response.statusCode == 200)
          this.problems = response.data;
          console.log(this.problems);
      });
    }
    else if (this.filter === 'new') {
      this.requestService.getNewProblems()
      .pipe(first())
      .subscribe(response => {
        if (response.statusCode == 200)
          this.problems = response.data;
          console.log(this.problems);
      });
    }
    else if (this.filter === 'change') {
      this.requestService.getProblemsForChange()
      .pipe(first())
      .subscribe(response => {
        if (response.statusCode == 200)
          this.problems = response.data;
        console.log(this.problems);
      });
    }
  }

  ngOnInit() {
    this.getProblems();
  }



}
