import { Component, OnInit } from '@angular/core';
import { CommunicateService } from 'src/app/services/communicate.service';

@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.css']
})
export class CreateActivityComponent implements OnInit {

  constructor(private communicationService: CommunicateService) { }

  ngOnInit() {
  }

  loadCreateActivity(){
    this.communicationService.emitCreateActivity(false);
  }

}
