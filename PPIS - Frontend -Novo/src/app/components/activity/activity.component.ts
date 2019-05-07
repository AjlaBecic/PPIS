import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommunicateService } from 'src/app/services/communicate.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  constructor(private communicationService: CommunicateService) { }

  @Output() createActivity = new EventEmitter<boolean>();

  ngOnInit() {
  }

  loadCreateActivity(){
    this.communicationService.emitCreateActivity(true);
  }

}
