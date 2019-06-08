import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { ActivatedRoute } from '@angular/router';
import { Log } from 'src/app/models/log';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


@Component({
  selector: 'app-statistical-view',
  templateUrl: './statistical-view.component.html',
  styleUrls: ['./statistical-view.component.css']
})
export class StatisticalViewComponent implements OnInit {
  logList : Log[];
  problem : Request;
  constructor(private requestService : RequestService, private route : ActivatedRoute) { }

  ngOnInit() {
    var id = this.route.snapshot.paramMap.get('id');
    this.requestService.getLogs(id).subscribe(response => {
      this.logList = response;
      console.log(this.logList);
      this.createData();
    });

    this.requestService.getProblem(id).subscribe(response => {
      this.problem = response.data;
    })

  }

  createData() {
    var i = 0, j = 0;
    var data = [];
    var dataMap = new Map();
  

    for (i = 0; i < this.logList.length; i++) {
      if (!dataMap.has(this.logList[i].department)) {
        dataMap.set(this.logList[i].department, 1);
      }
      else {
        dataMap.set(this.logList[i].department, dataMap.get(this.logList[i].department) + 1);
      } 
    }
    console.log(dataMap);
    for(let [key, value] of dataMap) {
      data.push({'key' : key, 'value' : value});
    } 

    this.generateColumnChart(data);
  }

  generateColumnChart(data) {
    am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
let chart = am4core.create("chartdiv", am4charts.XYChart);

chart.data = data;

let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "key";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 30;

categoryAxis.renderer.labels.template.adapter.add("dy", function(dy, target) {
  if (target.dataItem && (target.dataItem.index & 2) == 2) {
    return dy + 25;
  }
  return dy;
});

let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create series
let series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "value";
series.dataFields.categoryX = "key";
series.name = "Departments";
series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
series.columns.template.fillOpacity = .8;

let columnTemplate = series.columns.template;
columnTemplate.strokeWidth = 2;
columnTemplate.strokeOpacity = 1;
  }

}
