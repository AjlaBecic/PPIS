import { Component, OnInit } from '@angular/core';
import { Tabs } from 'src/app/enums/tabs.enum';
import { Group } from 'src/app/models/group';
import { ActivatedRoute } from '@angular/router';
import { Problem } from 'src/app/models/problem';
import { Change } from 'src/app/models/change';
import { RequestService } from 'src/app/services/request.service';
import { first } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-cmanagerchange',
  templateUrl: './cmanagerchange.component.html',
  styleUrls: ['./cmanagerchange.component.css']
})
export class CmanagerchangeComponent implements OnInit {
  private changeForm : FormGroup;
  private currentUser : User;

  change : Change;
  request : Problem;
  selectedDate: string;
  selectedStatus: string;
  selectedPriority: string;
  selectedCategory: string;
  selectedFinance : string;
  selectedPrice : number;
  selectedInfrastructure : string;
  selectedResource : string;
  selectedBeginDate : Date;
  problem: string;

  selectedTab: Tabs;
  statusList = ["Nova promjena (čeka validaciju)", "Planiranje u toku",
            "Traženje privremenog rješenja u toku", "Traženje trajnog rješenja u toku",
            "Promjene u toku", "Zatvoreno", "Promjena nije prihvaćena"];

  priorityList = ["Nizak", "Visok"];
  categoryList = ["Istraživanje", "Softver", "Hardver", "Mreža"];
  financeList = ["Vlastiti budžet", "Donacija", "Tender"];
  priceList = [100, 500, 1000, 2000, 5000, 10000, 50000+"+"];
  infrastructureList = ["Utice na "];
  resourceList = ["Novac", "Oprema", "Osoblje", "Alat"];
  currentChange : Change;


  constructor(
    private route : ActivatedRoute,
    private requestService : RequestService,
    private formBuilder : FormBuilder,
    private userService : UserService,
  ) {
    this.userService.currentUser.subscribe(x => this.currentUser = x);

  }


  getChange(id) {
    this.requestService.getChange(id)
    .pipe(first())
    .subscribe(response => {
      console.log(response);
      if (response.statusCode == 200)
        this.currentChange = response.data;
    })
  }

  ngOnInit() {
    this.getChange(this.route.snapshot.paramMap.get('id'));
    this.selectedTab = 0;
    var id = this.route.snapshot.paramMap.get("id");
    this.requestService.getRequest(id);
/*
    this.changeForm = this.formBuilder.group({
      title : ['', Validators.required],
      description : ['', [Validators.maxLength(100), Validators.minLength(5), Validators.required]]
    });
*/
  }
  spasi() {
    //this.currentChange.title=this.changeForm.value.title;
    //this.currentChange.description=this.changeForm.value.description;
    this.currentChange.isChange=true;
    console.log(this.currentChange);
    this.requestService.updateChange(this.currentChange)
    .pipe(first())
    .subscribe(response => {
      console.log(response);
});
  }

  dodijeliTehnicaru() {
    //alert( this.route.snapshot.paramMap.get("id"));

    this.requestService.dodijeliTehnicaruPromjena( this.route.snapshot.paramMap.get("id"))
    .pipe(first())
    .subscribe(response => {
      if (response.statusCode == 200) {
        alert("Zahtjev uspješno dodijeljen tehničaru!");
      }
      else {
        alert("Došlo je do greške!");
      }
    }, err => alert(err));


  }

  dodijeliOdboru() {
    //alert( this.route.snapshot.paramMap.get("id"));

    this.requestService.dodijeliOdboru( this.route.snapshot.paramMap.get("id"))
    .pipe(first())
    .subscribe(response => {
      if (response.statusCode == 200) {
        alert("Zahtjev uspješno dodijeljen odboru!");
      }
      else {
        alert("Došlo je do greške!");
      }
    });

  }

  selectStatus(value: any){
    this.currentChange.status = value;
  }

  selectPriority(value: any){
    this.currentChange.priority = value;
  }

  selectCategory(value: any){
    this.currentChange.category = value;
  }

  selectFinance(value: any){
    this.currentChange.finansira = value;
  }
  selectPrice(value: any){
    this.currentChange.cijena = value;
  }
  selectInfrastructure(value: any){
    this.currentChange.infrastruktura = value;
  }

  selectResource(value: any){
    this.currentChange.resursi = value;
  }
  selectBeginDate(value : any){
    this.currentChange.begin=value;
  }

  changeTab(value: any){
    this.selectedTab = value;
  }

  selectDate(value: any){
    this.selectedDate = value;
  }


}

