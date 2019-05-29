import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { RequestService } from 'src/app/services/request.service';
import { Problem } from 'src/app/models/problem';
import { first } from 'rxjs/operators';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
  selector: 'app-visual-representation',
  templateUrl: './visual-representation.component.html',
  styleUrls: ['./visual-representation.component.css']
})
export class VisualRepresentationComponent implements OnInit {
  currentUser : User;
  problems : Problem[];

  selectedCriteria = "";
  selectedCriteraIndex = -1;

  constructor(
    private userService : UserService, 
    private requestService : RequestService
  ) {
    this.userService.currentUser.subscribe(x => this.currentUser = x);
   }
  
  private criteriaList = [
    'Status', 'Priority', "Category"
  ];
  private valueList = [
    [
      "Novi problem (ceka validaciju)", "Planiranje u toku", "Trazenje izvornog uzroka u toku",
            "Traženje privremenog rjesenja u toku", "Trazenje trajnog rjesenja u toku", "Predlozena promjena",
            "Promjene u toku", "Zatvoreno", "Promjena nije prihvacena"
    ],
    [
      "Nizak", "Visok"
    ],
    [
      "Istraživanje", "Softver", "Hardver", "Mreža"
    ]
  ];

  getProblems() {
  if (this.currentUser.role === 'manager')  
    this.requestService.getAllProblems()
    .pipe(first())
    .subscribe(response => {
      this.problems = response.data;
    });
  else 
    this.requestService.getProblemsForTech(this.currentUser.group.id)
    .pipe(first())
    .subscribe(response => {
      if (response.statusCode == 200)
        this.problems = response.data;
    });
  }

  createData() {
    var i = 0, j = 0;
    var data = [];
    this.selectedCriteria = this.selectedCriteria.toLowerCase();
    var dataMap = new Map();

    for (i = 0; i < this.problems.length; i++) {
      if (!dataMap.has(this.problems[i][this.selectedCriteria])) {
        dataMap.set(this.problems[i][this.selectedCriteria], 1);
      }
      else {
        dataMap.set(this.problems[i][this.selectedCriteria], dataMap.get(this.problems[i][this.selectedCriteria]) + 1);
      } 
    }
    console.log(dataMap);
    for(let [key, value] of dataMap) {
      data.push({'key' : key, 'value' : value});
    } 

    this.generatePie(data);
  }
  
  generatePie(data) {
    console.log(data);
    am4core.useTheme(am4themes_animated);
 
    let chart = am4core.create("chartdiv", am4charts.PieChart);

    chart.data = data;

    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "value";
    pieSeries.dataFields.category = "key";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
  }
  ngOnInit() {
    this.getProblems();
  }

  selectCriteria(criteria) {
    this.selectedCriteria = criteria;
    switch(this.selectedCriteria) {
      case 'Status':
        this.selectedCriteraIndex = 0;
        break;
      case 'Priority':
        this.selectedCriteraIndex = 1;
        break;
      case 'Category':
        this.selectedCriteraIndex = 2;
        break;
    }
    this.createData();
  }

}
