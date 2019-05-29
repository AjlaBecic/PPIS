import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  private problemId : number;

  constructor(private route : ActivatedRoute) { 
  
  }

  ngOnInit() {
    this.problemId = Number.parseInt( this.route.snapshot.paramMap.get('id'));
  }

}
