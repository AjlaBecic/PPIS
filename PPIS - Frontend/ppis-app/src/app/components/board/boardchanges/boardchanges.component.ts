import { Component, OnInit } from '@angular/core';

import { RequestService } from 'src/app/services/request.service';
import { Change } from 'src/app/models/change';
import { first } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-boardchanges',
  templateUrl: './boardchanges.component.html',
  styleUrls: ['./boardchanges.component.css']
})
export class BoardchangesComponent implements OnInit {
  private filter : string;
  private changes : Change[];
  constructor(
    private requestService : RequestService,
    private route : ActivatedRoute
  ) {
    this.route.url.subscribe(params => {
      this.filter = this.route.snapshot.paramMap.get('filter');
      this.changes = [];
      this.getChanges();

    });

  }
  getChanges() {
    //alert("usla u getChanges");
    this.requestService.getChangesBoard()
      .pipe(first())
      .subscribe(response => {
        if (response.statusCode == 200)
          this.changes = response.data;
          console.log(this.changes);
      });
  }

  ngOnInit() {

    this.getChanges();
  }



}
