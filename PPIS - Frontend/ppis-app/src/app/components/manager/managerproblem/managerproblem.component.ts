import { Component, OnInit, ViewChild } from '@angular/core';
import { Tabs } from 'src/app/enums/tabs.enum';
import { Group } from 'src/app/models/group';
import { ActivatedRoute } from '@angular/router';
import { Problem } from 'src/app/models/problem';
import { RequestService } from 'src/app/services/request.service';
import { first, filter } from 'rxjs/operators';
import { GroupService } from 'src/app/services/group.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import {Log} from 'src/app/models/log';
import { DocumentationComponent } from '../../documentation/documentation.component';
import { Change } from 'src/app/models/change';

@Component({
  selector: 'app-managerproblem',
  templateUrl: './managerproblem.component.html',
  styleUrls: ['./managerproblem.component.css']
})

export class ManagerproblemComponent implements OnInit {
  request : Problem;
  selectedStatus: string;
  selectedPriority: string;
  selectedCategory: string;
  problem: string;
  selectedTab: Tabs;
  change : Change;
  selectedGroup = new Group(-1, '');
  statusList = ["Novi problem (ceka validaciju)", "Planiranje u toku", "Trazenje izvornog uzroka u toku",
            "Traženje privremenog rjesenja u toku", "Trazenje trajnog rjesenja u toku", "Predlozena promjena",
            "Promjene u toku", "Zatvoreno", "Promjena nije prihvacena"];
  priorityList = ["Nizak", "Srednji", "Visok"];
  categoryList = ["Istraživanje", "Softver", "Hardver", "Mreža"];
  groupList = [
    /*new Group("Grupa 1", ["Ajla Bećić", "Maid Bajramović"], ""), new Group("Grupa 2", ["Amera Alić", "Rasim Šabanović"], ""),
    new Group("Grupa 3", ["Mirza Mesihović", "Dejan Aćimović"], ""), new Group("Grupa 4", ["Amar Burić", "Irhad Halilović"], ""),*/
  ];
  logList : Log[];
  currentProblem : Problem;
  initalProblem : Problem;
  currentUser : User;
  filter : string;


  @ViewChild(DocumentationComponent) documentationComp : DocumentationComponent;

  constructor(
    private route : ActivatedRoute,
    private requestService : RequestService,
    private groupService : GroupService,
    private userService : UserService
  ) {
    this.userService.currentUser.subscribe(x => this.currentUser = x);
  }

  getProblem(id) {
    this.groupService.getAll()
    .pipe(first())
    .subscribe(response => {
      console.log(response);
      if (response.statusCode == 200)
        this.groupList = response.data;
      this.requestService.getProblem(id)
      .pipe(first())
      .subscribe(response => {
        console.log(response);
        if (response.statusCode == 200)
          this.currentProblem = response.data;
          this.initalProblem = response.data;
      });
    });
  }

  ngOnInit() {
    this.getProblem(this.route.snapshot.paramMap.get('id'));
    this.filter = this.route.snapshot.paramMap.get('filter');
    this.selectedTab = 0;
    var id = this.route.snapshot.paramMap.get("id");
    this.requestService.getRequest(id);
    this.requestService.getLogs(id).subscribe(response => {
      this.logList = response;
      console.log(this.logList);
    });
  }

  save() {
    var prob: Problem = this.documentationComp.getCurrentProblem();
    this.currentProblem.description = prob.description;
    this.currentProblem.consequences = prob.consequences;
    this.currentProblem.solution = prob.solution;
    console.log(this.currentProblem);
    this.requestService.updateProblem(this.currentProblem)
    .pipe(first())
    .subscribe(response => {
      console.log(response);
      if(response.statusCode == 200)
        alert(response.data);
      else
        alert("Doslo je do greske");
    });
  }

  forward() {
    this.change = new Change();
    this.change.description = this.currentProblem.description;
    this.change.title= this.currentProblem.title;
    this.change.user=new User(this.currentUser.id, null, null, null, null, null, null);
    this.change.problem = this.currentProblem;
    this.change.isChange = true;
    this.requestService.newChangeRequest(this.change)
    .pipe(first())
    .subscribe(response => {
      console.log(response);
    })
  }

  /*dodijeliTehnicaru() {
    //alert( this.route.snapshot.paramMap.get("id"));

    this.requestService.dodijeliTehnicaru( this.route.snapshot.paramMap.get("id"))
    .pipe(first())
    .subscribe(response => {
      if (response.statusCode == 200) {
        alert("Zahtjev uspješno dodijeljen tehničaru!");
      }
      else {
        alert("Došlo je do greške!");
      }
    });

  }*/

  selectStatus(value: any){
    this.currentProblem.status = value;
  }

  selectPriority(value: any){
    this.currentProblem.priority = value;
  }

  selectCategory(value: any){
    this.currentProblem.category = value;
  }

  selectGroup(value: any){
    this.currentProblem.group = new Group(value.id, value.name);
    //this.selectedGroup = value;
  }

  selectTeamLead(value: any){
    //this.selectedGroup.teamLead = value;
    //console.log(this.selectedGroup.teamLead);
  }

  changeTab(value: any){
    this.selectedTab = value;
  }



}
