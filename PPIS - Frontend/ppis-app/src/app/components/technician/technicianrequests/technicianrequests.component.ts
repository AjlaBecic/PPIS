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
  private filteredProblems : Problem[];
  private result : Boolean[];
  private currentUser : User;
  private selectedCriteria = "";
  private selectedCriteraValue = "";
  private selectedCriteriaIndex = -1;
  private criteriaList = [
    'Status', 'Priority', "Category", "No filter"
  ];
  private valueList = [
    [
      "Novi problem (ceka validaciju)", "Planiranje u toku", "Trazenje izvornog uzroka u toku",
            "Traženje privremenog rjesenja u toku", "Trazenje trajnog rjesenja u toku", "Predlozena promjena",
            "Promjene u toku", "Zatvoreno", "Promjena nije prihvacena"
    ],
    [
      "Nizak", "Visok"
    ],
    [
      "Istraživanje", "Softver", "Hardver", "Mreža"
    ]
  ];
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
          this.filteredProblems = this.problems;
          console.log(this.problems);
      });
  }

  ngOnInit() {

    this.getProblems();
  }

  selectCriteria(criteria){
    this.selectedCriteria = criteria;
    switch(this.selectedCriteria) {
      case 'Status':
        this.selectedCriteriaIndex = 0;

        break;
      case 'Priority':
        this.selectedCriteriaIndex = 1;
        break;
      case 'Category':
        this.selectedCriteriaIndex = 2;
        break;
      case 'No filter':
        this.selectedCriteriaIndex = -1;
        this.filteredProblems = this.problems;
        break;
      default:
        this.selectedCriteriaIndex = -1;
        break;
    }
    this.selectedCriteraValue = criteria;
  }

  selectCriteriaValue(value : any) {
    this.selectedCriteraValue = value;
    this.filteredProblems=[];
    switch(this.selectedCriteria) {
      case 'Status':
        this.problems.map((x,i) => {
          if (x.status === value)
            this.filteredProblems.push(x);
        });
        break;
      case 'Priority':
          this.problems.map((x,i) => {
            if (x.priority === value)
              this.filteredProblems.push(x);
          });
          break;
      case 'Category':
          this.problems.map((x,i) => {
            if (x.category === value)
              this.filteredProblems.push(x);
          });
          break;
    }
  }


}
