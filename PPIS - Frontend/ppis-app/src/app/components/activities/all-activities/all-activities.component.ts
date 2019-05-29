import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/models/activity';
import { ActivityService } from 'src/app/services/activity.service';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-all-activities',
  templateUrl: './all-activities.component.html',
  styleUrls: ['./all-activities.component.css']
})
export class AllActivitiesComponent implements OnInit {
  private activities : Activity[];
  private problemId : number;

  constructor(
    private activityService : ActivityService,
    private route : ActivatedRoute) {
      this.problemId = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    }
  
  getProblems() {
    this.activityService.allActivites(this.problemId)
    .pipe(first())
    .subscribe(response => {
      console.log(response);
      if (response.statusCode == 200)
        this.activities = response.data;
    })
  }

  ngOnInit() {
    this.getProblems();
  }

}
