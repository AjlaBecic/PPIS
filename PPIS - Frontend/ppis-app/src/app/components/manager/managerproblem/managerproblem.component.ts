import { Component, OnInit } from '@angular/core';
import { Tabs } from 'src/app/enums/tabs.enum';
import { Group } from 'src/app/models/group';
import { ActivatedRoute } from '@angular/router';
import { Problem } from 'src/app/models/problem';
import { RequestService } from 'src/app/services/request.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-managerproblem',
  templateUrl: './managerproblem.component.html',
  styleUrls: ['./managerproblem.component.css']
})

export class ManagerproblemComponent implements OnInit {
  selectedStatus: string;
  selectedPriority: string;
  selectedCategory: string;
  problem: string;
  selectedTab: Tabs;
  selectedGroup = new Group("", [], "");
  statusList = ["Novi problem (čeka validaciju)", "Planiranje u toku", "Traženje izvornog uzroka u toku",
            "Traženje privremenog rješenja u toku", "Traženje trajnog rješenja u toku", "Predložena promjena",
            "Promjene u toku", "Zatvoreno", "Promjena nije prihvaćena"];
  priorityList = ["Nizak", "Visok"];
  categoryList = [];
  groupList = [
    new Group("Grupa 1", ["Ajla Bećić", "Maid Bajramović"], ""), new Group("Grupa 2", ["Amera Alić", "Rasim Šabanović"], ""),
    new Group("Grupa 3", ["Mirza Mesihović", "Dejan Aćimović"], ""), new Group("Grupa 4", ["Amar Burić", "Irhad Halilović"], ""),
  ];

  currentProblem : Problem;

  constructor(
    private route : ActivatedRoute,
    private requestService : RequestService
  ) { 
   
  }

  getProblem(id) {
    this.requestService.getProblem(id)
    .pipe(first())
    .subscribe(response => {
      console.log(response);
      if (response.statusCode == 200)
        this.currentProblem = response.data;
    })
  }

  ngOnInit() {
    this.getProblem(this.route.snapshot.paramMap.get('id'));
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
    this.selectedGroup.teamLead = value;
    console.log(this.selectedGroup.teamLead);
  }

  changeTab(value: any){
    this.selectedTab = value;
  }

}
