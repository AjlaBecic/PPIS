import { Component, OnInit } from '@angular/core';

import { Change } from 'src/app/models/change';
import { RequestService } from 'src/app/services/request.service';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { Tabs } from 'src/app/enums/tabs.enum';

@Component({
  selector: 'app-boardchange',
  templateUrl: './boardchange.component.html',
  styleUrls: ['./boardchange.component.css']
})
export class BoardchangeComponent implements OnInit {
  change : Change;

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

  constructor(
    private requestService : RequestService,
    private route : ActivatedRoute
  ) { }

  getChange() {
    var id = this.route.snapshot.paramMap.get("id");
    this.requestService.getChange(id)
    .pipe(first())
    .subscribe(response => {
      if (response.statusCode == 200)
        this.change = response.data;
    });
  }

  ngOnInit() {
    this.getChange();
  }

  markAsApproved() {
    //alert(this.change.id);
    this.requestService.markAsApproved(this.change.id)
    .pipe(first())
    .subscribe(response => {
      if (response.statusCode == 200) {
        alert("Promjena je odobrena!");
      }
      else {
        alert("Došlo je do greške!");
      }
    });
  }


  selectStatus(value: any){
    this.change.status = value;
  }

  selectPriority(value: any){
    this.change.priority = value;
  }

  selectCategory(value: any){
    this.change.category = value;
  }

  selectFinance(value: any){
    this.change.finansira = value;
  }
  selectPrice(value: any){
    this.change.cijena = value;
  }
  selectInfrastructure(value: any){
    this.change.infrastruktura = value;
  }

  selectResource(value: any){
    this.change.resursi = value;
  }
  selectBeginDate(value : any){
    this.change.begin=value;
  }

  changeTab(value: any){
    this.selectedTab = value;
  }

  selectDate(value: any){
    this.selectedDate = value;
  }
}

