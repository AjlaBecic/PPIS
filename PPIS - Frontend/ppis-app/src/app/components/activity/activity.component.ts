import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  @Input() id : number;
  allActivites : Boolean;
  constructor(private route : ActivatedRoute) {

  }

  onAllActivitiesClick(){
    this.allActivites = true;
  }

  onNewActivityClick(){
    this.allActivites = false;
  }

  ngOnInit() {
    this.allActivites = false;
  }

}
