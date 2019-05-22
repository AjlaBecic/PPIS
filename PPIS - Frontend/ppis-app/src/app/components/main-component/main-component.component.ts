import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/models/group';
import { Tabs } from 'src/app/enums/tabs.enum';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  selectedStatus: string;
  selectedPriority: string;
  selectedCategory: string;
  problem: string;
  selectedTab: Tabs;
  selectedGroup = new Group(null, null);
  statusList = ["Novi problem (čeka validaciju)", "Planiranje u toku", "Traženje izvornog uzroka u toku",
            "Traženje privremenog rješenja u toku", "Traženje trajnog rješenja u toku", "Predložena promjena",
            "Promjene u toku", "Zatvoreno", "Promjena nije prihvaćena"];
  priorityList = ["Nizak", "Visok"];
  categoryList = [];
  groupList = [
   
  ];


  constructor() { }

  ngOnInit() {
    this.selectedTab = 0;
  }

  selectStatus(value: any){
    this.selectedStatus = value;
  }

  selectPriority(value: any){
    this.selectedPriority = value;
  }

  selectCategory(value: any){
    this.selectedCategory = value;
  }

  selectGroup(value: any){
    this.selectedGroup = value;
  }

  selectTeamLead(value: any){
    
  }

  changeTab(value: any){
    this.selectedTab = value;
  }

}
