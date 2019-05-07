import { Component } from '@angular/core';
import { CommunicateService } from './services/communicate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ppis-app';
  loadCreateActivity = false;
  selectedTab = 0;

  constructor(private communicationService: CommunicateService){
    this.communicationService.createActivity.subscribe(value => this.loadCreateActivity = value);
  }

  changeTab(value: any){
    this.selectedTab = value;
  }
}
